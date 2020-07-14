import { __decorate, __metadata, __param, __read, __values } from "tslib";
import { Inject, Injectable, Injector, Optional } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AND_OPERATOR, DYNAMIC_MATCHERS, OR_OPERATOR } from "./dynamic-form-relation-matchers";
import { startWith } from "rxjs/operators";
import { merge } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-form-relation-matchers";
import * as ɵngcc0 from '@angular/core';
var DynamicFormRelationService = /** @class */ (function () {
    function DynamicFormRelationService(MATCHERS, injector) {
        this.MATCHERS = MATCHERS;
        this.injector = injector;
    }
    DynamicFormRelationService.prototype.getRelatedFormControls = function (model, group) {
        var conditionReducer = function (controls, condition) {
            var _a;
            var path = (_a = condition.rootPath) !== null && _a !== void 0 ? _a : condition.id;
            if (!controls.hasOwnProperty(path)) {
                var control = condition.rootPath ? group.root.get(condition.rootPath) : group.get(condition.id);
                control instanceof FormControl ? controls[path] = control : console.warn("No related form control with id " + condition.id + " could be found");
            }
            return controls;
        };
        var relationReducer = function (controls, relation) { return relation.when.reduce(conditionReducer, controls); };
        return model.relations.reduce(relationReducer, {});
    };
    DynamicFormRelationService.prototype.findRelationByMatcher = function (relations, matcher) {
        return relations.find(function (relation) { return [matcher.match, matcher.opposingMatch].includes(relation.match); });
    };
    DynamicFormRelationService.prototype.matchesCondition = function (relation, relatedFormControls, matcher) {
        var _a;
        var operator = (_a = relation.operator) !== null && _a !== void 0 ? _a : OR_OPERATOR;
        return relation.when.reduce(function (hasAlreadyMatched, condition, index) {
            var e_1, _a;
            var _b;
            var path = (_b = condition.rootPath) !== null && _b !== void 0 ? _b : condition.id;
            var relatedFormControl;
            try {
                for (var _c = __values(Object.entries(relatedFormControls)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], control = _e[1];
                    if (key === path) {
                        relatedFormControl = control;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
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
    };
    DynamicFormRelationService.prototype.subscribeRelations = function (model, group, control) {
        var _this = this;
        var relatedFormControls = this.getRelatedFormControls(model, group);
        var subscriptions = [];
        Object.values(relatedFormControls).forEach(function (relatedControl) {
            var valueChanges = relatedControl.valueChanges.pipe(startWith(relatedControl.value));
            var statusChanges = relatedControl.statusChanges.pipe(startWith(relatedControl.status));
            subscriptions.push(merge(valueChanges, statusChanges).subscribe(function () {
                _this.MATCHERS.forEach(function (matcher) {
                    var relation = _this.findRelationByMatcher(model.relations, matcher);
                    if (relation !== undefined) {
                        var hasMatch = _this.matchesCondition(relation, relatedFormControls, matcher);
                        matcher.onChange(hasMatch, model, control, _this.injector);
                    }
                });
            }));
        });
        return subscriptions;
    };
    DynamicFormRelationService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_MATCHERS,] }] },
        { type: Injector }
    ]; };
    DynamicFormRelationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormRelationService_Factory() { return new DynamicFormRelationService(i0.ɵɵinject(i1.DYNAMIC_MATCHERS, 8), i0.ɵɵinject(i0.INJECTOR)); }, token: DynamicFormRelationService, providedIn: "root" });
    DynamicFormRelationService = __decorate([ __param(0, Optional()), __param(0, Inject(DYNAMIC_MATCHERS)),
        __metadata("design:paramtypes", [Array, Injector])
    ], DynamicFormRelationService);
