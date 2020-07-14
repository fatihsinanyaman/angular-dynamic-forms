import { __decorate, __values } from "tslib";
import { Injectable, QueryList } from "@angular/core";
import { DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT } from "../directive/dynamic-template.directive";
import { isObject, isString } from "../utils/core.utils";
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
var DynamicFormLayoutService = /** @class */ (function () {
    function DynamicFormLayoutService() {
    }
    DynamicFormLayoutService.prototype.findById = function (id, formLayout) {
        var e_1, _a;
        if (isObject(formLayout)) {
            try {
                for (var _b = __values(Object.keys(formLayout)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    if (key === id) {
                        return formLayout[key];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return null;
    };
    DynamicFormLayoutService.prototype.findByModel = function (model, formLayout) {
        var e_2, _a;
        var controlLayout = null;
        if (isObject(formLayout)) {
            var _loop_1 = function (key) {
                key.split(",").forEach(function (substring) {
                    var selector = substring.trim();
                    if (selector === model.id || selector === model.type) {
                        controlLayout = formLayout[key];
                    }
                });
            };
            try {
                for (var _b = __values(Object.keys(formLayout)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _loop_1(key);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return controlLayout;
    };
    DynamicFormLayoutService.prototype.filterTemplatesByModel = function (model, templates) {
        var filterCallback = function (template) {
            return template.modelId === model.id || template.modelType === model.type;
        };
        if (templates instanceof QueryList) {
            return templates.filter(filterCallback);
        }
        else if (Array.isArray(templates)) {
            return templates.filter(filterCallback);
        }
        return [];
    };
    DynamicFormLayoutService.prototype.getAlignedTemplate = function (model, templates, alignment) {
        return this.filterTemplatesByModel(model, templates)
            .find(function (template) { return template.as === null && template.align === alignment; });
    };
    /*
    getIndexedTemplates(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective[] | undefined {
        return this.filterTemplatesByModel(model, templates).filter(template => template.as === null);
    }
    */
    DynamicFormLayoutService.prototype.getStartTemplate = function (model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.Start);
    };
    DynamicFormLayoutService.prototype.getEndTemplate = function (model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End);
    };
    DynamicFormLayoutService.prototype.getClass = function (layout, context, place) {
        if (isObject(layout) && layout.hasOwnProperty(context)) {
            var config = layout[context];
            if (config.hasOwnProperty(place)) {
                return config[place];
            }
        }
        return "";
    };
    DynamicFormLayoutService.prototype.getHostClass = function (layout) {
        var keys = ["element", "grid"];
        var cls = "";
        if (isObject(layout)) {
            keys.forEach(function (key) {
                if (isObject(layout[key]) && isString(layout[key].host)) {
                    cls = cls + (" " + layout[key].host);
                }
            });
        }
        return cls;
    };
    DynamicFormLayoutService.prototype.getElementId = function (model) {
        var id = model.id;
        var parent = model.parent;
        while (parent !== null) {
            if (parent instanceof DynamicFormArrayGroupModel) {
                id = parent.context.id + "-" + parent.index + "-" + model.id;
                break;
            }
            parent = parent.parent;
        }
        return id;
    };
    DynamicFormLayoutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormLayoutService_Factory() { return new DynamicFormLayoutService(); }, token: DynamicFormLayoutService, providedIn: "root" });
DynamicFormLayoutService.ɵfac = function DynamicFormLayoutService_Factory(t) { return new (t || DynamicFormLayoutService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormLayoutService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();
    return DynamicFormLayoutService;
}());
export { DynamicFormLayoutService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWxheW91dC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovQG5nLWR5bmFtaWMtZm9ybXMvY29yZS9saWIvc2VydmljZS9keW5hbWljLWZvcm0tbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXRELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFGLE9BQU8sRUFFSCxvQ0FBb0MsRUFDdkMsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFTekQ7SUFBQTtLQTRIQztJQTFIRywyQ0FBUSxHQUFSLFVBQVMsRUFBVSxFQUFFLFVBQW9DOztRQUVyRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBRXRCLEtBQWtCLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQXRDLElBQU0sR0FBRyxXQUFBO29CQUVWLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTt3QkFDWixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDMUI7aUJBQ0o7Ozs7Ozs7OztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDhDQUFXLEdBQVgsVUFBWSxLQUE4QixFQUFFLFVBQW9DOztRQUU1RSxJQUFJLGFBQWEsR0FBNkIsSUFBSSxDQUFDO1FBRW5ELElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29DQUVYLEdBQUc7Z0JBRVYsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO29CQUU1QixJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JB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QyxHQUFHLENBQUMsQ0FBQyxJQUFNLENBQUEsQ0FBQztpQkFDdEM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsK0NBQVksR0FBWixVQUFhLEtBQThCO1FBRXZDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUUxQixPQUFPLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFFcEIsSUFBSSxNQUFNLFlBQVksMEJBQTBCLEVBQUU7Z0JBRTlDLEVBQUUsR0FBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBSSxNQUFNLENBQUMsS0FBSyxTQUFJLEtBQUssQ0FBQyxFQUFJLENBQUM7Z0JBQ3hELE1BQU07YUFDVDtZQUVELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO3FOQUUrTTtJQTdIdk0sd0JBQXdCLHdCQUhwQyxVQUFVLENBQUMsY0FDUixVQUFVLEVBQUUsTUFBTSxVQUNyQixDQUFDLFFBQ1c7VUFBd0IsQ0E0SHBDOzs7OztnREFDRDttQ0FuSkE7Q0FrSkMsQUE1SEQsSUE0SEM7U0E1SFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUXVlcnlMaXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0LFxuICAgIER5bmFtaWNGb3JtQ29udHJvbExheW91dENvbmZpZyxcbiAgICBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRDb250ZXh0LFxuICAgIER5bmFtaWNGb3JtQ29udHJvbExheW91dFBsYWNlXG59IGZyb20gXCIuLi9tb2RlbC9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2Zvcm0tYXJyYXkvZHluYW1pYy1mb3JtLWFycmF5Lm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEWU5BTUlDX1RFTVBMQVRFX0RJUkVDVElWRV9BTElHTk1FTlRcbn0gZnJvbSBcIi4uL2RpcmVjdGl2ZS9keW5hbWljLXRlbXBsYXRlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IHR5cGUgRHluYW1pY0Zvcm1MYXlvdXQgPSB7IFtpZDogc3RyaW5nXTogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH07XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNGb3JtQ29udHJvbFRlbXBsYXRlcyA9IFF1ZXJ5TGlzdDxEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmU+IHwgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlW10gfCB1bmRlZmluZWQ7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUxheW91dFNlcnZpY2Uge1xuXG4gICAgZmluZEJ5SWQoaWQ6IHN0cmluZywgZm9ybUxheW91dDogRHluYW1pY0Zvcm1MYXlvdXQgfCBudWxsKTogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IHwgbnVsbCB7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGZvcm1MYXlvdXQpKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGZvcm1MYXlvdXQpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybUxheW91dFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRCeU1vZGVsKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgZm9ybUxheW91dDogRHluYW1pY0Zvcm1MYXlvdXQgfCBudWxsKTogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IHwgbnVsbCB7XG5cbiAgICAgICAgbGV0IGNvbnRyb2xMYXlvdXQ6IER5bmFtaWNGb3JtQ29udHJvbExheW91dCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGZvcm1MYXlvdXQpKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGZvcm1MYXlvdXQpKSB7XG5cbiAgICAgICAgICAgICAgICBrZXkuc3BsaXQoXCIsXCIpLmZvckVhY2goc3Vic3RyaW5nID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHN1YnN0cmluZy50cmltKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yID09PSBtb2RlbC5pZCB8fCBzZWxlY3RvciA9PT0gbW9kZWwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbExheW91dCA9IGZvcm1MYXlvdXRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRyb2xMYXlvdXQ7XG4gICAgfVxuXG4gICAgZmlsdGVyVGVtcGxhdGVzQnlNb2RlbChtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIHRlbXBsYXRlczogRHluYW1pY0Zvcm1Db250cm9sVGVtcGxhdGVzKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlW10ge1xuXG4gICAgICAgIGNvbnN0IGZpbHRlckNhbGxiYWNrOiAodGVtcGxhdGU6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSkgPT4gYm9vbGVhbiA9ICh0ZW1wbGF0ZTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUubW9kZWxJZCA9PT0gbW9kZWwuaWQgfHwgdGVtcGxhdGUubW9kZWxUeXBlID09PSBtb2RlbC50eXBlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0ZW1wbGF0ZXMgaW5zdGFuY2VvZiBRdWVyeUxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXMuZmlsdGVyKGZpbHRlckNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGVtcGxhdGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlcy5maWx0ZXIoZmlsdGVyQ2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGdldEFsaWduZWRUZW1wbGF0ZShtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIHRlbXBsYXRlczogRHluYW1pY0Zvcm1Db250cm9sVGVtcGxhdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IERZTkFNSUNfVEVNUExBVEVfRElSRUNUSVZFX0FMSUdOTUVOVCk6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVGVtcGxhdGVzQnlNb2RlbChtb2RlbCwgdGVtcGxhdGVzKVxuICAgICAgICAgICAgLmZpbmQodGVtcGxhdGUgPT4gdGVtcGxhdGUuYXMgPT09IG51bGwgJiYgdGVtcGxhdGUuYWxpZ24gPT09IGFsaWdubWVudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICBnZXRJbmRleGVkVGVtcGxhdGVzKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgdGVtcGxhdGVzOiBEeW5hbWljRm9ybUNvbnRyb2xUZW1wbGF0ZXMpOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclRlbXBsYXRlc0J5TW9kZWwobW9kZWwsIHRlbXBsYXRlcykuZmlsdGVyKHRlbXBsYXRlID0+IHRlbXBsYXRlLmFzID09PSBudWxsKTtcbiAgICB9XG4gICAgKi9cbiAgICBnZXRTdGFydFRlbXBsYXRlKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgdGVtcGxhdGVzOiBEeW5hbWljRm9ybUNvbnRyb2xUZW1wbGF0ZXMpOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGlnbmVkVGVtcGxhdGUobW9kZWwsIHRlbXBsYXRlcywgRFlOQU1JQ19URU1QTEFURV9ESVJFQ1RJVkVfQUxJR05NRU5ULlN0YXJ0KTtcbiAgICB9XG5cbiAgICBnZXRFbmRUZW1wbGF0ZShtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIHRlbXBsYXRlczogRHluYW1pY0Zvcm1Db250cm9sVGVtcGxhdGVzKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxpZ25lZFRlbXBsYXRlKG1vZGVsLCB0ZW1wbGF0ZXMsIERZTkFNSUNfVEVNUExBVEVfRElSRUNUSVZFX0FMSUdOTUVOVC5FbmQpO1xuICAgIH1cblxuICAgIGdldENsYXNzKGxheW91dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0Q29udGV4dCxcbiAgICAgICAgICAgICBwbGFjZTogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0UGxhY2UpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChpc09iamVjdChsYXlvdXQpICYmIGxheW91dC5oYXNPd25Qcm9wZXJ0eShjb250ZXh0KSkge1xuXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSBsYXlvdXRbY29udGV4dF0gYXMgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0Q29uZmlnO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHBsYWNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWdbcGxhY2VdIGFzIHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGdldEhvc3RDbGFzcyhsYXlvdXQ6IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB8IG51bGwgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXG4gICAgICAgIGNvbnN0IGtleXM6IChrZXlvZiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpW10gPSBbXCJlbGVtZW50XCIsIFwiZ3JpZFwiXTtcbiAgICAgICAgbGV0IGNscyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGxheW91dCkpIHtcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChsYXlvdXRba2V5XSkgJiYgaXNTdHJpbmcobGF5b3V0W2tleV0uaG9zdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzID0gY2xzICsgYCAke2xheW91dFtrZXldLmhvc3R9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbHM7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudElkKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IGlkID0gbW9kZWwuaWQ7XG4gICAgICAgIGxldCBwYXJlbnQgPSBtb2RlbC5wYXJlbnQ7XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgICAgIGlkID0gYCR7cGFyZW50LmNvbnRleHQuaWR9LSR7cGFyZW50LmluZGV4fS0ke21vZGVsLmlkfWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxufVxuIl19