import { __extends } from "tslib";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { QueryList } from "@angular/core";
var DynamicFormGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicFormGroupComponent, _super);
    function DynamicFormGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicFormGroupComponent.prototype.markForCheck = function () {
        if (this.components instanceof QueryList) {
            this.components.forEach(function (component) { return component.markForCheck(); });
        }
    };
    return DynamicFormGroupComponent;
}(DynamicFormControlComponent));
export { DynamicFormGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2R5bmFtaWMtZm9ybS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUM7SUFBd0QsNkNBQTJCO0lBQW5GOztJQVVBLENBQUM7SUFMRyxnREFBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLFNBQVMsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FBQyxBQVZELENBQXdELDJCQUEyQixHQVVsRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS1jb250cm9sLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Hcm91cE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2Zvcm0tZ3JvdXAvZHluYW1pYy1mb3JtLWdyb3VwLm1vZGVsXCI7XG5pbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1Hcm91cENvbXBvbmVudCBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnRzOiBRdWVyeUxpc3Q8RHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgICBtb2RlbDogRHluYW1pY0Zvcm1Hcm91cE1vZGVsO1xuXG4gICAgbWFya0ZvckNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzIGluc3RhbmNlb2YgUXVlcnlMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==