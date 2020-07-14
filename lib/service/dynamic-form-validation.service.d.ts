import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicValidatorsConfig } from "../model/misc/dynamic-form-control-validation.model";
import { Validator, ValidatorFactory } from "./dynamic-form-validators";
import { DynamicErrorMessagesMatcher } from "./dynamic-form-validation-matchers";
export declare class DynamicFormValidationService {
    private _NG_VALIDATORS;
    private _NG_ASYNC_VALIDATORS;
    private _DYNAMIC_VALIDATORS;
    private _DYNAMIC_ERROR_MESSAGES_MATCHER;
    constructor(_NG_VALIDATORS: ValidatorFn[], _NG_ASYNC_VALIDATORS: AsyncValidatorFn[], _DYNAMIC_VALIDATORS: Map<string, Validator | ValidatorFactory>, _DYNAMIC_ERROR_MESSAGES_MATCHER: DynamicErrorMessagesMatcher);
    private getValidatorFn;
    private getValidatorFns;
    getValidator(validatorName: string, validatorArgs?: any): ValidatorFn;
    getAsyncValidator(validatorName: string, validatorArgs?: any): AsyncValidatorFn;
    getValidators(validatorsConfig: DynamicValidatorsConfig): ValidatorFn[];
    getAsyncValidators(asyncValidatorsConfig: DynamicValidatorsConfig): AsyncValidatorFn[];
    updateValidators(validatorsConfig: DynamicValidatorsConfig | null, control: AbstractControl, model: DynamicFormControlModel): void;
    updateAsyncValidators(asyncValidatorsConfig: DynamicValidatorsConfig | null, control: AbstractControl, model: DynamicFormControlModel): void;
    showErrorMessages(control: AbstractControl, model: DynamicFormControlModel, hasFocus: boolean): boolean;
    parseErrorMessageConfig(template: string, model: DynamicFormControlModel, error?: any): string;
    createErrorMessages(control: AbstractControl, model: DynamicFormControlModel): string[];
    isFormHook(value: any): boolean;
    isValidatorDescriptor(value: any): boolean;
}