DynamicFormRelationService.ɵfac = function DynamicFormRelationService_Factory(t) { return new (t || DynamicFormRelationService)(ɵngcc0.ɵɵinject(DYNAMIC_MATCHERS, 8), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
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
    return DynamicFormRelationService;
}());
export { DynamicFormRelationService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1yZWxhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQ0gsWUFBWSxFQUNaLGdCQUFnQixFQUVoQixXQUFXLEVBQ2QsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7QUFPM0M7SUFFSSxvQ0FBMEQsUUFBcUMsRUFDM0UsUUFBa0I7UUFEb0IsYUFBUSxHQUFSLFFBQVEsQ0FBNkI7UUFDM0UsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDO0lBRUQsMkRBQXNCLEdBQXRCLFVBQXVCLEtBQThCLEVBQUUsS0FBZ0I7UUFFbkUsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLFFBQVEsRUFBRSxTQUFTOztZQUV6QyxJQUFNLElBQUksU0FBRyxTQUFTLENBQUMsUUFBUSxtQ0FBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUVoQyxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVsRyxP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QyxDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQzs7NENBdkdZLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQUNsQixRQUFROzs7SUFIN0IsMEJBQTBCLGVBRTVCLFNBTFYsVUFBVSxDQUFDLGNBQ1IsVUFBVSxFQUFFLE1BQU0sVUFDckIsOURBQ08sQ0FFUyxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUhuRCxnREFJZ0MsUUFBUTtPQUg3QiwwQkFBMEIsQ0EwR3RDOzs7Ozs7Ozs7Ozs7NkRBQ0Q7cUNBN0hBO0NBNEhDLEFBMUdELElBMEdDO1NBMUdZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIEFORF9PUEVSQVRPUixcbiAgICBEWU5BTUlDX01BVENIRVJTLFxuICAgIER5bmFtaWNGb3JtQ29udHJvbE1hdGNoZXIsXG4gICAgT1JfT1BFUkFUT1Jcbn0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXJlbGF0aW9uLW1hdGNoZXJzXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xSZWxhdGlvbiB9IGZyb20gXCIuLi9tb2RlbC9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLXJlbGF0aW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgdHlwZSBEeW5hbWljUmVsYXRlZEZvcm1Db250cm9scyA9IHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtUmVsYXRpb25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRFlOQU1JQ19NQVRDSEVSUykgcHJpdmF0ZSBNQVRDSEVSUzogRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlcltdLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZEZvcm1Db250cm9scyhtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGdyb3VwOiBGb3JtR3JvdXApOiBEeW5hbWljUmVsYXRlZEZvcm1Db250cm9scyB7XG5cbiAgICAgICAgY29uc3QgY29uZGl0aW9uUmVkdWNlciA9IChjb250cm9scywgY29uZGl0aW9uKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjb25kaXRpb24ucm9vdFBhdGggPz8gY29uZGl0aW9uLmlkO1xuXG4gICAgICAgICAgICBpZiAoIWNvbnRyb2xzLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sID0gY29uZGl0aW9uLnJvb3RQYXRoID8gZ3JvdXAucm9vdC5nZXQoY29uZGl0aW9uLnJvb3RQYXRoKSA6IGdyb3VwLmdldChjb25kaXRpb24uaWQpO1xuXG4gICAgICAgICAgICAgICAgY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbHNbcGF0aF0gPSBjb250cm9sIDogY29uc29sZS53YXJuKGBObyByZWxhdGVkIGZvcm0gY29udHJvbCB3aXRoIGlkICR7Y29uZGl0aW9uLmlkfSBjb3VsZCBiZSBmb3VuZGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVsYXRpb25SZWR1Y2VyID0gKGNvbnRyb2xzLCByZWxhdGlvbikgPT4gcmVsYXRpb24ud2hlbi5yZWR1Y2UoY29uZGl0aW9uUmVkdWNlciwgY29udHJvbHMpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbC5yZWxhdGlvbnMucmVkdWNlKHJlbGF0aW9uUmVkdWNlciwge30pO1xuICAgIH1cblxuICAgIGZpbmRSZWxhdGlvbkJ5TWF0Y2hlcihyZWxhdGlvbnM6IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uW10sIG1hdGNoZXI6IER5bmFtaWNGb3JtQ29udHJvbE1hdGNoZXIpOiBEeW5hbWljRm9ybUNvbnRyb2xSZWxhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiByZWxhdGlvbnMuZmluZChyZWxhdGlvbiA9PiBbbWF0Y2hlci5tYXRjaCwgbWF0Y2hlci5vcHBvc2luZ01hdGNoXS5pbmNsdWRlcyhyZWxhdGlvbi5tYXRjaCkpO1xuICAgIH1cblxuICAgIG1hdGNoZXNDb25kaXRpb24ocmVsYXRpb246IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uLCByZWxhdGVkRm9ybUNvbnRyb2xzOiBEeW5hbWljUmVsYXRlZEZvcm1Db250cm9scywgbWF0Y2hlcjogRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlcik6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IG9wZXJhdG9yID0gcmVsYXRpb24ub3BlcmF0b3IgPz8gT1JfT1BFUkFUT1I7XG5cbiAgICAgICAgcmV0dXJuIHJlbGF0aW9uLndoZW4ucmVkdWNlKChoYXNBbHJlYWR5TWF0Y2hlZCwgY29uZGl0aW9uLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gY29uZGl0aW9uLnJvb3RQYXRoID8/IGNvbmRpdGlvbi5pZDtcblxuICAgICAgICAgICAgbGV0IHJlbGF0ZWRGb3JtQ29udHJvbDtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCBjb250cm9sXSBvZiBPYmplY3QuZW50cmllcyhyZWxhdGVkRm9ybUNvbnRyb2xzKSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZEZvcm1Db250cm9sID0gY29udHJvbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVsYXRlZEZvcm1Db250cm9sICYmIHJlbGF0aW9uLm1hdGNoID09PSBtYXRjaGVyLm1hdGNoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIG9wZXJhdG9yID09PSBBTkRfT1BFUkFUT1IgJiYgIWhhc0FscmVhZHlNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIG9wZXJhdG9yID09PSBPUl9PUEVSQVRPUiAmJiBoYXNBbHJlYWR5TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uLnZhbHVlID09PSByZWxhdGVkRm9ybUNvbnRyb2wudmFsdWUgfHwgY29uZGl0aW9uLnN0YXR1cyA9PT0gcmVsYXRlZEZvcm1Db250cm9sLnN0YXR1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlbGF0ZWRGb3JtQ29udHJvbCAmJiByZWxhdGlvbi5tYXRjaCA9PT0gbWF0Y2hlci5vcHBvc2luZ01hdGNoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIG9wZXJhdG9yID09PSBBTkRfT1BFUkFUT1IgJiYgaGFzQWxyZWFkeU1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBvcGVyYXRvciA9PT0gT1JfT1BFUkFUT1IgJiYgIWhhc0FscmVhZHlNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gIShjb25kaXRpb24udmFsdWUgPT09IHJlbGF0ZWRGb3JtQ29udHJvbC52YWx1ZSB8fCBjb25kaXRpb24uc3RhdHVzID09PSByZWxhdGVkRm9ybUNvbnRyb2wuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVSZWxhdGlvbnMobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCBncm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBGb3JtQ29udHJvbCk6IFN1YnNjcmlwdGlvbltdIHtcblxuICAgICAgICBjb25zdCByZWxhdGVkRm9ybUNvbnRyb2xzID0gdGhpcy5nZXRSZWxhdGVkRm9ybUNvbnRyb2xzKG1vZGVsLCBncm91cCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhyZWxhdGVkRm9ybUNvbnRyb2xzKS5mb3JFYWNoKHJlbGF0ZWRDb250cm9sID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGFuZ2VzID0gcmVsYXRlZENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHJlbGF0ZWRDb250cm9sLnZhbHVlKSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXNDaGFuZ2VzID0gcmVsYXRlZENvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChyZWxhdGVkQ29udHJvbC5zdGF0dXMpKTtcblxuICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKG1lcmdlKHZhbHVlQ2hhbmdlcywgc3RhdHVzQ2hhbmdlcykuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuTUFUQ0hFUlMuZm9yRWFjaChtYXRjaGVyID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbiA9IHRoaXMuZmluZFJlbGF0aW9uQnlNYXRjaGVyKG1vZGVsLnJlbGF0aW9ucywgbWF0Y2hlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzTWF0Y2ggPSB0aGlzLm1hdGNoZXNDb25kaXRpb24ocmVsYXRpb24sIHJlbGF0ZWRGb3JtQ29udHJvbHMsIG1hdGNoZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlci5vbkNoYW5nZShoYXNNYXRjaCwgbW9kZWwsIGNvbnRyb2wsIHRoaXMuaW5qZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25zO1xuICAgIH1cbn1cbiJdfQ==