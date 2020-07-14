import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
import { isFunction, isNumber } from "../utils/core.utils";
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export const DYNAMIC_FORM_CONTROL_MAP_FN = new InjectionToken("DYNAMIC_FORM_CONTROL_MAP_FN");
let DynamicFormComponentService = class DynamicFormComponentService {
    constructor(DYNAMIC_FORM_CONTROL_MAP_FN) {
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
        this.forms = [];
        this.formControls = {};
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
    }
    getForms() {
        return this.forms.values();
    }
    registerForm(component) {
        this.forms.push(component);
    }
    unregisterForm(component) {
        const indexOf = this.forms.indexOf(component);
        if (indexOf !== -1) {
            this.forms.splice(indexOf, 1);
        }
    }
    getFormControlRef(modelId, index) {
        const ref = this.formControls[modelId];
        if (isNumber(index)) {
            return Array.isArray(ref) ? ref[index] : undefined;
        }
        else {
            return ref;
        }
    }
    registerFormControl(model, ref, index) {
        if (isNumber(index)) { // threat model as array child
            const arrayRef = this.formControls[model.id] || [];
            if (Array.isArray(arrayRef)) {
                arrayRef.splice(index, 0, ref);
                this.formControls[model.id] = arrayRef;
            }
            else {
                console.warn(`registerFormControlRef is called with index for a non-array form control: ${model.id}`);
            }
        }
        else {
            this.formControls[model.id] = ref;
        }
    }
    unregisterFormControl(modelId, index) {
        const componentRef = this.formControls[modelId];
        if (isNumber(index)) {
            if (Array.isArray(componentRef) && componentRef[index] !== undefined) {
                componentRef.splice(index, 1);
            }
        }
        else if (componentRef !== undefined) {
            delete this.formControls[modelId];
        }
    }
    getCustomComponentType(model) {
        return isFunction(this.DYNAMIC_FORM_CONTROL_MAP_FN) ? this.DYNAMIC_FORM_CONTROL_MAP_FN(model) : null;
    }
};
DynamicFormComponentService.ɵfac = function DynamicFormComponentService_Factory(t) { return new (t || DynamicFormComponentService)(ɵngcc0.ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); };
DynamicFormComponentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
];
DynamicFormComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormComponentService_Factory() { return new DynamicFormComponentService(i0.ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormComponentService, providedIn: "root" });
DynamicFormComponentService = __decorate([ __param(0, Inject(DYNAMIC_FORM_CONTROL_MAP_FN)), __param(0, Optional()),
    __metadata("design:paramtypes", [Object])
], DynamicFormComponentService);
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
export { DynamicFormComponentService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovQG5nLWR5bmFtaWMtZm9ybXMvY29yZS9saWIvc2VydmljZS9keW5hbWljLWZvcm0tY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUszRCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLGNBQWMsQ0FBMEIsNkJBQTZCLENBQUMsQ0FBQztBQUt0SCxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUtwQyxZQUE4RSwyQkFBZ0M7UUFBaEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFLO1FBSHRHLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ25DLGlCQUFZLEdBQXVFLEVBQUUsQ0FBQztRQUcxRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQXNELENBQUM7SUFDOUYsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUErQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsY0FBYyxDQUFDLFNBQStCO1FBRTFDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlDLElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFlLEVBQUUsS0FBYztRQUU3QyxNQUFNLEdBQUcsR0FBb0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUVqQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBRXREO2FBQU07WUFDSCxPQUFPLEdBQTRCLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBOEIsRUFBRSxHQUEwQixFQUFFLEtBQWM7UUFFMUYsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7WUFFakQsTUFBTSxRQUFRLEdBQTRCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBNEIsSUFBSSxFQUFFLENBQUM7WUFFdkcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUV6QixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUUxQztpQkFBTTtnQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLDZFQUE2RSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN6RztTQUVKO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBZSxFQUFFLEtBQWM7UUFFakQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUVqQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDbEUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakM7U0FFSjthQUFNLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBOEI7UUFDakQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pHLENBQUM7Q0FDSjt1TEFBQTs7NENBeEVnQixNQUFNLFNBQUMsMkJBQTJCLGNBQUcsUUFBUTs7O0FBTGpELDJCQUEyQixlQUU3QixLQUxWLFVBQVUsQ0FBQyxVQUNSLFVBQVUsRUFBRSxNQUFNLE1BQ3JCLENBQUMsbkRBQ0UsQ0FLYSxXQUFBLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTs7R0FMbkQsMkJBQTJCLENBNkV2Qzs7Ozs7Ozs7Ozs7a0NBQ0Q7U0E5RWEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi4vY29tcG9uZW50L2R5bmFtaWMtZm9ybS1jb250cm9sLWludGVyZmFjZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50L2R5bmFtaWMtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc051bWJlciB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNGb3JtQ29udHJvbFJlZiA9IENvbXBvbmVudFJlZjxEeW5hbWljRm9ybUNvbnRyb2w+O1xuZXhwb3J0IHR5cGUgRHluYW1pY0Zvcm1Db250cm9sTWFwRm4gPSAobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsKSA9PiBUeXBlPER5bmFtaWNGb3JtQ29udHJvbD4gfCBudWxsO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOID0gbmV3IEluamVjdGlvblRva2VuPER5bmFtaWNGb3JtQ29udHJvbE1hcEZuPihcIkRZTkFNSUNfRk9STV9DT05UUk9MX01BUF9GTlwiKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSB7XG5cbiAgICBwcml2YXRlIGZvcm1zOiBEeW5hbWljRm9ybUNvbXBvbmVudFtdID0gW107XG4gICAgcHJpdmF0ZSBmb3JtQ29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogRHluYW1pY0Zvcm1Db250cm9sUmVmIHwgRHluYW1pY0Zvcm1Db250cm9sUmVmW10gfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChEWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4pIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOOiBhbnkpIHtcbiAgICAgICAgdGhpcy5EWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4gPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4gYXMgRHluYW1pY0Zvcm1Db250cm9sTWFwRm47XG4gICAgfVxuXG4gICAgZ2V0Rm9ybXMoKTogSXRlcmFibGVJdGVyYXRvcjxEeW5hbWljRm9ybUNvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3Jtcy52YWx1ZXMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZvcm0oY29tcG9uZW50OiBEeW5hbWljRm9ybUNvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1zLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyRm9ybShjb21wb25lbnQ6IER5bmFtaWNGb3JtQ29tcG9uZW50KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZiA9IHRoaXMuZm9ybXMuaW5kZXhPZihjb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChpbmRleE9mICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5mb3Jtcy5zcGxpY2UoaW5kZXhPZiwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3JtQ29udHJvbFJlZihtb2RlbElkOiBzdHJpbmcsIGluZGV4PzogbnVtYmVyKTogRHluYW1pY0Zvcm1Db250cm9sUmVmIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCByZWY6IER5bmFtaWNGb3JtQ29udHJvbFJlZiB8IER5bmFtaWNGb3JtQ29udHJvbFJlZltdID0gdGhpcy5mb3JtQ29udHJvbHNbbW9kZWxJZF07XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGluZGV4KSkge1xuXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZWYpID8gcmVmW2luZGV4XSA6IHVuZGVmaW5lZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlZiBhcyBEeW5hbWljRm9ybUNvbnRyb2xSZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckZvcm1Db250cm9sKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgcmVmOiBEeW5hbWljRm9ybUNvbnRyb2xSZWYsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGluZGV4KSkgeyAvLyB0aHJlYXQgbW9kZWwgYXMgYXJyYXkgY2hpbGRcblxuICAgICAgICAgICAgY29uc3QgYXJyYXlSZWY6IER5bmFtaWNGb3JtQ29udHJvbFJlZltdID0gdGhpcy5mb3JtQ29udHJvbHNbbW9kZWwuaWRdIGFzIER5bmFtaWNGb3JtQ29udHJvbFJlZltdIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheVJlZikpIHtcblxuICAgICAgICAgICAgICAgIGFycmF5UmVmLnNwbGljZShpbmRleCwgMCwgcmVmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sc1ttb2RlbC5pZF0gPSBhcnJheVJlZjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYHJlZ2lzdGVyRm9ybUNvbnRyb2xSZWYgaXMgY2FsbGVkIHdpdGggaW5kZXggZm9yIGEgbm9uLWFycmF5IGZvcm0gY29udHJvbDogJHttb2RlbC5pZH1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbHNbbW9kZWwuaWRdID0gcmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckZvcm1Db250cm9sKG1vZGVsSWQ6IHN0cmluZywgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmZvcm1Db250cm9sc1ttb2RlbElkXTtcblxuICAgICAgICBpZiAoaXNOdW1iZXIoaW5kZXgpKSB7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudFJlZikgJiYgY29tcG9uZW50UmVmW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50UmVmLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRSZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZm9ybUNvbnRyb2xzW21vZGVsSWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VzdG9tQ29tcG9uZW50VHlwZShtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpOiBUeXBlPER5bmFtaWNGb3JtQ29udHJvbD4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhpcy5EWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4pID8gdGhpcy5EWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4obW9kZWwpIDogbnVsbDtcbiAgICB9XG59XG4iXX0=