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
import * as ɵngcc0 from '@angular/core';
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
    DynamicFormValidationService = __decorate([ __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
        __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
        __param(2, Optional()), __param(2, Inject(DYNAMIC_VALIDATORS)),
        __param(3, Optional()), __param(3, Inject(DYNAMIC_ERROR_MESSAGES_MATCHER)),
        __metadata("design:paramtypes", [Array, Array, Map, Function])
    ], DynamicFormValidationService);
DynamicFormValidationService.ɵfac = function DynamicFormValidationService_Factory(t) { return new (t || DynamicFormValidationService)(ɵngcc0.ɵɵinject(NG_VALIDATORS, 8), ɵngcc0.ɵɵinject(NG_ASYNC_VALIDATORS, 8), ɵngcc0.ɵɵinject(DYNAMIC_VALIDATORS, 8), ɵngcc0.ɵɵinject(DYNAMIC_ERROR_MESSAGES_MATCHER, 8)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormValidationService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NG_VALIDATORS]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NG_ASYNC_VALIDATORS]
            }] }, { type: Map, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DYNAMIC_VALIDATORS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DYNAMIC_ERROR_MESSAGES_MATCHER]
            }] }]; }, null); })();
    return DynamicFormValidationService;
}());
export { DynamicFormValidationService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L0BuZy1keW5hbWljLWZvcm1zL2NvcmUvbGliL3NlcnZpY2UvZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFJSCxVQUFVLEVBQ1YsYUFBYSxFQUNiLG1CQUFtQixFQUN0QixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFDSCxlQUFlLEVBR2xCLE1BQU0scURBQXFELENBQUM7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQWdELE1BQU0sMkJBQTJCLENBQUM7QUFDN0csT0FBTyxFQUNILDJCQUEyQixFQUMzQiw4QkFBOEIsRUFFakMsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7O0FBSzVDO0lBRUksc0NBQXVELGNBQTZCLEVBQ3ZCLG9CQUF3QyxFQUN6QyxtQkFBOEQsRUFDbEQsK0JBQTREO1FBSDdFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBb0I7UUFDekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQztRQUNsRCxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQTZCO0lBQ3BJLENBQUM7SUFFTyxxREFBYyxHQUF0QixVQUF1QixhQUFxQixFQUFFLGFBQXlCLEVBQ2hELGVBQXNEO1FBRC9CLDhCQUFBLEVBQUEsb0JBQXlCO1FBQ2hELGdDQUFBLEVBQUEsa0JBQW1DLElBQUksQ0FBQyxjQUFjO1FBRXpFLElBQUksV0FBcUQsQ0FBQztRQUUxRCxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7WUFFMUUs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V0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUE7dURBRGtCLEdBQUc7T0FKM0UsNEJBQTRCLENBb0x4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUNEO3VDQS9NQTtDQThNQyxBQXBMRCxJQW9MQztTQXBMWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgQWJzdHJhY3RDb250cm9sLFxuICAgIEFzeW5jVmFsaWRhdG9yRm4sXG4gICAgVmFsaWRhdG9yRm4sXG4gICAgVmFsaWRhdG9ycyxcbiAgICBOR19WQUxJREFUT1JTLFxuICAgIE5HX0FTWU5DX1ZBTElEQVRPUlNcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEeW5hbWljRm9ybUhvb2ssXG4gICAgRHluYW1pY1ZhbGlkYXRvckRlc2NyaXB0b3IsXG4gICAgRHluYW1pY1ZhbGlkYXRvcnNDb25maWdcbn0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtdmFsaWRhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcbmltcG9ydCB7IERZTkFNSUNfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGYWN0b3J5LCBWYWxpZGF0b3JzVG9rZW4gfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tdmFsaWRhdG9yc1wiO1xuaW1wb3J0IHtcbiAgICBERUZBVUxUX0VSUk9SX1NUQVRFX01BVENIRVIsXG4gICAgRFlOQU1JQ19FUlJPUl9NRVNTQUdFU19NQVRDSEVSLFxuICAgIER5bmFtaWNFcnJvck1lc3NhZ2VzTWF0Y2hlclxufSBmcm9tIFwiLi9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi1tYXRjaGVyc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1WYWxpZGF0aW9uU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HX1ZBTElEQVRPUlMpIHByaXZhdGUgX05HX1ZBTElEQVRPUlM6IFZhbGlkYXRvckZuW10sXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOR19BU1lOQ19WQUxJREFUT1JTKSBwcml2YXRlIF9OR19BU1lOQ19WQUxJREFUT1JTOiBBc3luY1ZhbGlkYXRvckZuW10sXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEWU5BTUlDX1ZBTElEQVRPUlMpIHByaXZhdGUgX0RZTkFNSUNfVkFMSURBVE9SUzogTWFwPHN0cmluZywgVmFsaWRhdG9yIHwgVmFsaWRhdG9yRmFjdG9yeT4sXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEWU5BTUlDX0VSUk9SX01FU1NBR0VTX01BVENIRVIpIHByaXZhdGUgX0RZTkFNSUNfRVJST1JfTUVTU0FHRVNfTUFUQ0hFUjogRHluYW1pY0Vycm9yTWVzc2FnZXNNYXRjaGVyKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWYWxpZGF0b3JGbih2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvckFyZ3M6IGFueSA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzVG9rZW46IFZhbGlkYXRvcnNUb2tlbiA9IHRoaXMuX05HX1ZBTElEQVRPUlMpOiBWYWxpZGF0b3IgfCBuZXZlciB7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvckZuOiBWYWxpZGF0b3JGYWN0b3J5IHwgVmFsaWRhdG9yIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChWYWxpZGF0b3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRvck5hbWUpKSB7IC8vIEJ1aWx0LWluIEFuZ3VsYXIgVmFsaWRhdG9yc1xuXG4gICAgICAgICAgICB2YWxpZGF0b3JGbiA9IChWYWxpZGF0b3JzIGFzIGFueSlbdmFsaWRhdG9yTmFtZV07XG5cbiAgICAgICAgfSBlbHNlIHsgLy8gQ3VzdG9tIFZhbGlkYXRvcnNcblxuICAgICAgICAgICAgaWYgKHRoaXMuX0RZTkFNSUNfVkFMSURBVE9SUyAmJiB0aGlzLl9EWU5BTUlDX1ZBTElEQVRPUlMuaGFzKHZhbGlkYXRvck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yRm4gPSB0aGlzLl9EWU5BTUlDX1ZBTElEQVRPUlMuZ2V0KHZhbGlkYXRvck5hbWUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRvcnNUb2tlbikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvckZuID0gdmFsaWRhdG9yc1Rva2VuLmZpbmQodmFsaWRhdG9yID0+IHZhbGlkYXRvci5uYW1lID09PSB2YWxpZGF0b3JOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JGbiA9PT0gdW5kZWZpbmVkKSB7IC8vIHRocm93IHdoZW4gbm8gdmFsaWRhdG9yIGNvdWxkIGJlIHJlc29sdmVkXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYHZhbGlkYXRvciBcIiR7dmFsaWRhdG9yTmFtZX1cIiBpcyBub3QgcHJvdmlkZWQgdmlhIE5HX1ZBTElEQVRPUlMsIE5HX0FTWU5DX1ZBTElEQVRPUlMgb3IgRFlOQU1JQ19GT1JNX1ZBTElEQVRPUlNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JBcmdzICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbGlkYXRvckZuIGFzIFZhbGlkYXRvckZhY3RvcnkpKHZhbGlkYXRvckFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvckZuIGFzIFZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFZhbGlkYXRvckZucyh2YWxpZGF0b3JzQ29uZmlnOiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzVG9rZW46IFZhbGlkYXRvcnNUb2tlbiA9IHRoaXMuX05HX1ZBTElEQVRPUlMpOiBWYWxpZGF0b3JbXSB7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvckZuczogVmFsaWRhdG9yW10gPSBbXTtcblxuICAgICAgICBpZiAoaXNPYmplY3QodmFsaWRhdG9yc0NvbmZpZykpIHtcblxuICAgICAgICAgICAgdmFsaWRhdG9yRm5zID0gT2JqZWN0LmtleXModmFsaWRhdG9yc0NvbmZpZykubWFwKHZhbGlkYXRvckNvbmZpZ0tleSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0b3JDb25maWdWYWx1ZSA9ICh2YWxpZGF0b3JzQ29uZmlnIGFzIER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnKVt2YWxpZGF0b3JDb25maWdLZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZGF0b3JEZXNjcmlwdG9yKHZhbGlkYXRvckNvbmZpZ1ZhbHVlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB2YWxpZGF0b3JDb25maWdWYWx1ZSBhcyBEeW5hbWljVmFsaWRhdG9yRGVzY3JpcHRvcjtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0b3JGbihkZXNjcmlwdG9yLm5hbWUsIGRlc2NyaXB0b3IuYXJncywgdmFsaWRhdG9yc1Rva2VuKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0b3JGbih2YWxpZGF0b3JDb25maWdLZXksIHZhbGlkYXRvckNvbmZpZ1ZhbHVlLCB2YWxpZGF0b3JzVG9rZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yRm5zO1xuICAgIH1cblxuICAgIGdldFZhbGlkYXRvcih2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvckFyZ3M6IGFueSA9IG51bGwpOiBWYWxpZGF0b3JGbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRvckZuKHZhbGlkYXRvck5hbWUsIHZhbGlkYXRvckFyZ3MpIGFzIFZhbGlkYXRvckZuO1xuICAgIH1cblxuICAgIGdldEFzeW5jVmFsaWRhdG9yKHZhbGlkYXRvck5hbWU6IHN0cmluZywgdmFsaWRhdG9yQXJnczogYW55ID0gbnVsbCk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0b3JGbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JBcmdzLCB0aGlzLl9OR19BU1lOQ19WQUxJREFUT1JTKSBhcyBBc3luY1ZhbGlkYXRvckZuO1xuICAgIH1cblxuICAgIGdldFZhbGlkYXRvcnModmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcpOiBWYWxpZGF0b3JGbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdG9yRm5zKHZhbGlkYXRvcnNDb25maWcpIGFzIFZhbGlkYXRvckZuW107XG4gICAgfVxuXG4gICAgZ2V0QXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcpOiBBc3luY1ZhbGlkYXRvckZuW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0b3JGbnMoYXN5bmNWYWxpZGF0b3JzQ29uZmlnLCB0aGlzLl9OR19BU1lOQ19WQUxJREFUT1JTKSBhcyBBc3luY1ZhbGlkYXRvckZuW107XG4gICAgfVxuXG4gICAgdXBkYXRlVmFsaWRhdG9ycyh2YWxpZGF0b3JzQ29uZmlnOiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB8IG51bGwsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIG1vZGVsLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzQ29uZmlnO1xuXG4gICAgICAgIGlmICh2YWxpZGF0b3JzQ29uZmlnID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGNvbnRyb2wuY2xlYXJWYWxpZGF0b3JzKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0VmFsaWRhdG9ycyh0aGlzLmdldFZhbGlkYXRvcnModmFsaWRhdG9yc0NvbmZpZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfCBudWxsLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIG1vZGVsLmFzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9yc0NvbmZpZztcblxuICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3JzQ29uZmlnID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGNvbnRyb2wuY2xlYXJBc3luY1ZhbGlkYXRvcnMoKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udHJvbC5zZXRBc3luY1ZhbGlkYXRvcnModGhpcy5nZXRBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzQ29uZmlnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3JNZXNzYWdlcyhjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgaGFzRm9jdXM6IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBwcmVjb25kaXRpb24gPSBjb250cm9sLmludmFsaWQgJiYgbW9kZWwuaGFzRXJyb3JNZXNzYWdlcztcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHRoaXMuX0RZTkFNSUNfRVJST1JfTUVTU0FHRVNfTUFUQ0hFUiA/IHRoaXMuX0RZTkFNSUNfRVJST1JfTUVTU0FHRVNfTUFUQ0hFUihjb250cm9sLCBtb2RlbCwgaGFzRm9jdXMpIDpcbiAgICAgICAgICAgIERFRkFVTFRfRVJST1JfU1RBVEVfTUFUQ0hFUihjb250cm9sLCBtb2RlbCwgaGFzRm9jdXMpO1xuXG4gICAgICAgIHJldHVybiBwcmVjb25kaXRpb24gJiYgbWF0Y2hlcjtcbiAgICB9XG5cbiAgICBwYXJzZUVycm9yTWVzc2FnZUNvbmZpZyh0ZW1wbGF0ZTogc3RyaW5nLCBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGVycm9yOiBhbnkgPSBudWxsKTogc3RyaW5nIHtcblxuICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3tcXHMqKC4rPylcXHMqfX0vbWcsIChfbWF0Y2g6IHN0cmluZywgZXhwcmVzc2lvbjogc3RyaW5nKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVNvdXJjZTogYW55ID0gbW9kZWw7XG4gICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lOiBzdHJpbmcgPSBleHByZXNzaW9uO1xuXG4gICAgICAgICAgICBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKFwidmFsaWRhdG9yLlwiKSA+PSAwICYmIGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVNvdXJjZSA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IGV4cHJlc3Npb24ucmVwbGFjZShcInZhbGlkYXRvci5cIiwgXCJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVNvdXJjZVtwcm9wZXJ0eU5hbWVdICE9PSBudWxsICYmIHByb3BlcnR5U291cmNlW3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTb3VyY2VbcHJvcGVydHlOYW1lXSA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUVycm9yTWVzc2FnZXMoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpOiBzdHJpbmdbXSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKG1vZGVsLmhhc0Vycm9yTWVzc2FnZXMpIHtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXNDb25maWcgPSBtb2RlbC5lcnJvck1lc3NhZ2VzIGFzIER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb250cm9sLmVycm9ycyB8fCB7fSkuZm9yRWFjaCh2YWxpZGF0aW9uRXJyb3JLZXkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VLZXkgPSB2YWxpZGF0aW9uRXJyb3JLZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yS2V5ID09PSBcIm1pbmxlbmd0aFwiIHx8IHZhbGlkYXRpb25FcnJvcktleSA9PT0gXCJtYXhsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlS2V5ID0gbWVzc2FnZUtleS5yZXBsYWNlKFwibGVuZ3RoXCIsIFwiTGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlc0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShtZXNzYWdlS2V5KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvciA9IGNvbnRyb2wuZ2V0RXJyb3IodmFsaWRhdGlvbkVycm9yS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVRlbXBsYXRlID0gbWVzc2FnZXNDb25maWdbbWVzc2FnZUtleV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5wYXJzZUVycm9yTWVzc2FnZUNvbmZpZyhtZXNzYWdlVGVtcGxhdGUsIG1vZGVsLCB2YWxpZGF0aW9uRXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG5cbiAgICBpc0Zvcm1Ib29rKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSAmJiAoT2JqZWN0LnZhbHVlcyhEeW5hbWljRm9ybUhvb2spIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaXNWYWxpZGF0b3JEZXNjcmlwdG9yKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpICYmIHZhbHVlLmhhc093blByb3BlcnR5KFwiYXJnc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=