import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
import { isFunction, isNumber } from "../utils/core.utils";
import * as i0 from "@angular/core";
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
DynamicFormComponentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
];
DynamicFormComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormComponentService_Factory() { return new DynamicFormComponentService(i0.ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormComponentService, providedIn: "root" });
DynamicFormComponentService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __param(0, Inject(DYNAMIC_FORM_CONTROL_MAP_FN)), __param(0, Optional()),
    __metadata("design:paramtypes", [Object])
], DynamicFormComponentService);
export { DynamicFormComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakcsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLM0QsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxjQUFjLENBQTBCLDZCQUE2QixDQUFDLENBQUM7QUFLdEgsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFLcEMsWUFBOEUsMkJBQWdDO1FBQWhDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBSztRQUh0RyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUF1RSxFQUFFLENBQUM7UUFHMUYsSUFBSSxDQUFDLDJCQUEyQixHQUFHLDJCQUFzRCxDQUFDO0lBQzlGLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBK0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWMsQ0FBQyxTQUErQjtRQUUxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBZSxFQUFFLEtBQWM7UUFFN0MsTUFBTSxHQUFHLEdBQW9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEYsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUV0RDthQUFNO1lBQ0gsT0FBTyxHQUE0QixDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQThCLEVBQUUsR0FBMEIsRUFBRSxLQUFjO1FBRTFGLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsOEJBQThCO1lBRWpELE1BQU0sUUFBUSxHQUE0QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQTRCLElBQUksRUFBRSxDQUFDO1lBRXZHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFFekIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7YUFFMUM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyw2RUFBNkUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDekc7U0FFSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQixDQUFDLE9BQWUsRUFBRSxLQUFjO1FBRWpELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xFLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1NBRUo7YUFBTSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQThCO1FBQ2pELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RyxDQUFDO0NBQ0osQ0FBQTs7NENBeEVnQixNQUFNLFNBQUMsMkJBQTJCLGNBQUcsUUFBUTs7O0FBTGpELDJCQUEyQjtJQUh2QyxVQUFVLENBQUM7UUFDUixVQUFVLEVBQUUsTUFBTTtLQUNyQixDQUFDO0lBTWUsV0FBQSxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7O0dBTG5ELDJCQUEyQixDQTZFdkM7U0E3RVksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi4vY29tcG9uZW50L2R5bmFtaWMtZm9ybS1jb250cm9sLWludGVyZmFjZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50L2R5bmFtaWMtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc051bWJlciB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNGb3JtQ29udHJvbFJlZiA9IENvbXBvbmVudFJlZjxEeW5hbWljRm9ybUNvbnRyb2w+O1xuZXhwb3J0IHR5cGUgRHluYW1pY0Zvcm1Db250cm9sTWFwRm4gPSAobW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsKSA9PiBUeXBlPER5bmFtaWNGb3JtQ29udHJvbD4gfCBudWxsO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOID0gbmV3IEluamVjdGlvblRva2VuPER5bmFtaWNGb3JtQ29udHJvbE1hcEZuPihcIkRZTkFNSUNfRk9STV9DT05UUk9MX01BUF9GTlwiKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSB7XG5cbiAgICBwcml2YXRlIGZvcm1zOiBEeW5hbWljRm9ybUNvbXBvbmVudFtdID0gW107XG4gICAgcHJpdmF0ZSBmb3JtQ29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogRHluYW1pY0Zvcm1Db250cm9sUmVmIHwgRHluYW1pY0Zvcm1Db250cm9sUmVmW10gfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChEWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4pIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgRFlOQU1JQ19GT1JNX0NPTlRST0xfTUFQX0ZOOiBhbnkpIHtcbiAgICAgICAgdGhpcy5EWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4gPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4gYXMgRHluYW1pY0Zvcm1Db250cm9sTWFwRm47XG4gICAgfVxuXG4gICAgZ2V0Rm9ybXMoKTogSXRlcmFibGVJdGVyYXRvcjxEeW5hbWljRm9ybUNvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3Jtcy52YWx1ZXMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZvcm0oY29tcG9uZW50OiBEeW5hbWljRm9ybUNvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1zLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyRm9ybShjb21wb25lbnQ6IER5bmFtaWNGb3JtQ29tcG9uZW50KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZiA9IHRoaXMuZm9ybXMuaW5kZXhPZihjb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChpbmRleE9mICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5mb3Jtcy5zcGxpY2UoaW5kZXhPZiwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3JtQ29udHJvbFJlZihtb2RlbElkOiBzdHJpbmcsIGluZGV4PzogbnVtYmVyKTogRHluYW1pY0Zvcm1Db250cm9sUmVmIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCByZWY6IER5bmFtaWNGb3JtQ29udHJvbFJlZiB8IER5bmFtaWNGb3JtQ29udHJvbFJlZltdID0gdGhpcy5mb3JtQ29udHJvbHNbbW9kZWxJZF07XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGluZGV4KSkge1xuXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZWYpID8gcmVmW2luZGV4XSA6IHVuZGVmaW5lZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlZiBhcyBEeW5hbWljRm9ybUNvbnRyb2xSZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckZvcm1Db250cm9sKG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgcmVmOiBEeW5hbWljRm9ybUNvbnRyb2xSZWYsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGluZGV4KSkgeyAvLyB0aHJlYXQgbW9kZWwgYXMgYXJyYXkgY2hpbGRcblxuICAgICAgICAgICAgY29uc3QgYXJyYXlSZWY6IER5bmFtaWNGb3JtQ29udHJvbFJlZltdID0gdGhpcy5mb3JtQ29udHJvbHNbbW9kZWwuaWRdIGFzIER5bmFtaWNGb3JtQ29udHJvbFJlZltdIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheVJlZikpIHtcblxuICAgICAgICAgICAgICAgIGFycmF5UmVmLnNwbGljZShpbmRleCwgMCwgcmVmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sc1ttb2RlbC5pZF0gPSBhcnJheVJlZjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYHJlZ2lzdGVyRm9ybUNvbnRyb2xSZWYgaXMgY2FsbGVkIHdpdGggaW5kZXggZm9yIGEgbm9uLWFycmF5IGZvcm0gY29udHJvbDogJHttb2RlbC5pZH1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbHNbbW9kZWwuaWRdID0gcmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckZvcm1Db250cm9sKG1vZGVsSWQ6IHN0cmluZywgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmZvcm1Db250cm9sc1ttb2RlbElkXTtcblxuICAgICAgICBpZiAoaXNOdW1iZXIoaW5kZXgpKSB7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudFJlZikgJiYgY29tcG9uZW50UmVmW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50UmVmLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRSZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZm9ybUNvbnRyb2xzW21vZGVsSWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VzdG9tQ29tcG9uZW50VHlwZShtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpOiBUeXBlPER5bmFtaWNGb3JtQ29udHJvbD4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhpcy5EWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4pID8gdGhpcy5EWU5BTUlDX0ZPUk1fQ09OVFJPTF9NQVBfRk4obW9kZWwpIDogbnVsbDtcbiAgICB9XG59XG4iXX0=