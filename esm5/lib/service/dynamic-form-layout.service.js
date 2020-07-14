import { __decorate, __values } from "tslib";
import { Injectable, QueryList } from "@angular/core";
import { DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT } from "../directive/dynamic-template.directive";
import { isObject, isString } from "../utils/core.utils";
import * as i0 from "@angular/core";
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
    DynamicFormLayoutService = __decorate([
        Injectable({
            providedIn: "root"
        })
    ], DynamicFormLayoutService);
    return DynamicFormLayoutService;
}());
export { DynamicFormLayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWxheW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUVILG9DQUFvQyxFQUN2QyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBU3pEO0lBQUE7S0E0SEM7SUExSEcsMkNBQVEsR0FBUixVQUFTLEVBQVUsRUFBRSxVQUFvQzs7UUFFckQsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7O2dCQUV0QixLQUFrQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUF0QyxJQUFNLEdBQUcsV0FBQTtvQkFFVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7d0JBQ1osT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzFCO2lCQUNKOzs7Ozs7Ozs7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksS0FBOEIsRUFBRSxVQUFvQzs7UUFFNUUsSUFBSSxhQUFhLEdBQTZCLElBQUksQ0FBQztRQUVuRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQ0FFWCxHQUFHO2dCQUVWLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztvQkFFNUIsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLElB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QUcsTUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBTSxDQUFBLENBQUM7aUJBQ3RDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtDQUFZLEdBQVosVUFBYSxLQUE4QjtRQUV2QyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFMUIsT0FBTyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBRXBCLElBQUksTUFBTSxZQUFZLDBCQUEwQixFQUFFO2dCQUU5QyxFQUFFLEdBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQUksTUFBTSxDQUFDLEtBQUssU0FBSSxLQUFLLENBQUMsRUFBSSxDQUFDO2dCQUN4RCxNQUFNO2FBQ1Q7WUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUMxQjtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7SUEzSFEsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyx3QkFBd0IsQ0E0SHBDO21DQWxKRDtDQWtKQyxBQTVIRCxJQTRIQztTQTVIWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0Q29uZmlnLFxuICAgIER5bmFtaWNGb3JtQ29udHJvbExheW91dENvbnRleHQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0UGxhY2Vcbn0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZm9ybS1hcnJheS9keW5hbWljLWZvcm0tYXJyYXkubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIERZTkFNSUNfVEVNUExBVEVfRElSRUNUSVZFX0FMSUdOTUVOVFxufSBmcm9tIFwiLi4vZGlyZWN0aXZlL2R5bmFtaWMtdGVtcGxhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgdHlwZSBEeW5hbWljRm9ybUxheW91dCA9IHsgW2lkOiBzdHJpbmddOiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfTtcblxuZXhwb3J0IHR5cGUgRHluYW1pY0Zvcm1Db250cm9sVGVtcGxhdGVzID0gUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmVbXSB8IHVuZGVmaW5lZDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSB7XG5cbiAgICBmaW5kQnlJZChpZDogc3RyaW5nLCBmb3JtTGF5b3V0OiBEeW5hbWljRm9ybUxheW91dCB8IG51bGwpOiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfCBudWxsIHtcblxuICAgICAgICBpZiAoaXNPYmplY3QoZm9ybUxheW91dCkpIHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZm9ybUxheW91dCkpIHtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTGF5b3V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZmluZEJ5TW9kZWwobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCBmb3JtTGF5b3V0OiBEeW5hbWljRm9ybUxheW91dCB8IG51bGwpOiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfCBudWxsIHtcblxuICAgICAgICBsZXQgY29udHJvbExheW91dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0ID0gbnVsbDtcblxuICAgICAgICBpZiAoaXNPYmplY3QoZm9ybUxheW91dCkpIHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZm9ybUxheW91dCkpIHtcblxuICAgICAgICAgICAgICAgIGtleS5zcGxpdChcIixcIikuZm9yRWFjaChzdWJzdHJpbmcgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc3Vic3RyaW5nLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09IG1vZGVsLmlkIHx8IHNlbGVjdG9yID09PSBtb2RlbC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sTGF5b3V0ID0gZm9ybUxheW91dFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udHJvbExheW91dDtcbiAgICB9XG5cbiAgICBmaWx0ZXJUZW1wbGF0ZXNCeU1vZGVsKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgdGVtcGxhdGVzOiBEeW5hbWljRm9ybUNvbnRyb2xUZW1wbGF0ZXMpOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmVbXSB7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyQ2FsbGJhY2s6ICh0ZW1wbGF0ZTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlKSA9PiBib29sZWFuID0gKHRlbXBsYXRlOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5tb2RlbElkID09PSBtb2RlbC5pZCB8fCB0ZW1wbGF0ZS5tb2RlbFR5cGUgPT09IG1vZGVsLnR5cGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlcyBpbnN0YW5jZW9mIFF1ZXJ5TGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlcy5maWx0ZXIoZmlsdGVyQ2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzLmZpbHRlcihmaWx0ZXJDYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZ2V0QWxpZ25lZFRlbXBsYXRlKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgdGVtcGxhdGVzOiBEeW5hbWljRm9ybUNvbnRyb2xUZW1wbGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogRFlOQU1JQ19URU1QTEFURV9ESVJFQ1RJVkVfQUxJR05NRU5UKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJUZW1wbGF0ZXNCeU1vZGVsKG1vZGVsLCB0ZW1wbGF0ZXMpXG4gICAgICAgICAgICAuZmluZCh0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZS5hcyA9PT0gbnVsbCAmJiB0ZW1wbGF0ZS5hbGlnbiA9PT0gYWxpZ25tZW50KTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGdldEluZGV4ZWRUZW1wbGF0ZXMobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCB0ZW1wbGF0ZXM6IER5bmFtaWNGb3JtQ29udHJvbFRlbXBsYXRlcyk6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVGVtcGxhdGVzQnlNb2RlbChtb2RlbCwgdGVtcGxhdGVzKS5maWx0ZXIodGVtcGxhdGUgPT4gdGVtcGxhdGUuYXMgPT09IG51bGwpO1xuICAgIH1cbiAgICAqL1xuICAgIGdldFN0YXJ0VGVtcGxhdGUobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCB0ZW1wbGF0ZXM6IER5bmFtaWNGb3JtQ29udHJvbFRlbXBsYXRlcyk6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsaWduZWRUZW1wbGF0ZShtb2RlbCwgdGVtcGxhdGVzLCBEWU5BTUlDX1RFTVBMQVRFX0RJUkVDVElWRV9BTElHTk1FTlQuU3RhcnQpO1xuICAgIH1cblxuICAgIGdldEVuZFRlbXBsYXRlKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgdGVtcGxhdGVzOiBEeW5hbWljRm9ybUNvbnRyb2xUZW1wbGF0ZXMpOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGlnbmVkVGVtcGxhdGUobW9kZWwsIHRlbXBsYXRlcywgRFlOQU1JQ19URU1QTEFURV9ESVJFQ1RJVkVfQUxJR05NRU5ULkVuZCk7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3MobGF5b3V0OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRDb250ZXh0LFxuICAgICAgICAgICAgIHBsYWNlOiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRQbGFjZSk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGxheW91dCkgJiYgbGF5b3V0Lmhhc093blByb3BlcnR5KGNvbnRleHQpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGxheW91dFtjb250ZXh0XSBhcyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRDb25maWc7XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocGxhY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ1twbGFjZV0gYXMgc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgZ2V0SG9zdENsYXNzKGxheW91dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qga2V5czogKGtleW9mIER5bmFtaWNGb3JtQ29udHJvbExheW91dClbXSA9IFtcImVsZW1lbnRcIiwgXCJncmlkXCJdO1xuICAgICAgICBsZXQgY2xzID0gXCJcIjtcblxuICAgICAgICBpZiAoaXNPYmplY3QobGF5b3V0KSkge1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KGxheW91dFtrZXldKSAmJiBpc1N0cmluZyhsYXlvdXRba2V5XS5ob3N0KSkge1xuICAgICAgICAgICAgICAgICAgICBjbHMgPSBjbHMgKyBgICR7bGF5b3V0W2tleV0uaG9zdH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNscztcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50SWQobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgaWQgPSBtb2RlbC5pZDtcbiAgICAgICAgbGV0IHBhcmVudCA9IG1vZGVsLnBhcmVudDtcblxuICAgICAgICB3aGlsZSAocGFyZW50ICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCkge1xuXG4gICAgICAgICAgICAgICAgaWQgPSBgJHtwYXJlbnQuY29udGV4dC5pZH0tJHtwYXJlbnQuaW5kZXh9LSR7bW9kZWwuaWR9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG59XG4iXX0=