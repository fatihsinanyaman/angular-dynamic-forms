import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, Injector, Optional } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AND_OPERATOR, DYNAMIC_MATCHERS, OR_OPERATOR } from "./dynamic-form-relation-matchers";
import { startWith } from "rxjs/operators";
import { merge } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-form-relation-matchers";
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
DynamicFormRelationService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_MATCHERS,] }] },
    { type: Injector }
];
DynamicFormRelationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormRelationService_Factory() { return new DynamicFormRelationService(i0.ɵɵinject(i1.DYNAMIC_MATCHERS, 8), i0.ɵɵinject(i0.INJECTOR)); }, token: DynamicFormRelationService, providedIn: "root" });
DynamicFormRelationService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __param(0, Optional()), __param(0, Inject(DYNAMIC_MATCHERS)),
    __metadata("design:paramtypes", [Array, Injector])
], DynamicFormRelationService);
export { DynamicFormRelationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFDSCxZQUFZLEVBQ1osZ0JBQWdCLEVBRWhCLFdBQVcsRUFDZCxNQUFNLGtDQUFrQyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7O0FBTzNDLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBRW5DLFlBQTBELFFBQXFDLEVBQzNFLFFBQWtCO1FBRG9CLGFBQVEsR0FBUixRQUFRLENBQTZCO1FBQzNFLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQThCLEVBQUUsS0FBZ0I7UUFFbkUsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRTs7WUFFN0MsTUFBTSxJQUFJLFNBQUcsU0FBUyxDQUFDLFFBQVEsbUNBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFaEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFL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YUFBYSxDQUFDO0lBQ3pCLENBQUM7Q0FDSixDQUFBOzt3Q0F4R2dCLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBQ2xCLFFBQVE7OztBQUg3QiwwQkFBMEI7SUFIdEMsVUFBVSxDQUFDO1FBQ1IsVUFBVSxFQUFFLE1BQU07S0FDckIsQ0FBQztJQUdlLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzRDQUNuQixRQUFRO0dBSDdCLDBCQUEwQixDQTBHdEM7U0ExR1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgQU5EX09QRVJBVE9SLFxuICAgIERZTkFNSUNfTUFUQ0hFUlMsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlcixcbiAgICBPUl9PUEVSQVRPUlxufSBmcm9tIFwiLi9keW5hbWljLWZvcm0tcmVsYXRpb24tbWF0Y2hlcnNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uIH0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtcmVsYXRpb24ubW9kZWxcIjtcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNSZWxhdGVkRm9ybUNvbnRyb2xzID0geyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9O1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1SZWxhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChEWU5BTUlDX01BVENIRVJTKSBwcml2YXRlIE1BVENIRVJTOiBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyW10sXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkRm9ybUNvbnRyb2xzKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgZ3JvdXA6IEZvcm1Hcm91cCk6IER5bmFtaWNSZWxhdGVkRm9ybUNvbnRyb2xzIHtcblxuICAgICAgICBjb25zdCBjb25kaXRpb25SZWR1Y2VyID0gKGNvbnRyb2xzLCBjb25kaXRpb24pID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGNvbmRpdGlvbi5yb290UGF0aCA/PyBjb25kaXRpb24uaWQ7XG5cbiAgICAgICAgICAgIGlmICghY29udHJvbHMuaGFzT3duUHJvcGVydHkocGF0aCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb25kaXRpb24ucm9vdFBhdGggPyBncm91cC5yb290LmdldChjb25kaXRpb24ucm9vdFBhdGgpIDogZ3JvdXAuZ2V0KGNvbmRpdGlvbi5pZCk7XG5cbiAgICAgICAgICAgICAgICBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sc1twYXRoXSA9IGNvbnRyb2wgOiBjb25zb2xlLndhcm4oYE5vIHJlbGF0ZWQgZm9ybSBjb250cm9sIHdpdGggaWQgJHtjb25kaXRpb24uaWR9IGNvdWxkIGJlIGZvdW5kYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWxhdGlvblJlZHVjZXIgPSAoY29udHJvbHMsIHJlbGF0aW9uKSA9PiByZWxhdGlvbi53aGVuLnJlZHVjZShjb25kaXRpb25SZWR1Y2VyLCBjb250cm9scyk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGVsLnJlbGF0aW9ucy5yZWR1Y2UocmVsYXRpb25SZWR1Y2VyLCB7fSk7XG4gICAgfVxuXG4gICAgZmluZFJlbGF0aW9uQnlNYXRjaGVyKHJlbGF0aW9uczogRHluYW1pY0Zvcm1Db250cm9sUmVsYXRpb25bXSwgbWF0Y2hlcjogRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlcik6IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0aW9ucy5maW5kKHJlbGF0aW9uID0+IFttYXRjaGVyLm1hdGNoLCBtYXRjaGVyLm9wcG9zaW5nTWF0Y2hdLmluY2x1ZGVzKHJlbGF0aW9uLm1hdGNoKSk7XG4gICAgfVxuXG4gICAgbWF0Y2hlc0NvbmRpdGlvbihyZWxhdGlvbjogRHluYW1pY0Zvcm1Db250cm9sUmVsYXRpb24sIHJlbGF0ZWRGb3JtQ29udHJvbHM6IER5bmFtaWNSZWxhdGVkRm9ybUNvbnRyb2xzLCBtYXRjaGVyOiBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSByZWxhdGlvbi5vcGVyYXRvciA/PyBPUl9PUEVSQVRPUjtcblxuICAgICAgICByZXR1cm4gcmVsYXRpb24ud2hlbi5yZWR1Y2UoKGhhc0FscmVhZHlNYXRjaGVkLCBjb25kaXRpb24sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjb25kaXRpb24ucm9vdFBhdGggPz8gY29uZGl0aW9uLmlkO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZEZvcm1Db250cm9sO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGNvbnRyb2xdIG9mIE9iamVjdC5lbnRyaWVzKHJlbGF0ZWRGb3JtQ29udHJvbHMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGVkRm9ybUNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWxhdGVkRm9ybUNvbnRyb2wgJiYgcmVsYXRpb24ubWF0Y2ggPT09IG1hdGNoZXIubWF0Y2gpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgb3BlcmF0b3IgPT09IEFORF9PUEVSQVRPUiAmJiAhaGFzQWxyZWFkeU1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgb3BlcmF0b3IgPT09IE9SX09QRVJBVE9SICYmIGhhc0FscmVhZHlNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb24udmFsdWUgPT09IHJlbGF0ZWRGb3JtQ29udHJvbC52YWx1ZSB8fCBjb25kaXRpb24uc3RhdHVzID09PSByZWxhdGVkRm9ybUNvbnRyb2wuc3RhdHVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVsYXRlZEZvcm1Db250cm9sICYmIHJlbGF0aW9uLm1hdGNoID09PSBtYXRjaGVyLm9wcG9zaW5nTWF0Y2gpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgb3BlcmF0b3IgPT09IEFORF9PUEVSQVRPUiAmJiBoYXNBbHJlYWR5TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIG9wZXJhdG9yID09PSBPUl9PUEVSQVRPUiAmJiAhaGFzQWxyZWFkeU1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAhKGNvbmRpdGlvbi52YWx1ZSA9PT0gcmVsYXRlZEZvcm1Db250cm9sLnZhbHVlIHx8IGNvbmRpdGlvbi5zdGF0dXMgPT09IHJlbGF0ZWRGb3JtQ29udHJvbC5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVJlbGF0aW9ucyhtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IEZvcm1Db250cm9sKTogU3Vic2NyaXB0aW9uW10ge1xuXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRGb3JtQ29udHJvbHMgPSB0aGlzLmdldFJlbGF0ZWRGb3JtQ29udHJvbHMobW9kZWwsIGdyb3VwKTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgICAgICBPYmplY3QudmFsdWVzKHJlbGF0ZWRGb3JtQ29udHJvbHMpLmZvckVhY2gocmVsYXRlZENvbnRyb2wgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoYW5nZXMgPSByZWxhdGVkQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShzdGFydFdpdGgocmVsYXRlZENvbnRyb2wudmFsdWUpKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NoYW5nZXMgPSByZWxhdGVkQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHJlbGF0ZWRDb250cm9sLnN0YXR1cykpO1xuXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2gobWVyZ2UodmFsdWVDaGFuZ2VzLCBzdGF0dXNDaGFuZ2VzKS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5NQVRDSEVSUy5mb3JFYWNoKG1hdGNoZXIgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uID0gdGhpcy5maW5kUmVsYXRpb25CeU1hdGNoZXIobW9kZWwucmVsYXRpb25zLCBtYXRjaGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNNYXRjaCA9IHRoaXMubWF0Y2hlc0NvbmRpdGlvbihyZWxhdGlvbiwgcmVsYXRlZEZvcm1Db250cm9scywgbWF0Y2hlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyLm9uQ2hhbmdlKGhhc01hdGNoLCBtb2RlbCwgY29udHJvbCwgdGhpcy5pbmplY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbnM7XG4gICAgfVxufVxuIl19