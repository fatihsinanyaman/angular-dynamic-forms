import { InjectionToken } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
export declare type DynamicErrorMessagesMatcher = (control: AbstractControl, model: DynamicFormControlModel, hasFocus: boolean) => boolean;
export declare const DEFAULT_ERROR_STATE_MATCHER: DynamicErrorMessagesMatcher;
export declare const CHANGE_ERROR_STATE_MATCHER: DynamicErrorMessagesMatcher;
export declare const DYNAMIC_ERROR_MESSAGES_MATCHER: InjectionToken<DynamicErrorMessagesMatcher>;
