import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
import { isFunction, isNumber } from "../utils/core.utils";
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export var DYNAMIC_FORM_CONTROL_MAP_FN = new InjectionToken("DYNAMIC_FORM_CONTROL_MAP_FN");
var DynamicFormComponentService = /** @class */ (function () {
    function DynamicFormComponentService(DYNAMIC_FORM_CONTROL_MAP_FN) {
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
        this.forms = [];
        this.formControls = {};
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
    }
    DynamicFormComponentService.prototype.getForms = function () {
        return this.forms.values();
    };
    DynamicFormComponentService.prototype.registerForm = function (component) {
        this.forms.push(component);
    };
    DynamicFormComponentService.prototype.unregisterForm = function (component) {
        var indexOf = this.forms.indexOf(component);
        if (indexOf !== -1) {
            this.forms.splice(indexOf, 1);
        }
    };
    DynamicFormComponentService.prototype.getFormControlRef = function (modelId, index) {
        var ref = this.formControls[modelId];
        if (isNumber(index)) {
            return Array.isArray(ref) ? ref[index] : undefined;
        }
        else {
            return ref;
        }
    };
    DynamicFormComponentService.prototype.registerFormControl = function (model, ref, index) {
        if (isNumber(index)) { // threat model as array child
            var arrayRef = this.formControls[model.id] || [];
            if (Array.isArray(arrayRef)) {
                arrayRef.splice(index, 0, ref);
                this.formControls[model.id] = arrayRef;
            }
            else {
                console.warn("registerFormControlRef is called with index for a non-array form control: " + model.id);
            }
        }
        else {
            this.formControls[model.id] = ref;
        }
    };
    DynamicFormComponentService.prototype.unregisterFormControl = function (modelId, index) {
        var componentRef = this.formControls[modelId];
        if (isNumber(index)) {
            if (Array.isArray(componentRef) && componentRef[index] !== undefined) {
                componentRef.splice(index, 1);
            }
        }
        else if (componentRef !== undefined) {
            delete this.formControls[modelId];
        }
    };
    DynamicFormComponentService.prototype.getCustomComponentType = function (model) {
        return isFunction(this.DYNAMIC_FORM_CONTROL_MAP_FN) ? this.DYNAMIC_FORM_CONTROL_MAP_FN(model) : null;
    };
    DynamicFormComponentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
    ]; };
    DynamicFormComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormComponentService_Factory() { return new DynamicFormComponentService(i0.ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormComponentService, providedIn: "root" });
    DynamicFormComponentService = __decorate([ __param(0, Inject(DYNAMIC_FORM_CONTROL_MAP_FN)), __param(0, Optional()),
        __metadata("design:paramtypes", [Object])
    ], DynamicFormComponentService);
