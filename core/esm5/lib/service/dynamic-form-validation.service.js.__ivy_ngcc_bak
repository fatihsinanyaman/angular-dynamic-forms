import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject, Optional } from "@angular/core";
import { Validators, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { DynamicFormHook } from "../model/misc/dynamic-form-control-validation.model";
import { isObject, isString } from "../utils/core.utils";
import { DYNAMIC_VALIDATORS } from "./dynamic-form-validators";
import { DEFAULT_ERROR_STATE_MATCHER, DYNAMIC_ERROR_MESSAGES_MATCHER } from "./dynamic-form-validation-matchers";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./dynamic-form-validators";
import * as i3 from "./dynamic-form-validation-matchers";
var DynamicFormValidationService = /** @class */ (function () {
    function DynamicFormValidationService(_NG_VALIDATORS, _NG_ASYNC_VALIDATORS, _DYNAMIC_VALIDATORS, _DYNAMIC_ERROR_MESSAGES_MATCHER) {
        this._NG_VALIDATORS = _NG_VALIDATORS;
        this._NG_ASYNC_VALIDATORS = _NG_ASYNC_VALIDATORS;
        this._DYNAMIC_VALIDATORS = _DYNAMIC_VALIDATORS;
        this._DYNAMIC_ERROR_MESSAGES_MATCHER = _DYNAMIC_ERROR_MESSAGES_MATCHER;
    }
    DynamicFormValidationService.prototype.getValidatorFn = function (validatorName, validatorArgs, validatorsToken) {
        if (validatorArgs === void 0) { validatorArgs = null; }
        if (validatorsToken === void 0) { validatorsToken = this._NG_VALIDATORS; }
        var validatorFn;
        if (Validators.hasOwnProperty(validatorName)) { // Built-in Angular Validators
            validatorFn = Validators[validatorName];
        }
        else { // Custom Validators
            if (this._DYNAMIC_VALIDATORS && this._DYNAMIC_VALIDATORS.has(validatorName)) {
                validatorFn = this._DYNAMIC_VALIDATORS.get(validatorName);
            }
            else if (validatorsToken) {
                validatorFn = validatorsToken.find(function (validator) { return validator.name === validatorName; });
            }
        }
        if (validatorFn === undefined) { // throw when no validator could be resolved
            throw new Error("validator \"" + validatorName + "\" is not provided via NG_VALIDATORS, NG_ASYNC_VALIDATORS or DYNAMIC_FORM_VALIDATORS");
        }
        if (validatorArgs !== null) {
            return validatorFn(validatorArgs);
        }
        return validatorFn;
    };
    DynamicFormValidationService.prototype.getValidatorFns = function (validatorsConfig, validatorsToken) {
        var _this = this;
        if (validatorsToken === void 0) { validatorsToken = this._NG_VALIDATORS; }
        var validatorFns = [];
        if (isObject(validatorsConfig)) {
            validatorFns = Object.keys(validatorsConfig).map(function (validatorConfigKey) {
                var validatorConfigValue = validatorsConfig[validatorConfigKey];
                if (_this.isValidatorDescriptor(validatorConfigValue)) {
                    var descriptor = validatorConfigValue;
                    return _this.getValidatorFn(descriptor.name, descriptor.args, validatorsToken);
                }
                return _this.getValidatorFn(validatorConfigKey, validatorConfigValue, validatorsToken);
            });
        }
        return validatorFns;
    };
    DynamicFormValidationService.prototype.getValidator = function (validatorName, validatorArgs) {
        if (validatorArgs === void 0) { validatorArgs = null; }
        return this.getValidatorFn(validatorName, validatorArgs);
    };
    DynamicFormValidationService.prototype.getAsyncValidator = function (validatorName, validatorArgs) {
        if (validatorArgs === void 0) { validatorArgs = null; }
        return this.getValidatorFn(validatorName, validatorArgs, this._NG_ASYNC_VALIDATORS);
    };
    DynamicFormValidationService.prototype.getValidators = function (validatorsConfig) {
        return this.getValidatorFns(validatorsConfig);
    };
    DynamicFormValidationService.prototype.getAsyncValidators = function (asyncValidatorsConfig) {
        return this.getValidatorFns(asyncValidatorsConfig, this._NG_ASYNC_VALIDATORS);
    };
    DynamicFormValidationService.prototype.updateValidators = function (validatorsConfig, control, model) {
        model.validators = validatorsConfig;
        if (validatorsConfig === null) {
            control.clearValidators();
        }
        else {
            control.setValidators(this.getValidators(validatorsConfig));
        }
        control.updateValueAndValidity();
    };
    DynamicFormValidationService.prototype.updateAsyncValidators = function (asyncValidatorsConfig, control, model) {
        model.asyncValidators = asyncValidatorsConfig;
        if (asyncValidatorsConfig === null) {
            control.clearAsyncValidators();
        }
        else {
            control.setAsyncValidators(this.getAsyncValidators(asyncValidatorsConfig));
        }
        control.updateValueAndValidity();
    };
    DynamicFormValidationService.prototype.showErrorMessages = function (control, model, hasFocus) {
        var precondition = control.invalid && model.hasErrorMessages;
        var matcher = this._DYNAMIC_ERROR_MESSAGES_MATCHER ? this._DYNAMIC_ERROR_MESSAGES_MATCHER(control, model, hasFocus) :
            DEFAULT_ERROR_STATE_MATCHER(control, model, hasFocus);
        return precondition && matcher;
    };
    DynamicFormValidationService.prototype.parseErrorMessageConfig = function (template, model, error) {
        if (error === void 0) { error = null; }
        return template.replace(/{{\s*(.+?)\s*}}/mg, function (_match, expression) {
            var propertySource = model;
            var propertyName = expression;
            if (expression.indexOf("validator.") >= 0 && error) {
                propertySource = error;
                propertyName = expression.replace("validator.", "");
            }
            return propertySource[propertyName] !== null && propertySource[propertyName] !== undefined ?
                propertySource[propertyName] : null;
        });
    };
    DynamicFormValidationService.prototype.createErrorMessages = function (control, model) {
        var _this = this;
        var messages = [];
        if (model.hasErrorMessages) {
            var messagesConfig_1 = model.errorMessages;
            Object.keys(control.errors || {}).forEach(function (validationErrorKey) {
                var messageKey = validationErrorKey;
                if (validationErrorKey === "minlength" || validationErrorKey === "maxlength") {
                    messageKey = messageKey.replace("length", "Length");
                }
                if (messagesConfig_1.hasOwnProperty(messageKey)) {
                    var validationError = control.getError(validationErrorKey);
                    var messageTemplate = messagesConfig_1[messageKey];
                    messages.push(_this.parseErrorMessageConfig(messageTemplate, model, validationError));
                }
            });
        }
        return messages;
    };
    DynamicFormValidationService.prototype.isFormHook = function (value) {
        return isString(value) && Object.values(DynamicFormHook).includes(value);
    };
    DynamicFormValidationService.prototype.isValidatorDescriptor = function (value) {
        if (isObject(value)) {
            return value.hasOwnProperty("name") && value.hasOwnProperty("args");
        }
        return false;
    };
    DynamicFormValidationService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] }] },
        { type: Map, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_VALIDATORS,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_ERROR_MESSAGES_MATCHER,] }] }
    ]; };
    DynamicFormValidationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormValidationService_Factory() { return new DynamicFormValidationService(i0.ɵɵinject(i1.NG_VALIDATORS, 8), i0.ɵɵinject(i1.NG_ASYNC_VALIDATORS, 8), i0.ɵɵinject(i2.DYNAMIC_VALIDATORS, 8), i0.ɵɵinject(i3.DYNAMIC_ERROR_MESSAGES_MATCHER, 8)); }, token: DynamicFormValidationService, providedIn: "root" });
    DynamicFormValidationService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
        __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
        __param(2, Optional()), __param(2, Inject(DYNAMIC_VALIDATORS)),
        __param(3, Optional()), __param(3, Inject(DYNAMIC_ERROR_MESSAGES_MATCHER)),
        __metadata("design:paramtypes", [Array, Array, Map, Function])
    ], DynamicFormValidationService);
    return DynamicFormValidationService;
}());
export { DynamicFormValidationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUlILFVBQVUsRUFDVixhQUFhLEVBQ2IsbUJBQW1CLEVBQ3RCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUNILGVBQWUsRUFHbEIsTUFBTSxxREFBcUQsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0QsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RyxPQUFPLEVBQ0gsMkJBQTJCLEVBQzNCLDhCQUE4QixFQUVqQyxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUs1QztJQUVJLHNDQUF1RCxjQUE2QixFQUN2QixvQkFBd0MsRUFDekMsbUJBQThELEVBQ2xELCtCQUE0RDtRQUg3RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW9CO1FBQ3pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkM7UUFDbEQsb0NBQStCLEdBQS9CLCtCQUErQixDQUE2QjtJQUNwSSxDQUFDO0lBRU8scURBQWMsR0FBdEIsVUFBdUIsYUFBcUIsRUFBRSxhQUF5QixFQUNoRCxlQUFzRDtRQUQvQiw4QkFBQSxFQUFBLG9CQUF5QjtRQUNoRCxnQ0FBQSxFQUFBLGtCQUFtQyxJQUFJLENBQUMsY0FBYztRQUV6RSxJQUFJLFdBQXFELENBQUM7UUFFMUQsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsOEJBQThCO1lBRTFFLFdBQVcsR0FBSSxVQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBRXBEO2FBQU0sRUFBRSxvQkFBb0I7WUFFekIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDekUsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFFN0Q7aUJBQU0sSUFBSSxlQUFlLEVBQUU7Z0JBQ3hCLFdBQVcsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQWhDLENBQWdDLENBQUMsQ0FBQzthQUNyRjtTQUNKO1FBRUQsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFLEVBQUUsNENBQTRDO1lBQ3pFLE1BQU0sSUFBSSxLQUFLLENBQ1gsaUJBQWMsYUFBYSx5RkFBcUYsQ0FBQyxDQUFDO1NBQ3pIO1FBRUQsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQ3hCLE9BQVEsV0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sV0FBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRU8sc0RBQWUsR0FBdkIsVUFBd0IsZ0JBQXlDLEVBQ3pDLGVBQXNEO1FBRDlFLGlCQXVCQztRQXRCdUIsZ0NBQUEsRUFBQSxrQkFBbUMsSUFBSSxDQUFDLGNBQWM7UUFFMUUsSUFBSSxZQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUVuQyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBRTVCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsa0JBQWtCO2dCQUUvRCxJQUFNLG9CQUFvQixHQUFJLGdCQUE0QyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBRS9GLElBQUksS0FBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLEVBQUU7b0JBRWxELElBQU0sVUFBVSxHQUFHLG9CQUFrRCxDQUFDO29CQUV0RSxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2lCQUNqRjtnQkFFRCxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxtREFBWSxHQUFaLFVBQWEsYUFBcUIsRUFBRSxhQUF5QjtRQUF6Qiw4QkFBQSxFQUFBLG9CQUF5QjtRQUN6RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBZ0IsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0RBQWlCLEdBQWpCLFVBQWtCLGFBQXFCLEVBQUUsYUFBeUI7UUFBekIsOEJBQUEsRUFBQSxvQkFBeUI7UUFDOUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFxQixDQUFDO0lBQzVHLENBQUM7SUFFRCxvREFBYSxHQUFiLFVBQWMsZ0JBQXlDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBa0IsQ0FBQztJQUNuRSxDQUFDO0lBRUQseURBQWtCLEdBQWxCLFVBQW1CLHFCQUE4QztRQUM3RCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUF1QixDQUFDO0lBQ3hHLENBQUM7SUFFRCx1REFBZ0IsR0FBaEIsVUFBaUIsZ0JBQWdELEVBQUUsT0FBd0IsRUFDMUUsS0FBOEI7UUFFM0MsS0FBSyxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxJQUFJLGdCQUFnQixLQUFLLElBQUksRUFBRTtZQUUzQixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FFN0I7YUFBTTtZQUNILE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNERBQXFCLEdBQXJCLFVBQXNCLHFCQUFxRCxFQUFFLE9BQXdCLEVBQy9FLEtBQThCO1FBRWhELEtBQUssQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUM7UUFFOUMsSUFBSSxxQkFBcUIsS0FBSyxJQUFJLEVBQUU7WUFFaEMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FFbEM7YUFBTTtZQUNILE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHdEQUFpQixHQUFqQixVQUFrQixPQUF3QixFQUFFLEtBQThCLEVBQUUsUUFBaUI7UUFFekYsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDL0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25ILDJCQUEyQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFMUQsT0FBTyxZQUFZLElBQUksT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4REFBdUIsR0FBdkIsVUFBd0IsUUFBZ0IsRUFBRSxLQUE4QixFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFFdkYsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLFVBQUMsTUFBYyxFQUFFLFVBQWtCO1lBRTVFLElBQUksY0FBYyxHQUFRLEtBQUssQ0FBQztZQUNoQyxJQUFJLFlBQVksR0FBVyxVQUFVLENBQUM7WUFFdEMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7Z0JBRWhELGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN2RDtZQUVELE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQ3hGLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBEQUFtQixHQUFuQixVQUFvQixPQUF3QixFQUFFLEtBQThCO1FBQTVFLGlCQTJCQztRQXpCRyxJQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFFOUIsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFFeEIsSUFBTSxnQkFBYyxHQUFHLEtBQUssQ0FBQyxhQUF3QyxDQUFDO1lBRXRFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxrQkFBa0I7Z0JBRXhELElBQUksVUFBVSxHQUFHLGtCQUFrQixDQUFDO2dCQUVwQyxJQUFJLGtCQUFrQixLQUFLLFdBQVcsSUFBSSxrQkFBa0IsS0FBSyxXQUFXLEVBQUU7b0JBQzFFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDdkQ7Z0JBRUQsSUFBSSxnQkFBYyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFFM0MsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUM3RCxJQUFNLGVBQWUsR0FBRyxnQkFBYyxDQUFDLFVBQVUsQ0FBVyxDQUFDO29CQUU3RCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7aUJBQ3hGO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpREFBVSxHQUFWLFVBQVcsS0FBVTtRQUNqQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsNERBQXFCLEdBQXJCLFVBQXNCLEtBQVU7UUFFNUIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkU7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs0Q0FqTFksUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzRDQUNoQyxRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQjtnQkFDOEIsR0FBRyx1QkFBdkUsUUFBUSxZQUFJLE1BQU0sU0FBQyxrQkFBa0I7Z0RBQ3JDLFFBQVEsWUFBSSxNQUFNLFNBQUMsOEJBQThCOzs7SUFMckQsNEJBQTRCO1FBSHhDLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7UUFHZSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDakMsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDdkMsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDdEMsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUE7dURBRGtCLEdBQUc7T0FKM0UsNEJBQTRCLENBb0x4Qzt1Q0E5TUQ7Q0E4TUMsQUFwTEQsSUFvTEM7U0FwTFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBBc3luY1ZhbGlkYXRvckZuLFxuICAgIFZhbGlkYXRvckZuLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgTkdfVkFMSURBVE9SUyxcbiAgICBOR19BU1lOQ19WQUxJREFUT1JTXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1Ib29rLFxuICAgIER5bmFtaWNWYWxpZGF0b3JEZXNjcmlwdG9yLFxuICAgIER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnXG59IGZyb20gXCIuLi9tb2RlbC9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLXZhbGlkYXRpb24ubW9kZWxcIjtcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1N0cmluZyB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5pbXBvcnQgeyBEWU5BTUlDX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRmFjdG9yeSwgVmFsaWRhdG9yc1Rva2VuIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbGlkYXRvcnNcIjtcbmltcG9ydCB7XG4gICAgREVGQVVMVF9FUlJPUl9TVEFURV9NQVRDSEVSLFxuICAgIERZTkFNSUNfRVJST1JfTUVTU0FHRVNfTUFUQ0hFUixcbiAgICBEeW5hbWljRXJyb3JNZXNzYWdlc01hdGNoZXJcbn0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbGlkYXRpb24tbWF0Y2hlcnNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR19WQUxJREFUT1JTKSBwcml2YXRlIF9OR19WQUxJREFUT1JTOiBWYWxpZGF0b3JGbltdLFxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTkdfQVNZTkNfVkFMSURBVE9SUykgcHJpdmF0ZSBfTkdfQVNZTkNfVkFMSURBVE9SUzogQXN5bmNWYWxpZGF0b3JGbltdLFxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRFlOQU1JQ19WQUxJREFUT1JTKSBwcml2YXRlIF9EWU5BTUlDX1ZBTElEQVRPUlM6IE1hcDxzdHJpbmcsIFZhbGlkYXRvciB8IFZhbGlkYXRvckZhY3Rvcnk+LFxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRFlOQU1JQ19FUlJPUl9NRVNTQUdFU19NQVRDSEVSKSBwcml2YXRlIF9EWU5BTUlDX0VSUk9SX01FU1NBR0VTX01BVENIRVI6IER5bmFtaWNFcnJvck1lc3NhZ2VzTWF0Y2hlcikge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VmFsaWRhdG9yRm4odmFsaWRhdG9yTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JBcmdzOiBhbnkgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1Rva2VuOiBWYWxpZGF0b3JzVG9rZW4gPSB0aGlzLl9OR19WQUxJREFUT1JTKTogVmFsaWRhdG9yIHwgbmV2ZXIge1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3JGbjogVmFsaWRhdG9yRmFjdG9yeSB8IFZhbGlkYXRvciB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoVmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0b3JOYW1lKSkgeyAvLyBCdWlsdC1pbiBBbmd1bGFyIFZhbGlkYXRvcnNcblxuICAgICAgICAgICAgdmFsaWRhdG9yRm4gPSAoVmFsaWRhdG9ycyBhcyBhbnkpW3ZhbGlkYXRvck5hbWVdO1xuXG4gICAgICAgIH0gZWxzZSB7IC8vIEN1c3RvbSBWYWxpZGF0b3JzXG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9EWU5BTUlDX1ZBTElEQVRPUlMgJiYgdGhpcy5fRFlOQU1JQ19WQUxJREFUT1JTLmhhcyh2YWxpZGF0b3JOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvckZuID0gdGhpcy5fRFlOQU1JQ19WQUxJREFUT1JTLmdldCh2YWxpZGF0b3JOYW1lKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0b3JzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JGbiA9IHZhbGlkYXRvcnNUb2tlbi5maW5kKHZhbGlkYXRvciA9PiB2YWxpZGF0b3IubmFtZSA9PT0gdmFsaWRhdG9yTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdG9yRm4gPT09IHVuZGVmaW5lZCkgeyAvLyB0aHJvdyB3aGVuIG5vIHZhbGlkYXRvciBjb3VsZCBiZSByZXNvbHZlZFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGB2YWxpZGF0b3IgXCIke3ZhbGlkYXRvck5hbWV9XCIgaXMgbm90IHByb3ZpZGVkIHZpYSBOR19WQUxJREFUT1JTLCBOR19BU1lOQ19WQUxJREFUT1JTIG9yIERZTkFNSUNfRk9STV9WQUxJREFUT1JTYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdG9yQXJncyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWxpZGF0b3JGbiBhcyBWYWxpZGF0b3JGYWN0b3J5KSh2YWxpZGF0b3JBcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JGbiBhcyBWYWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWYWxpZGF0b3JGbnModmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1Rva2VuOiBWYWxpZGF0b3JzVG9rZW4gPSB0aGlzLl9OR19WQUxJREFUT1JTKTogVmFsaWRhdG9yW10ge1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3JGbnM6IFZhbGlkYXRvcltdID0gW107XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbGlkYXRvcnNDb25maWcpKSB7XG5cbiAgICAgICAgICAgIHZhbGlkYXRvckZucyA9IE9iamVjdC5rZXlzKHZhbGlkYXRvcnNDb25maWcpLm1hcCh2YWxpZGF0b3JDb25maWdLZXkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yQ29uZmlnVmFsdWUgPSAodmFsaWRhdG9yc0NvbmZpZyBhcyBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZylbdmFsaWRhdG9yQ29uZmlnS2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRhdG9yRGVzY3JpcHRvcih2YWxpZGF0b3JDb25maWdWYWx1ZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdmFsaWRhdG9yQ29uZmlnVmFsdWUgYXMgRHluYW1pY1ZhbGlkYXRvckRlc2NyaXB0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdG9yRm4oZGVzY3JpcHRvci5uYW1lLCBkZXNjcmlwdG9yLmFyZ3MsIHZhbGlkYXRvcnNUb2tlbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdG9yRm4odmFsaWRhdG9yQ29uZmlnS2V5LCB2YWxpZGF0b3JDb25maWdWYWx1ZSwgdmFsaWRhdG9yc1Rva2VuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvckZucztcbiAgICB9XG5cbiAgICBnZXRWYWxpZGF0b3IodmFsaWRhdG9yTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JBcmdzOiBhbnkgPSBudWxsKTogVmFsaWRhdG9yRm4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0b3JGbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JBcmdzKSBhcyBWYWxpZGF0b3JGbjtcbiAgICB9XG5cbiAgICBnZXRBc3luY1ZhbGlkYXRvcih2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvckFyZ3M6IGFueSA9IG51bGwpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdG9yRm4odmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yQXJncywgdGhpcy5fTkdfQVNZTkNfVkFMSURBVE9SUykgYXMgQXN5bmNWYWxpZGF0b3JGbjtcbiAgICB9XG5cbiAgICBnZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnNDb25maWc6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnKTogVmFsaWRhdG9yRm5bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRvckZucyh2YWxpZGF0b3JzQ29uZmlnKSBhcyBWYWxpZGF0b3JGbltdO1xuICAgIH1cblxuICAgIGdldEFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnNDb25maWc6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnKTogQXN5bmNWYWxpZGF0b3JGbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdG9yRm5zKGFzeW5jVmFsaWRhdG9yc0NvbmZpZywgdGhpcy5fTkdfQVNZTkNfVkFMSURBVE9SUykgYXMgQXN5bmNWYWxpZGF0b3JGbltdO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbGlkYXRvcnModmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfCBudWxsLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgICBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBtb2RlbC52YWxpZGF0b3JzID0gdmFsaWRhdG9yc0NvbmZpZztcblxuICAgICAgICBpZiAodmFsaWRhdG9yc0NvbmZpZyA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICBjb250cm9sLmNsZWFyVmFsaWRhdG9ycygpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250cm9sLnNldFZhbGlkYXRvcnModGhpcy5nZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnNDb25maWcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnNDb25maWc6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbCwgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBtb2RlbC5hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnNDb25maWc7XG5cbiAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9yc0NvbmZpZyA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICBjb250cm9sLmNsZWFyQXN5bmNWYWxpZGF0b3JzKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0QXN5bmNWYWxpZGF0b3JzKHRoaXMuZ2V0QXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9yc0NvbmZpZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yTWVzc2FnZXMoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGhhc0ZvY3VzOiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgcHJlY29uZGl0aW9uID0gY29udHJvbC5pbnZhbGlkICYmIG1vZGVsLmhhc0Vycm9yTWVzc2FnZXM7XG4gICAgICAgIGNvbnN0IG1hdGNoZXIgPSB0aGlzLl9EWU5BTUlDX0VSUk9SX01FU1NBR0VTX01BVENIRVIgPyB0aGlzLl9EWU5BTUlDX0VSUk9SX01FU1NBR0VTX01BVENIRVIoY29udHJvbCwgbW9kZWwsIGhhc0ZvY3VzKSA6XG4gICAgICAgICAgICBERUZBVUxUX0VSUk9SX1NUQVRFX01BVENIRVIoY29udHJvbCwgbW9kZWwsIGhhc0ZvY3VzKTtcblxuICAgICAgICByZXR1cm4gcHJlY29uZGl0aW9uICYmIG1hdGNoZXI7XG4gICAgfVxuXG4gICAgcGFyc2VFcnJvck1lc3NhZ2VDb25maWcodGVtcGxhdGU6IHN0cmluZywgbW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCBlcnJvcjogYW55ID0gbnVsbCk6IHN0cmluZyB7XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL3t7XFxzKiguKz8pXFxzKn19L21nLCAoX21hdGNoOiBzdHJpbmcsIGV4cHJlc3Npb246IHN0cmluZykgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlTb3VyY2U6IGFueSA9IG1vZGVsO1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5TmFtZTogc3RyaW5nID0gZXhwcmVzc2lvbjtcblxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcInZhbGlkYXRvci5cIikgPj0gMCAmJiBlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgcHJvcGVydHlTb3VyY2UgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBleHByZXNzaW9uLnJlcGxhY2UoXCJ2YWxpZGF0b3IuXCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHlTb3VyY2VbcHJvcGVydHlOYW1lXSAhPT0gbnVsbCAmJiBwcm9wZXJ0eVNvdXJjZVtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHByb3BlcnR5U291cmNlW3Byb3BlcnR5TmFtZV0gOiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVFcnJvck1lc3NhZ2VzKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsKTogc3RyaW5nW10ge1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmIChtb2RlbC5oYXNFcnJvck1lc3NhZ2VzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29uZmlnID0gbW9kZWwuZXJyb3JNZXNzYWdlcyBhcyBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5lcnJvcnMgfHwge30pLmZvckVhY2godmFsaWRhdGlvbkVycm9yS2V5ID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlS2V5ID0gdmFsaWRhdGlvbkVycm9yS2V5O1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcktleSA9PT0gXCJtaW5sZW5ndGhcIiB8fCB2YWxpZGF0aW9uRXJyb3JLZXkgPT09IFwibWF4bGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUtleSA9IG1lc3NhZ2VLZXkucmVwbGFjZShcImxlbmd0aFwiLCBcIkxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNDb25maWcuaGFzT3duUHJvcGVydHkobWVzc2FnZUtleSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBjb250cm9sLmdldEVycm9yKHZhbGlkYXRpb25FcnJvcktleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VUZW1wbGF0ZSA9IG1lc3NhZ2VzQ29uZmlnW21lc3NhZ2VLZXldIGFzIHN0cmluZztcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHRoaXMucGFyc2VFcnJvck1lc3NhZ2VDb25maWcobWVzc2FnZVRlbXBsYXRlLCBtb2RlbCwgdmFsaWRhdGlvbkVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuXG4gICAgaXNGb3JtSG9vayh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgJiYgKE9iamVjdC52YWx1ZXMoRHluYW1pY0Zvcm1Ib29rKSBhcyBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlzVmFsaWRhdG9yRGVzY3JpcHRvcih2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImFyZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19