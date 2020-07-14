import { __extends } from "tslib";
import { QueryList } from "@angular/core";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
var DynamicFormArrayComponent = /** @class */ (function (_super) {
    __extends(DynamicFormArrayComponent, _super);
    function DynamicFormArrayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DynamicFormArrayComponent.prototype, "array", {
        get: function () {
            return this.control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormArrayComponent.prototype, "startTemplate", {
        get: function () {
            return this.layoutService.getStartTemplate(this.model, this.templates);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormArrayComponent.prototype, "endTemplate", {
        get: function () {
            return this.layoutService.getEndTemplate(this.model, this.templates);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormArrayComponent.prototype.markForCheck = function () {
        if (this.components instanceof QueryList) {
            this.components.forEach(function (component) { return component.markForCheck(); });
        }
    };
    return DynamicFormArrayComponent;
}(DynamicFormControlComponent));
export { DynamicFormArrayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWFycmF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2R5bmFtaWMtZm9ybS1hcnJheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLL0U7SUFBd0QsNkNBQTJCO0lBQW5GOztJQXVCQSxDQUFDO0lBakJHLHNCQUFJLDRDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFvQixDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0RBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxDQUFDOzs7T0FBQTtJQUVELGdEQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLFlBQVksU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBdkJELENBQXdELDJCQUEyQixHQXVCbEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tY29udHJvbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQXJyYXlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9mb3JtLWFycmF5L2R5bmFtaWMtZm9ybS1hcnJheS5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1BcnJheUNvbXBvbmVudCBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnRzOiBRdWVyeUxpc3Q8RHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgICBtb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsO1xuICAgIHRlbXBsYXRlczogUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBnZXQgYXJyYXkoKTogRm9ybUFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCBhcyBGb3JtQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXJ0VGVtcGxhdGUoKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0U2VydmljZS5nZXRTdGFydFRlbXBsYXRlKHRoaXMubW9kZWwsIHRoaXMudGVtcGxhdGVzKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kVGVtcGxhdGUoKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0U2VydmljZS5nZXRFbmRUZW1wbGF0ZSh0aGlzLm1vZGVsLCB0aGlzLnRlbXBsYXRlcyk7XG4gICAgfVxuXG4gICAgbWFya0ZvckNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzIGluc3RhbmNlb2YgUXVlcnlMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==