DynamicFormComponentService.ɵfac = function DynamicFormComponentService_Factory(t) { return new (t || DynamicFormComponentService)(ɵngcc0.ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormComponentService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DYNAMIC_FORM_CONTROL_MAP_FN]
            }, {
                type: Optional
            }] }]; }, null); })();
    return DynamicFormComponentService;
}());
export { DynamicFormComponentService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovQG5nLWR5bmFtaWMtZm9ybXMvY29yZS9saWIvc2VydmljZS9keW5hbWljLWZvcm0tY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUszRCxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxJQUFJLGNBQWMsQ0FBMEIsNkJBQTZCLENBQUMsQ0FBQztBQUt0SDtJQUtJLHFDQUE4RSwyQkFBZ0M7UUFBaEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFLO1FBSHRHLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ25DLGlCQUFZLEdBQXVFLEVBQUUsQ0FBQztRQUcxRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQXNELENBQUM7SUFDOUYsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGtEQUFZLEdBQVosVUFBYSxTQUErQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsb0RBQWMsR0FBZCxVQUFlLFNBQStCO1FBRTFDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlDLElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCx1REFBaUIsR0FBakIsVUFBa0IsT0FBZSxFQUFFLEtBQWM7UUFFN0MsSUFBTSxHQUFHLEdBQW9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEYsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUV0RDthQUFNO1lBQ0gsT0FBTyxHQUE0QixDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELHlEQUFtQixHQUFuQixVQUFvQixLQUE4QixFQUFFLEdBQTBCLEVBQUUsS0FBYztRQUUxRixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLDhCQUE4QjtZQUVqRCxJQUFNLFFBQVEsR0FBNEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUE0QixJQUFJLEVBQUUsQ0FBQztZQUV2RyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBRXpCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBRTFDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsK0VBQTZFLEtBQUssQ0FBQyxFQUFJLENBQUMsQ0FBQzthQUN6RztTQUVKO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRUQsMkRBQXFCLEdBQXJCLFVBQXNCLE9BQWUsRUFBRSxLQUFjO1FBRWpELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xFLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1NBRUo7YUFBTSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELDREQUFzQixHQUF0QixVQUF1QixLQUE4QjtRQUNqRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekcsQ0FBQzs7Z0RBdkVZLE1BQU0sU0FBQywyQkFBMkIsY0FBRyxRQUFROzs7SUFMakQsMkJBQTJCLGVBRTdCLFNBTFYsVUFBVSxDQUFDLGNBQ1IsVUFBVSxFQUFFLE1BQU0sVUFDckIsQ0FBQywvREFDTSxDQUtTLFdBQUEsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBOztPQUxuRCwyQkFBMkIsQ0E2RXZDOzs7Ozs7Ozs7Ozs7a0NBQ0Q7c0NBNUZBO0NBMkZDLEFBN0VELElBNkVDO1NBN0VZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sIH0gZnJvbSBcIi4uL2NvbXBvbmVudC9keW5hbWljLWZvcm0tY29udHJvbC1pbnRlcmZhY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudC9keW5hbWljLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNOdW1iZXIgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgdHlwZSBEeW5hbWljRm9ybUNvbnRyb2xSZWYgPSBDb21wb25lbnRSZWY8RHluYW1pY0Zvcm1Db250cm9sPjtcbmV4cG9ydCB0eXBlIER5bmFtaWNGb3JtQ29udHJvbE1hcEZuID0gKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCkgPT4gVHlwZTxEeW5hbWljRm9ybUNvbnRyb2w+IHwgbnVsbDtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX01BUF9GTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEeW5hbWljRm9ybUNvbnRyb2xNYXBGbj4oXCJEWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk5cIik7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBmb3JtczogRHluYW1pY0Zvcm1Db21wb25lbnRbXSA9IFtdO1xuICAgIHByaXZhdGUgZm9ybUNvbnRyb2xzOiB7IFtrZXk6IHN0cmluZ106IER5bmFtaWNGb3JtQ29udHJvbFJlZiB8IER5bmFtaWNGb3JtQ29udHJvbFJlZltdIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOKSBAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IERZTkFNSUNfRk9STV9DT05UUk9MX01BUF9GTjogYW55KSB7XG4gICAgICAgIHRoaXMuRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOIGFzIER5bmFtaWNGb3JtQ29udHJvbE1hcEZuO1xuICAgIH1cblxuICAgIGdldEZvcm1zKCk6IEl0ZXJhYmxlSXRlcmF0b3I8RHluYW1pY0Zvcm1Db21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybXMudmFsdWVzKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGb3JtKGNvbXBvbmVudDogRHluYW1pY0Zvcm1Db21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3Jtcy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckZvcm0oY29tcG9uZW50OiBEeW5hbWljRm9ybUNvbXBvbmVudCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmZvcm1zLmluZGV4T2YoY29tcG9uZW50KTtcblxuICAgICAgICBpZiAoaW5kZXhPZiAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybXMuc3BsaWNlKGluZGV4T2YsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybUNvbnRyb2xSZWYobW9kZWxJZDogc3RyaW5nLCBpbmRleD86IG51bWJlcik6IER5bmFtaWNGb3JtQ29udHJvbFJlZiB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgY29uc3QgcmVmOiBEeW5hbWljRm9ybUNvbnRyb2xSZWYgfCBEeW5hbWljRm9ybUNvbnRyb2xSZWZbXSA9IHRoaXMuZm9ybUNvbnRyb2xzW21vZGVsSWRdO1xuXG4gICAgICAgIGlmIChpc051bWJlcihpbmRleCkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVmKSA/IHJlZltpbmRleF0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZWYgYXMgRHluYW1pY0Zvcm1Db250cm9sUmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGb3JtQ29udHJvbChtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIHJlZjogRHluYW1pY0Zvcm1Db250cm9sUmVmLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIGlmIChpc051bWJlcihpbmRleCkpIHsgLy8gdGhyZWF0IG1vZGVsIGFzIGFycmF5IGNoaWxkXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5UmVmOiBEeW5hbWljRm9ybUNvbnRyb2xSZWZbXSA9IHRoaXMuZm9ybUNvbnRyb2xzW21vZGVsLmlkXSBhcyBEeW5hbWljRm9ybUNvbnRyb2xSZWZbXSB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXlSZWYpKSB7XG5cbiAgICAgICAgICAgICAgICBhcnJheVJlZi5zcGxpY2UoaW5kZXgsIDAsIHJlZik7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbHNbbW9kZWwuaWRdID0gYXJyYXlSZWY7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGByZWdpc3RlckZvcm1Db250cm9sUmVmIGlzIGNhbGxlZCB3aXRoIGluZGV4IGZvciBhIG5vbi1hcnJheSBmb3JtIGNvbnRyb2w6ICR7bW9kZWwuaWR9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2xzW21vZGVsLmlkXSA9IHJlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVucmVnaXN0ZXJGb3JtQ29udHJvbChtb2RlbElkOiBzdHJpbmcsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5mb3JtQ29udHJvbHNbbW9kZWxJZF07XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGluZGV4KSkge1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRSZWYpICYmIGNvbXBvbmVudFJlZltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50UmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZvcm1Db250cm9sc1ttb2RlbElkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1c3RvbUNvbXBvbmVudFR5cGUobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsKTogVHlwZTxEeW5hbWljRm9ybUNvbnRyb2w+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMuRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOKSA/IHRoaXMuRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOKG1vZGVsKSA6IG51bGw7XG4gICAgfVxufVxuIl19