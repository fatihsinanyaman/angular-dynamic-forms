import { ComponentRef, InjectionToken, Type } from "@angular/core";
import { DynamicFormControl } from "../component/dynamic-form-control-interface";
import { DynamicFormComponent } from "../component/dynamic-form.component";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import * as ɵngcc0 from '@angular/core';
export declare type DynamicFormControlRef = ComponentRef<DynamicFormControl>;
export declare type DynamicFormControlMapFn = (model: DynamicFormControlModel) => Type<DynamicFormControl> | null;
export declare const DYNAMIC_FORM_CONTROL_MAP_FN: InjectionToken<DynamicFormControlMapFn>;
export declare class DynamicFormComponentService {
    private readonly DYNAMIC_FORM_CONTROL_MAP_FN;
    private forms;
    private formControls;
    constructor(DYNAMIC_FORM_CONTROL_MAP_FN: any);
    getForms(): IterableIterator<DynamicFormComponent>;
    registerForm(component: DynamicFormComponent): void;
    unregisterForm(component: DynamicFormComponent): void;
    getFormControlRef(modelId: string, index?: number): DynamicFormControlRef | undefined;
    registerFormControl(model: DynamicFormControlModel, ref: DynamicFormControlRef, index?: number): void;
    unregisterFormControl(modelId: string, index?: number): void;
    getCustomComponentType(model: DynamicFormControlModel): Type<DynamicFormControl> | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicFormComponentService, [{ optional: true; }]>;
}

//# sourceMappingURL=dynamic-form-component.service.d.ts.map