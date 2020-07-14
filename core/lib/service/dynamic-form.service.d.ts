import { AbstractControl, FormArray, FormGroup } from "@angular/forms";
import { AbstractControlOptions } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormArrayModel } from "../model/form-array/dynamic-form-array.model";
import { DynamicFormValidationService } from "./dynamic-form-validation.service";
import { DynamicFormModel, DynamicUnionFormModel } from "../model/dynamic-form.model";
import { DynamicPathable } from "../model/misc/dynamic-form-control-path.model";
import { DynamicFormComponent } from "../component/dynamic-form.component";
import { DynamicFormComponentService } from "./dynamic-form-component.service";
import * as ɵngcc0 from '@angular/core';
export declare class DynamicFormService {
    private componentService;
    private validationService;
    constructor(componentService: DynamicFormComponentService, validationService: DynamicFormValidationService);
    private createAbstractControlOptions;
    createFormArray(formArrayModel: DynamicFormArrayModel): FormArray;
    createFormGroup(formModel: DynamicFormModel, options?: AbstractControlOptions | null, parent?: DynamicPathable | null): FormGroup;
    getPathSegment(model: DynamicPathable): string;
    getPath(model: DynamicPathable, join?: boolean): string[] | string;
    addFormGroupControl(formGroup: FormGroup, formModel: DynamicUnionFormModel, ...models: DynamicFormModel): void;
    moveFormGroupControl(index: number, step: number, formModel: DynamicUnionFormModel): void;
    insertFormGroupControl(index: number, formGroup: FormGroup, formModel: DynamicUnionFormModel, ...models: DynamicFormModel): void;
    removeFormGroupControl(index: number, formGroup: FormGroup, formModel: DynamicUnionFormModel): void;
    addFormArrayGroup(formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    insertFormArrayGroup(index: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    moveFormArrayGroup(index: number, step: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    removeFormArrayGroup(index: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    clearFormArray(formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    findById(id: string, formModel: DynamicFormModel): DynamicFormControlModel | null;
    findModelById<T extends DynamicFormControlModel>(id: string, formModel: DynamicFormModel): T | null;
    findControlByModel<T extends AbstractControl>(model: DynamicFormControlModel, group: FormGroup): T | null;
    detectChanges(formComponent?: DynamicFormComponent): void;
    fromJSON(json: string | object[]): DynamicFormModel | never;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicFormService, never>;
}

//# sourceMappingURL=dynamic-form.service.d.ts.map