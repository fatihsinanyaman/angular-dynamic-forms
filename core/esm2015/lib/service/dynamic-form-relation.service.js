import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, Injector, Optional } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AND_OPERATOR, DYNAMIC_MATCHERS, OR_OPERATOR } from "./dynamic-form-relation-matchers";
import { startWith } from "rxjs/operators";
import { merge } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-form-relation-matchers";
import * as ɵngcc0 from '@angular/core';
let DynamicFormRelationService = class DynamicFormRelationService {
    constructor(MATCHERS, injector) {
        this.MATCHERS = MATCHERS;
        this.injector = injector;
    }
    getRelatedFormControls(model, group) {
        const conditionReducer = (controls, condition) => {
            var _a;
            const path = (_a = condition.rootPath) !== null && _a !== void 0 ? _a : condition.id;
            if (!controls.hasOwnProperty(path)) {
                const control = condition.rootPath ? group.root.get(condition.rootPath) : group.get(condition.id);
                control instanceof FormControl ? controls[path] = control : console.warn(`No related form control with id ${condition.id} could be found`);
            }
            return controls;
        };
        const relationReducer = (controls, relation) => relation.when.reduce(conditionReducer, controls);
        return model.relations.reduce(relationReducer, {});
    }
    findRelationByMatcher(relations, matcher) {
        return relations.find(relation => [matcher.match, matcher.opposingMatch].includes(relation.match));
    }
    matchesCondition(relation, relatedFormControls, matcher) {
        var _a;
        const operator = (_a = relation.operator) !== null && _a !== void 0 ? _a : OR_OPERATOR;
        return relation.when.reduce((hasAlreadyMatched, condition, index) => {
            var _a;
            const path = (_a = condition.rootPath) !== null && _a !== void 0 ? _a : condition.id;
            let relatedFormControl;
            for (const [key, control] of Object.entries(relatedFormControls)) {
                if (key === path) {
                    relatedFormControl = control;
                    break;
                }
            }
            if (relatedFormControl && relation.match === matcher.match) {
                if (index > 0 && operator === AND_OPERATOR && !hasAlreadyMatched) {
                    return false;
                }
                if (index > 0 && operator === OR_OPERATOR && hasAlreadyMatched) {
                    return true;
                }
                return condition.value === relatedFormControl.value || condition.status === relatedFormControl.status;
            }
            if (relatedFormControl && relation.match === matcher.opposingMatch) {
                if (index > 0 && operator === AND_OPERATOR && hasAlreadyMatched) {
                    return true;
                }
                if (index > 0 && operator === OR_OPERATOR && !hasAlreadyMatched) {
                    return false;
                }
                return !(condition.value === relatedFormControl.value || condition.status === relatedFormControl.status);
            }
            return false;
        }, false);
    }
    subscribeRelations(model, group, control) {
        const relatedFormControls = this.getRelatedFormControls(model, group);
        const subscriptions = [];
        Object.values(relatedFormControls).forEach(relatedControl => {
            const valueChanges = relatedControl.valueChanges.pipe(startWith(relatedControl.value));
            const statusChanges = relatedControl.statusChanges.pipe(startWith(relatedControl.status));
            subscriptions.push(merge(valueChanges, statusChanges).subscribe(() => {
                this.MATCHERS.forEach(matcher => {
                    const relation = this.findRelationByMatcher(model.relations, matcher);
                    if (relation !== undefined) {
                        const hasMatch = this.matchesCondition(relation, relatedFormControls, matcher);
                        matcher.onChange(hasMatch, model, control, this.injector);
                    }
                });
            }));
        });
        return subscriptions;
    }
};
DynamicFormRelationService.ɵfac = function DynamicFormRelationService_Factory(t) { return new (t || DynamicFormRelationService)(ɵngcc0.ɵɵinject(DYNAMIC_MATCHERS, 8), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
DynamicFormRelationService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_MATCHERS,] }] },
    { type: Injector }
];
DynamicFormRelationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormRelationService_Factory() { return new DynamicFormRelationService(i0.ɵɵinject(i1.DYNAMIC_MATCHERS, 8), i0.ɵɵinject(i0.INJECTOR)); }, token: DynamicFormRelationService, providedIn: "root" });
DynamicFormRelationService = __decorate([ __param(0, Optional()), __param(0, Inject(DYNAMIC_MATCHERS)),
    __metadata("design:paramtypes", [Array, Injector])
], DynamicFormRelationService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormRelationService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DYNAMIC_MATCHERS]
            }] }, { type: ɵngcc0.Injector }]; }, null); })();
export { DynamicFormRelationService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1yZWxhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQ0gsWUFBWSxFQUNaLGdCQUFnQixFQUVoQixXQUFXLEVBQ2QsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7QUFPM0MsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFFbkMsWUFBMEQsUUFBcUMsRUFDM0UsUUFBa0I7UUFEb0IsYUFBUSxHQUFSLFFBQVEsQ0FBNkI7UUFDM0UsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBOEIsRUFBRSxLQUFnQjtRQUVuRSxNQUFNLGdCQUFnQixHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFOztZQUU3QyxNQUFNLElBQUksU0FBRyxTQUFTLENBQUMsUUFBUSxtQ0FBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUVoQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMs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Q0FBQztDQUNKOzJNQUFBOzt3Q0F4R2dCLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBQ2xCLFFBQVE7OztBQUg3QiwwQkFBMEIsZUFFNUIsS0FMVixVQUFVLENBQUMsVUFDUixVQUFVLEVBQUUsTUFBTSxNQUNyQixDQUFDLG5EQUNFLENBRWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7NENBQ25CLFFBQVE7R0FIN0IsMEJBQTBCLENBMEd0Qzs7Ozs7Ozs7Ozs7NkRBQ0Q7U0EzR2EsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgQU5EX09QRVJBVE9SLFxuICAgIERZTkFNSUNfTUFUQ0hFUlMsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlcixcbiAgICBPUl9PUEVSQVRPUlxufSBmcm9tIFwiLi9keW5hbWljLWZvcm0tcmVsYXRpb24tbWF0Y2hlcnNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uIH0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtcmVsYXRpb24ubW9kZWxcIjtcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNSZWxhdGVkRm9ybUNvbnRyb2xzID0geyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9O1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1SZWxhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChEWU5BTUlDX01BVENIRVJTKSBwcml2YXRlIE1BVENIRVJTOiBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyW10sXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkRm9ybUNvbnRyb2xzKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgZ3JvdXA6IEZvcm1Hcm91cCk6IER5bmFtaWNSZWxhdGVkRm9ybUNvbnRyb2xzIHtcblxuICAgICAgICBjb25zdCBjb25kaXRpb25SZWR1Y2VyID0gKGNvbnRyb2xzLCBjb25kaXRpb24pID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGNvbmRpdGlvbi5yb290UGF0aCA/PyBjb25kaXRpb24uaWQ7XG5cbiAgICAgICAgICAgIGlmICghY29udHJvbHMuaGFzT3duUHJvcGVydHkocGF0aCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb25kaXRpb24ucm9vdFBhdGggPyBncm91cC5yb290LmdldChjb25kaXRpb24ucm9vdFBhdGgpIDogZ3JvdXAuZ2V0KGNvbmRpdGlvbi5pZCk7XG5cbiAgICAgICAgICAgICAgICBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sc1twYXRoXSA9IGNvbnRyb2wgOiBjb25zb2xlLndhcm4oYE5vIHJlbGF0ZWQgZm9ybSBjb250cm9sIHdpdGggaWQgJHtjb25kaXRpb24uaWR9IGNvdWxkIGJlIGZvdW5kYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWxhdGlvblJlZHVjZXIgPSAoY29udHJvbHMsIHJlbGF0aW9uKSA9PiByZWxhdGlvbi53aGVuLnJlZHVjZShjb25kaXRpb25SZWR1Y2VyLCBjb250cm9scyk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGVsLnJlbGF0aW9ucy5yZWR1Y2UocmVsYXRpb25SZWR1Y2VyLCB7fSk7XG4gICAgfVxuXG4gICAgZmluZFJlbGF0aW9uQnlNYXRjaGVyKHJlbGF0aW9uczogRHluYW1pY0Zvcm1Db250cm9sUmVsYXRpb25bXSwgbWF0Y2hlcjogRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlcik6IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0aW9ucy5maW5kKHJlbGF0aW9uID0+IFttYXRjaGVyLm1hdGNoLCBtYXRjaGVyLm9wcG9zaW5nTWF0Y2hdLmluY2x1ZGVzKHJlbGF0aW9uLm1hdGNoKSk7XG4gICAgfVxuXG4gICAgbWF0Y2hlc0NvbmRpdGlvbihyZWxhdGlvbjogRHluYW1pY0Zvcm1Db250cm9sUmVsYXRpb24sIHJlbGF0ZWRGb3JtQ29udHJvbHM6IER5bmFtaWNSZWxhdGVkRm9ybUNvbnRyb2xzLCBtYXRjaGVyOiBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSByZWxhdGlvbi5vcGVyYXRvciA/PyBPUl9PUEVSQVRPUjtcblxuICAgICAgICByZXR1cm4gcmVsYXRpb24ud2hlbi5yZWR1Y2UoKGhhc0FscmVhZHlNYXRjaGVkLCBjb25kaXRpb24sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjb25kaXRpb24ucm9vdFBhdGggPz8gY29uZGl0aW9uLmlkO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZEZvcm1Db250cm9sO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGNvbnRyb2xdIG9mIE9iamVjdC5lbnRyaWVzKHJlbGF0ZWRGb3JtQ29udHJvbHMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGVkRm9ybUNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWxhdGVkRm9ybUNvbnRyb2wgJiYgcmVsYXRpb24ubWF0Y2ggPT09IG1hdGNoZXIubWF0Y2gpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgb3BlcmF0b3IgPT09IEFORF9PUEVSQVRPUiAmJiAhaGFzQWxyZWFkeU1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgb3BlcmF0b3IgPT09IE9SX09QRVJBVE9SICYmIGhhc0FscmVhZHlNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb24udmFsdWUgPT09IHJlbGF0ZWRGb3JtQ29udHJvbC52YWx1ZSB8fCBjb25kaXRpb24uc3RhdHVzID09PSByZWxhdGVkRm9ybUNvbnRyb2wuc3RhdHVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVsYXRlZEZvcm1Db250cm9sICYmIHJlbGF0aW9uLm1hdGNoID09PSBtYXRjaGVyLm9wcG9zaW5nTWF0Y2gpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgb3BlcmF0b3IgPT09IEFORF9PUEVSQVRPUiAmJiBoYXNBbHJlYWR5TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIG9wZXJhdG9yID09PSBPUl9PUEVSQVRPUiAmJiAhaGFzQWxyZWFkeU1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAhKGNvbmRpdGlvbi52YWx1ZSA9PT0gcmVsYXRlZEZvcm1Db250cm9sLnZhbHVlIHx8IGNvbmRpdGlvbi5zdGF0dXMgPT09IHJlbGF0ZWRGb3JtQ29udHJvbC5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVJlbGF0aW9ucyhtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IEZvcm1Db250cm9sKTogU3Vic2NyaXB0aW9uW10ge1xuXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRGb3JtQ29udHJvbHMgPSB0aGlzLmdldFJlbGF0ZWRGb3JtQ29udHJvbHMobW9kZWwsIGdyb3VwKTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgICAgICBPYmplY3QudmFsdWVzKHJlbGF0ZWRGb3JtQ29udHJvbHMpLmZvckVhY2gocmVsYXRlZENvbnRyb2wgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoYW5nZXMgPSByZWxhdGVkQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShzdGFydFdpdGgocmVsYXRlZENvbnRyb2wudmFsdWUpKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NoYW5nZXMgPSByZWxhdGVkQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHJlbGF0ZWRDb250cm9sLnN0YXR1cykpO1xuXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2gobWVyZ2UodmFsdWVDaGFuZ2VzLCBzdGF0dXNDaGFuZ2VzKS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5NQVRDSEVSUy5mb3JFYWNoKG1hdGNoZXIgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uID0gdGhpcy5maW5kUmVsYXRpb25CeU1hdGNoZXIobW9kZWwucmVsYXRpb25zLCBtYXRjaGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNNYXRjaCA9IHRoaXMubWF0Y2hlc0NvbmRpdGlvbihyZWxhdGlvbiwgcmVsYXRlZEZvcm1Db250cm9scywgbWF0Y2hlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyLm9uQ2hhbmdlKGhhc01hdGNoLCBtb2RlbCwgY29udHJvbCwgdGhpcy5pbmplY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbnM7XG4gICAgfVxufVxuIl19