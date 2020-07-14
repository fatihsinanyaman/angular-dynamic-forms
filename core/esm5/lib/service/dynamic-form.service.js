import { __decorate, __metadata, __read, __spread, __values } from "tslib";
import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { DynamicFormArrayModel, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_FORM_CONTROL_TYPE_GROUP, DynamicFormGroupModel } from "../model/form-group/dynamic-form-group.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DynamicCheckboxGroupModel } from "../model/checkbox/dynamic-checkbox-group.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DynamicCheckboxModel } from "../model/checkbox/dynamic-checkbox.model";
import { DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER, DynamicColorPickerModel } from "../model/colorpicker/dynamic-colorpicker.model";
import { DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DynamicDatePickerModel } from "../model/datepicker/dynamic-datepicker.model";
import { DYNAMIC_FORM_CONTROL_TYPE_EDITOR, DynamicEditorModel } from "../model/editor/dynamic-editor.model";
import { DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD, DynamicFileUploadModel } from "../model/file-upload/dynamic-file-upload.model";
import { DYNAMIC_FORM_CONTROL_TYPE_INPUT, DynamicInputModel } from "../model/input/dynamic-input.model";
import { DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DynamicRadioGroupModel } from "../model/radio/dynamic-radio-group.model";
import { DYNAMIC_FORM_CONTROL_TYPE_RATING, DynamicRatingModel } from "../model/rating/dynamic-rating.model";
import { DYNAMIC_FORM_CONTROL_TYPE_SELECT, DynamicSelectModel } from "../model/select/dynamic-select.model";
import { DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DynamicSliderModel } from "../model/slider/dynamic-slider.model";
import { DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DynamicSwitchModel } from "../model/switch/dynamic-switch.model";
import { DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DynamicTextAreaModel } from "../model/textarea/dynamic-textarea.model";
import { DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DynamicTimePickerModel } from "../model/timepicker/dynamic-timepicker.model";
import { DynamicFormValidationService } from "./dynamic-form-validation.service";
import { DynamicFormHook } from "../model/misc/dynamic-form-control-validation.model";
import { maskFromString, parseReviver } from "../utils/json.utils";
import { isString } from "../utils/core.utils";
import { DynamicFormComponent } from "../component/dynamic-form.component";
import { DynamicFormComponentService } from "./dynamic-form-component.service";
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-form-component.service";
import * as i2 from "./dynamic-form-validation.service";
import * as ɵngcc0 from '@angular/core';
var DynamicFormService = /** @class */ (function () {
    function DynamicFormService(componentService, validationService) {
        this.componentService = componentService;
        this.validationService = validationService;
    }
    DynamicFormService.prototype.createAbstractControlOptions = function (validatorsConfig, asyncValidatorsConfig, updateOn) {
        if (validatorsConfig === void 0) { validatorsConfig = null; }
        if (asyncValidatorsConfig === void 0) { asyncValidatorsConfig = null; }
        if (updateOn === void 0) { updateOn = null; }
        return {
            asyncValidators: asyncValidatorsConfig !== null ? this.validationService.getAsyncValidators(asyncValidatorsConfig) : null,
            validators: validatorsConfig !== null ? this.validationService.getValidators(validatorsConfig) : null,
            updateOn: updateOn !== null && this.validationService.isFormHook(updateOn) ? updateOn : DynamicFormHook.Change
        };
    };
    DynamicFormService.prototype.createFormArray = function (formArrayModel) {
        var controls = [];
        var options = this.createAbstractControlOptions(formArrayModel.validators, formArrayModel.asyncValidators, formArrayModel.updateOn);
        for (var index = 0; index < formArrayModel.size; index++) {
            var groupModel = formArrayModel.get(index);
            var groupOptions = this.createAbstractControlOptions(formArrayModel.groupValidators, formArrayModel.groupAsyncValidators, formArrayModel.updateOn);
            controls.push(this.createFormGroup(groupModel.group, groupOptions, groupModel));
        }
        return new FormArray(controls, options);
    };
    DynamicFormService.prototype.createFormGroup = function (formModel, options, parent) {
        var _this = this;
        if (options === void 0) { options = null; }
        if (parent === void 0) { parent = null; }
        var controls = {};
        formModel.forEach(function (model) {
            model.parent = parent;
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    controls[model.id] = _this.createFormArray(model);
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    var groupModel = model;
                    var groupOptions = _this.createAbstractControlOptions(groupModel.validators, groupModel.asyncValidators, groupModel.updateOn);
                    controls[model.id] = _this.createFormGroup(groupModel.group, groupOptions, groupModel);
                    break;
                default:
                    var controlModel = model;
                    var controlState = { value: controlModel.value, disabled: controlModel.disabled };
                    var controlOptions = _this.createAbstractControlOptions(controlModel.validators, controlModel.asyncValidators, controlModel.updateOn);
                    controls[model.id] = new FormControl(controlState, controlOptions);
            }
        });
        return new FormGroup(controls, options);
    };
    DynamicFormService.prototype.getPathSegment = function (model) {
        return model instanceof DynamicFormArrayGroupModel ? model.index.toString() : model.id;
    };
    DynamicFormService.prototype.getPath = function (model, join) {
        if (join === void 0) { join = false; }
        var path = [this.getPathSegment(model)];
        var parent = model.parent;
        while (parent) {
            path.unshift(this.getPathSegment(parent));
            parent = parent.parent;
        }
        return join ? path.join(".") : path;
    };
    DynamicFormService.prototype.addFormGroupControl = function (formGroup, formModel) {
        var models = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            models[_i - 2] = arguments[_i];
        }
        if (formModel instanceof DynamicFormGroupModel) {
            this.insertFormGroupControl.apply(this, __spread([formModel.size(), formGroup, formModel], models));
        }
        else {
            var model = formModel;
            this.insertFormGroupControl.apply(this, __spread([model.length, formGroup, model], models));
        }
    };
    DynamicFormService.prototype.moveFormGroupControl = function (index, step, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formModel.move(index, step);
        }
        else {
            var model = formModel;
            model.splice.apply(model, __spread([index + step, 0], model.splice(index, 1)));
        }
    };
    DynamicFormService.prototype.insertFormGroupControl = function (index, formGroup, formModel) {
        var models = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            models[_i - 3] = arguments[_i];
        }
        var parent = formModel instanceof DynamicFormGroupModel ? formModel : null;
        var controls = this.createFormGroup(models, null, parent).controls;
        Object.keys(controls).forEach(function (controlName, idx) {
            var controlModel = models[idx];
            if (formModel instanceof DynamicFormGroupModel) {
                formModel.insert(index, controlModel);
            }
            else {
                formModel.splice(index, 0, controlModel);
            }
            formGroup.addControl(controlName, controls[controlName]);
        });
    };
    DynamicFormService.prototype.removeFormGroupControl = function (index, formGroup, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formGroup.removeControl(formModel.get(index).id);
            formModel.remove(index);
        }
        else {
            formGroup.removeControl(formModel[index].id);
            formModel.splice(index, 1);
        }
    };
    DynamicFormService.prototype.addFormArrayGroup = function (formArray, formArrayModel) {
        var groupModel = formArrayModel.addGroup();
        formArray.push(this.createFormGroup(groupModel.group, null, groupModel));
    };
    DynamicFormService.prototype.insertFormArrayGroup = function (index, formArray, formArrayModel) {
        var groupModel = formArrayModel.insertGroup(index);
        formArray.insert(index, this.createFormGroup(groupModel.group, null, groupModel));
    };
    DynamicFormService.prototype.moveFormArrayGroup = function (index, step, formArray, formArrayModel) {
        var newIndex = index + step;
        var moveUp = step >= 0;
        if ((index >= 0 && index < formArrayModel.size) && (newIndex >= 0 && newIndex < formArrayModel.size)) {
            var movingGroups_1 = [];
            for (var i = moveUp ? index : newIndex; i <= (moveUp ? newIndex : index); i++) {
                movingGroups_1.push(formArray.at(i));
            }
            movingGroups_1.forEach(function (formControl, idx) {
                var position;
                if (moveUp) {
                    position = idx === 0 ? newIndex : index + idx - 1;
                }
                else {
                    position = idx === movingGroups_1.length - 1 ? newIndex : newIndex + idx + 1;
                }
                formArray.setControl(position, formControl);
            });
            formArrayModel.moveGroup(index, step);
        }
        else {
            throw new Error("form array group cannot be moved due to index or new index being out of bounds");
        }
    };
    DynamicFormService.prototype.removeFormArrayGroup = function (index, formArray, formArrayModel) {
        formArray.removeAt(index);
        formArrayModel.removeGroup(index);
    };
    DynamicFormService.prototype.clearFormArray = function (formArray, formArrayModel) {
        formArray.clear();
        formArrayModel.clear();
    };
    DynamicFormService.prototype.findById = function (id, formModel) {
        var result = null;
        var findByIdFn = function (modelId, groupModel) {
            var e_1, _a;
            try {
                for (var groupModel_1 = __values(groupModel), groupModel_1_1 = groupModel_1.next(); !groupModel_1_1.done; groupModel_1_1 = groupModel_1.next()) {
                    var controlModel = groupModel_1_1.value;
                    if (controlModel.id === modelId) {
                        result = controlModel;
                        break;
                    }
                    if (controlModel instanceof DynamicFormGroupModel) {
                        findByIdFn(modelId, controlModel.group);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (groupModel_1_1 && !groupModel_1_1.done && (_a = groupModel_1.return)) _a.call(groupModel_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        findByIdFn(id, formModel);
        return result;
    };
    DynamicFormService.prototype.findModelById = function (id, formModel) {
        return this.findById(id, formModel);
    };
    DynamicFormService.prototype.findControlByModel = function (model, group) {
        return group.root.get(this.getPath(model, true));
    };
    DynamicFormService.prototype.detectChanges = function (formComponent) {
        var e_2, _a;
        if (formComponent instanceof DynamicFormComponent) {
            formComponent.markForCheck();
            formComponent.detectChanges();
        }
        else {
            try {
                for (var _b = __values(this.componentService.getForms()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var form = _c.value;
                    form.markForCheck();
                    form.detectChanges();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    DynamicFormService.prototype.fromJSON = function (json) {
        var _this = this;
        var formModelJSON = isString(json) ? JSON.parse(json, parseReviver) : json;
        var formModel = [];
        formModelJSON.forEach(function (model) {
            var _a;
            var layout = (_a = model.layout) !== null && _a !== void 0 ? _a : null;
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    var formArrayModel_1 = model;
                    if (Array.isArray(formArrayModel_1.groups)) {
                        formArrayModel_1.groups.forEach(function (groupModel) {
                            groupModel.group = _this.fromJSON(groupModel.group);
                        });
                    }
                    formArrayModel_1.groupFactory = function () {
                        return _this.fromJSON(formArrayModel_1.groupPrototype);
                    };
                    formModel.push(new DynamicFormArrayModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                    formModel.push(new DynamicCheckboxModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    model.group = _this.fromJSON(model.group);
                    formModel.push(new DynamicCheckboxGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER:
                    formModel.push(new DynamicColorPickerModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
                    formModel.push(new DynamicDatePickerModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_EDITOR:
                    formModel.push(new DynamicEditorModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD:
                    model.value = null;
                    formModel.push(new DynamicFileUploadModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                    model.group = _this.fromJSON(model.group);
                    formModel.push(new DynamicFormGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                    var inputModel = model;
                    if (inputModel.mask !== null) {
                        if (!(inputModel.mask instanceof Function)) {
                            inputModel.mask = maskFromString(inputModel.mask);
                        }
                    }
                    formModel.push(new DynamicInputModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                    formModel.push(new DynamicRadioGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_RATING:
                    formModel.push(new DynamicRatingModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                    formModel.push(new DynamicSelectModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                    formModel.push(new DynamicSliderModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                    formModel.push(new DynamicSwitchModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                    formModel.push(new DynamicTextAreaModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                    formModel.push(new DynamicTimePickerModel(model, layout));
                    break;
                default:
                    throw new Error("unknown form control model type defined on JSON object with id \"" + model.id + "\"");
            }
        });
        return formModel;
    };
    DynamicFormService.ctorParameters = function () { return [
        { type: DynamicFormComponentService },
        { type: DynamicFormValidationService }
    ]; };
    DynamicFormService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(i0.ɵɵinject(i1.DynamicFormComponentService), i0.ɵɵinject(i2.DynamicFormValidationService)); }, token: DynamicFormService, providedIn: "root" });
    DynamicFormService = __decorate([ __metadata("design:paramtypes", [DynamicFormComponentService,
            DynamicFormValidationService])
    ], DynamicFormService);
DynamicFormService.ɵfac = function DynamicFormService_Factory(t) { return new (t || DynamicFormService)(ɵngcc0.ɵɵinject(DynamicFormComponentService), ɵngcc0.ɵɵinject(DynamicFormValidationService)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: DynamicFormComponentService }, { type: DynamicFormValidationService }]; }, null); })();
    return DynamicFormService;
}());
export { DynamicFormService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBbUIsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlwRixPQUFPLEVBQ0gscUJBQXFCLEVBQ3JCLCtCQUErQixFQUMvQiwwQkFBMEIsRUFDN0IsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0SCxPQUFPLEVBQ0gsd0NBQXdDLEVBQ3hDLHlCQUF5QixFQUM1QixNQUFNLGdEQUFnRCxDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BILE9BQU8sRUFDSCxxQ0FBcUMsRUFDckMsdUJBQXVCLEVBQzFCLE1BQU0sZ0RBQWdELENBQUM7QUFDeEQsT0FBTyxFQUNILG9DQUFvQyxFQUNwQyxzQkFBc0IsRUFDekIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RyxPQUFPLEVBQ0gscUNBQXFDLEVBQ3JDLHNCQUFzQixFQUN6QixNQUFNLGdEQUFnRCxDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFDSCxxQ0FBcUMsRUFDckMsc0JBQXNCLEVBQ3pCLE1BQU0sMENBQTBDLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENB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O09BSDFELGtCQUFrQixDQWdYOUI7Ozs7Ozs7NkhBQ0Q7NkJBeGFBO0NBdWFDLEFBaFhELElBZ1hDO1NBaFhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS12YWx1ZS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIER5bmFtaWNGb3JtQXJyYXlNb2RlbCxcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZLFxuICAgIER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC9mb3JtLWFycmF5L2R5bmFtaWMtZm9ybS1hcnJheS5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9HUk9VUCwgRHluYW1pY0Zvcm1Hcm91cE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2Zvcm0tZ3JvdXAvZHluYW1pYy1mb3JtLWdyb3VwLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ0hFQ0tCT1hfR1JPVVAsXG4gICAgRHluYW1pY0NoZWNrYm94R3JvdXBNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvY2hlY2tib3gvZHluYW1pYy1jaGVja2JveC1ncm91cC5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWCwgRHluYW1pY0NoZWNrYm94TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvY2hlY2tib3gvZHluYW1pYy1jaGVja2JveC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NPTE9SUElDS0VSLFxuICAgIER5bmFtaWNDb2xvclBpY2tlck1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC9jb2xvcnBpY2tlci9keW5hbWljLWNvbG9ycGlja2VyLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfREFURVBJQ0tFUixcbiAgICBEeW5hbWljRGF0ZVBpY2tlck1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC9kYXRlcGlja2VyL2R5bmFtaWMtZGF0ZXBpY2tlci5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9FRElUT1IsIER5bmFtaWNFZGl0b3JNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9lZGl0b3IvZHluYW1pYy1lZGl0b3IubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9GSUxFX1VQTE9BRCxcbiAgICBEeW5hbWljRmlsZVVwbG9hZE1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC9maWxlLXVwbG9hZC9keW5hbWljLWZpbGUtdXBsb2FkLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0lOUFVULCBEeW5hbWljSW5wdXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9pbnB1dC9keW5hbWljLWlucHV0Lm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfUkFESU9fR1JPVVAsXG4gICAgRHluYW1pY1JhZGlvR3JvdXBNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvcmFkaW8vZHluYW1pYy1yYWRpby1ncm91cC5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9SQVRJTkcsIER5bmFtaWNSYXRpbmdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9yYXRpbmcvZHluYW1pYy1yYXRpbmcubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU0VMRUNULCBEeW5hbWljU2VsZWN0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvc2VsZWN0L2R5bmFtaWMtc2VsZWN0Lm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NMSURFUiwgRHluYW1pY1NsaWRlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3NsaWRlci9keW5hbWljLXNsaWRlci5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TV0lUQ0gsIER5bmFtaWNTd2l0Y2hNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9zd2l0Y2gvZHluYW1pYy1zd2l0Y2gubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVEVYVEFSRUEsIER5bmFtaWNUZXh0QXJlYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3RleHRhcmVhL2R5bmFtaWMtdGV4dGFyZWEubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9USU1FUElDS0VSLFxuICAgIER5bmFtaWNUaW1lUGlja2VyTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL3RpbWVwaWNrZXIvZHluYW1pYy10aW1lcGlja2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Nb2RlbCwgRHluYW1pY1VuaW9uRm9ybU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY1BhdGhhYmxlIH0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtcGF0aC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Ib29rLCBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB9IGZyb20gXCIuLi9tb2RlbC9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLXZhbGlkYXRpb24ubW9kZWxcIjtcbmltcG9ydCB7IG1hc2tGcm9tU3RyaW5nLCBwYXJzZVJldml2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvanNvbi51dGlsc1wiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50L2R5bmFtaWMtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS1jb21wb25lbnQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50U2VydmljZTogRHluYW1pY0Zvcm1Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUFic3RyYWN0Q29udHJvbE9wdGlvbnModmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfCBudWxsID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzQ29uZmlnOiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB8IG51bGwgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVPbjogRHluYW1pY0Zvcm1Ib29rIHwgbnVsbCA9IG51bGwpOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBhc3luY1ZhbGlkYXRvcnNDb25maWcgIT09IG51bGwgPyB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldEFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnNDb25maWcpIDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IHZhbGlkYXRvcnNDb25maWcgIT09IG51bGwgPyB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldFZhbGlkYXRvcnModmFsaWRhdG9yc0NvbmZpZykgOiBudWxsLFxuICAgICAgICAgICAgdXBkYXRlT246IHVwZGF0ZU9uICE9PSBudWxsICYmIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtSG9vayh1cGRhdGVPbikgPyB1cGRhdGVPbiA6IER5bmFtaWNGb3JtSG9vay5DaGFuZ2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtQXJyYXkoZm9ybUFycmF5TW9kZWw6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCk6IEZvcm1BcnJheSB7XG5cbiAgICAgICAgY29uc3QgY29udHJvbHM6IEFic3RyYWN0Q29udHJvbFtdID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZUFic3RyYWN0Q29udHJvbE9wdGlvbnMoZm9ybUFycmF5TW9kZWwudmFsaWRhdG9ycywgZm9ybUFycmF5TW9kZWwuYXN5bmNWYWxpZGF0b3JzLFxuICAgICAgICAgICAgZm9ybUFycmF5TW9kZWwudXBkYXRlT24pO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3JtQXJyYXlNb2RlbC5zaXplOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTW9kZWwgPSBmb3JtQXJyYXlNb2RlbC5nZXQoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25zID0gdGhpcy5jcmVhdGVBYnN0cmFjdENvbnRyb2xPcHRpb25zKGZvcm1BcnJheU1vZGVsLmdyb3VwVmFsaWRhdG9ycyxcbiAgICAgICAgICAgICAgICBmb3JtQXJyYXlNb2RlbC5ncm91cEFzeW5jVmFsaWRhdG9ycywgZm9ybUFycmF5TW9kZWwudXBkYXRlT24pO1xuXG4gICAgICAgICAgICBjb250cm9scy5wdXNoKHRoaXMuY3JlYXRlRm9ybUdyb3VwKGdyb3VwTW9kZWwuZ3JvdXAsIGdyb3VwT3B0aW9ucywgZ3JvdXBNb2RlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm1Hcm91cChmb3JtTW9kZWw6IER5bmFtaWNGb3JtTW9kZWwsIG9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBEeW5hbWljUGF0aGFibGUgfCBudWxsID0gbnVsbCk6IEZvcm1Hcm91cCB7XG5cbiAgICAgICAgY29uc3QgY29udHJvbHM6IHsgW2NvbnRyb2xJZDogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sOyB9ID0ge307XG5cbiAgICAgICAgZm9ybU1vZGVsLmZvckVhY2gobW9kZWwgPT4ge1xuXG4gICAgICAgICAgICBtb2RlbC5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgICAgIHN3aXRjaCAobW9kZWwudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZOlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzW21vZGVsLmlkXSA9IHRoaXMuY3JlYXRlRm9ybUFycmF5KG1vZGVsIGFzIER5bmFtaWNGb3JtQXJyYXlNb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0dST1VQOlxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWF9HUk9VUDpcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1vZGVsID0gbW9kZWwgYXMgRHluYW1pY0Zvcm1Hcm91cE1vZGVsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE9wdGlvbnMgPSB0aGlzLmNyZWF0ZUFic3RyYWN0Q29udHJvbE9wdGlvbnMoZ3JvdXBNb2RlbC52YWxpZGF0b3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBNb2RlbC5hc3luY1ZhbGlkYXRvcnMsIGdyb3VwTW9kZWwudXBkYXRlT24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzW21vZGVsLmlkXSA9IHRoaXMuY3JlYXRlRm9ybUdyb3VwKGdyb3VwTW9kZWwuZ3JvdXAsIGdyb3VwT3B0aW9ucywgZ3JvdXBNb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sTW9kZWwgPSBtb2RlbCBhcyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsPGFueT47XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xTdGF0ZSA9IHt2YWx1ZTogY29udHJvbE1vZGVsLnZhbHVlLCBkaXNhYmxlZDogY29udHJvbE1vZGVsLmRpc2FibGVkfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbE9wdGlvbnMgPSB0aGlzLmNyZWF0ZUFic3RyYWN0Q29udHJvbE9wdGlvbnMoY29udHJvbE1vZGVsLnZhbGlkYXRvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sTW9kZWwuYXN5bmNWYWxpZGF0b3JzLCBjb250cm9sTW9kZWwudXBkYXRlT24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzW21vZGVsLmlkXSA9IG5ldyBGb3JtQ29udHJvbChjb250cm9sU3RhdGUsIGNvbnRyb2xPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoY29udHJvbHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGdldFBhdGhTZWdtZW50KG1vZGVsOiBEeW5hbWljUGF0aGFibGUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCA/IG1vZGVsLmluZGV4LnRvU3RyaW5nKCkgOiAobW9kZWwgYXMgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpLmlkO1xuICAgIH1cblxuICAgIGdldFBhdGgobW9kZWw6IER5bmFtaWNQYXRoYWJsZSwgam9pbjogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nW10gfCBzdHJpbmcge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBbdGhpcy5nZXRQYXRoU2VnbWVudChtb2RlbCldO1xuICAgICAgICBsZXQgcGFyZW50ID0gbW9kZWwucGFyZW50O1xuXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcblxuICAgICAgICAgICAgcGF0aC51bnNoaWZ0KHRoaXMuZ2V0UGF0aFNlZ21lbnQocGFyZW50KSk7XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpvaW4gPyBwYXRoLmpvaW4oXCIuXCIpIDogcGF0aDtcbiAgICB9XG5cbiAgICBhZGRGb3JtR3JvdXBDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtTW9kZWw6IER5bmFtaWNVbmlvbkZvcm1Nb2RlbCwgLi4ubW9kZWxzOiBEeW5hbWljRm9ybU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGZvcm1Nb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtR3JvdXBNb2RlbCkge1xuXG4gICAgICAgICAgICB0aGlzLmluc2VydEZvcm1Hcm91cENvbnRyb2woZm9ybU1vZGVsLnNpemUoKSwgZm9ybUdyb3VwLCBmb3JtTW9kZWwsIC4uLm1vZGVscyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBmb3JtTW9kZWwgYXMgRHluYW1pY0Zvcm1Nb2RlbDtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0Rm9ybUdyb3VwQ29udHJvbChtb2RlbC5sZW5ndGgsIGZvcm1Hcm91cCwgbW9kZWwsIC4uLm1vZGVscyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlRm9ybUdyb3VwQ29udHJvbChpbmRleDogbnVtYmVyLCBzdGVwOiBudW1iZXIsIGZvcm1Nb2RlbDogRHluYW1pY1VuaW9uRm9ybU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGZvcm1Nb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtR3JvdXBNb2RlbCkge1xuXG4gICAgICAgICAgICBmb3JtTW9kZWwubW92ZShpbmRleCwgc3RlcCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBmb3JtTW9kZWwgYXMgRHluYW1pY0Zvcm1Nb2RlbDtcbiAgICAgICAgICAgIG1vZGVsLnNwbGljZShpbmRleCArIHN0ZXAsIDAsIC4uLm1vZGVsLnNwbGljZShpbmRleCwgMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0Rm9ybUdyb3VwQ29udHJvbChpbmRleDogbnVtYmVyLCBmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybU1vZGVsOiBEeW5hbWljVW5pb25Gb3JtTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5tb2RlbHM6IER5bmFtaWNGb3JtTW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSBmb3JtTW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUdyb3VwTW9kZWwgPyBmb3JtTW9kZWwgOiBudWxsO1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuY3JlYXRlRm9ybUdyb3VwKG1vZGVscywgbnVsbCwgcGFyZW50KS5jb250cm9scztcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250cm9scykuZm9yRWFjaCgoY29udHJvbE5hbWUsIGlkeCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjb250cm9sTW9kZWwgPSBtb2RlbHNbaWR4XTtcblxuICAgICAgICAgICAgaWYgKGZvcm1Nb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtR3JvdXBNb2RlbCkge1xuICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5pbnNlcnQoaW5kZXgsIGNvbnRyb2xNb2RlbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKGZvcm1Nb2RlbCBhcyBEeW5hbWljRm9ybU1vZGVsKS5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2xNb2RlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1Hcm91cC5hZGRDb250cm9sKGNvbnRyb2xOYW1lLCBjb250cm9sc1tjb250cm9sTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVGb3JtR3JvdXBDb250cm9sKGluZGV4OiBudW1iZXIsIGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtTW9kZWw6IER5bmFtaWNVbmlvbkZvcm1Nb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChmb3JtTW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZm9ybU1vZGVsLmdldChpbmRleCkuaWQpO1xuICAgICAgICAgICAgZm9ybU1vZGVsLnJlbW92ZShpbmRleCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZm9ybU1vZGVsW2luZGV4XS5pZCk7XG4gICAgICAgICAgICAoZm9ybU1vZGVsIGFzIER5bmFtaWNGb3JtTW9kZWwpLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRGb3JtQXJyYXlHcm91cChmb3JtQXJyYXk6IEZvcm1BcnJheSwgZm9ybUFycmF5TW9kZWw6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGdyb3VwTW9kZWwgPSBmb3JtQXJyYXlNb2RlbC5hZGRHcm91cCgpO1xuXG4gICAgICAgIGZvcm1BcnJheS5wdXNoKHRoaXMuY3JlYXRlRm9ybUdyb3VwKGdyb3VwTW9kZWwuZ3JvdXAsIG51bGwsIGdyb3VwTW9kZWwpKTtcbiAgICB9XG5cbiAgICBpbnNlcnRGb3JtQXJyYXlHcm91cChpbmRleDogbnVtYmVyLCBmb3JtQXJyYXk6IEZvcm1BcnJheSwgZm9ybUFycmF5TW9kZWw6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGdyb3VwTW9kZWwgPSBmb3JtQXJyYXlNb2RlbC5pbnNlcnRHcm91cChpbmRleCk7XG5cbiAgICAgICAgZm9ybUFycmF5Lmluc2VydChpbmRleCwgdGhpcy5jcmVhdGVGb3JtR3JvdXAoZ3JvdXBNb2RlbC5ncm91cCwgbnVsbCwgZ3JvdXBNb2RlbCkpO1xuICAgIH1cblxuICAgIG1vdmVGb3JtQXJyYXlHcm91cChpbmRleDogbnVtYmVyLCBzdGVwOiBudW1iZXIsIGZvcm1BcnJheTogRm9ybUFycmF5LCBmb3JtQXJyYXlNb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpbmRleCArIHN0ZXA7XG4gICAgICAgIGNvbnN0IG1vdmVVcCA9IHN0ZXAgPj0gMDtcblxuICAgICAgICBpZiAoKGluZGV4ID49IDAgJiYgaW5kZXggPCBmb3JtQXJyYXlNb2RlbC5zaXplKSAmJiAobmV3SW5kZXggPj0gMCAmJiBuZXdJbmRleCA8IGZvcm1BcnJheU1vZGVsLnNpemUpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vdmluZ0dyb3VwczogQWJzdHJhY3RDb250cm9sW10gPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG1vdmVVcCA/IGluZGV4IDogbmV3SW5kZXg7IGkgPD0gKG1vdmVVcCA/IG5ld0luZGV4IDogaW5kZXgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtb3ZpbmdHcm91cHMucHVzaChmb3JtQXJyYXkuYXQoaSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3ZpbmdHcm91cHMuZm9yRWFjaCgoZm9ybUNvbnRyb2wsIGlkeCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVVcCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGlkeCA9PT0gMCA/IG5ld0luZGV4IDogaW5kZXggKyBpZHggLSAxO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBpZHggPT09IG1vdmluZ0dyb3Vwcy5sZW5ndGggLSAxID8gbmV3SW5kZXggOiBuZXdJbmRleCArIGlkeCArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybUFycmF5LnNldENvbnRyb2wocG9zaXRpb24sIGZvcm1Db250cm9sKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3JtQXJyYXlNb2RlbC5tb3ZlR3JvdXAoaW5kZXgsIHN0ZXApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZvcm0gYXJyYXkgZ3JvdXAgY2Fubm90IGJlIG1vdmVkIGR1ZSB0byBpbmRleCBvciBuZXcgaW5kZXggYmVpbmcgb3V0IG9mIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRm9ybUFycmF5R3JvdXAoaW5kZXg6IG51bWJlciwgZm9ybUFycmF5OiBGb3JtQXJyYXksIGZvcm1BcnJheU1vZGVsOiBEeW5hbWljRm9ybUFycmF5TW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBmb3JtQXJyYXkucmVtb3ZlQXQoaW5kZXgpO1xuICAgICAgICBmb3JtQXJyYXlNb2RlbC5yZW1vdmVHcm91cChpbmRleCk7XG4gICAgfVxuXG4gICAgY2xlYXJGb3JtQXJyYXkoZm9ybUFycmF5OiBGb3JtQXJyYXksIGZvcm1BcnJheU1vZGVsOiBEeW5hbWljRm9ybUFycmF5TW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBmb3JtQXJyYXkuY2xlYXIoKTtcbiAgICAgICAgZm9ybUFycmF5TW9kZWwuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBmaW5kQnlJZChpZDogc3RyaW5nLCBmb3JtTW9kZWw6IER5bmFtaWNGb3JtTW9kZWwpOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB8IG51bGwge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IGZpbmRCeUlkRm4gPSAobW9kZWxJZDogc3RyaW5nLCBncm91cE1vZGVsOiBEeW5hbWljRm9ybU1vZGVsKTogdm9pZCA9PiB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY29udHJvbE1vZGVsIG9mIGdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sTW9kZWwuaWQgPT09IG1vZGVsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udHJvbE1vZGVsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbE1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRCeUlkRm4obW9kZWxJZCwgKGNvbnRyb2xNb2RlbCBhcyBEeW5hbWljRm9ybUdyb3VwTW9kZWwpLmdyb3VwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmluZEJ5SWRGbihpZCwgZm9ybU1vZGVsKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZpbmRNb2RlbEJ5SWQ8VCBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsPihpZDogc3RyaW5nLCBmb3JtTW9kZWw6IER5bmFtaWNGb3JtTW9kZWwpOiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRCeUlkKGlkLCBmb3JtTW9kZWwpIGFzIFQ7XG4gICAgfVxuXG4gICAgZmluZENvbnRyb2xCeU1vZGVsPFQgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2w+KG1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgZ3JvdXA6IEZvcm1Hcm91cCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJvb3QuZ2V0KHRoaXMuZ2V0UGF0aChtb2RlbCwgdHJ1ZSkpIGFzIFQ7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcyhmb3JtQ29tcG9uZW50PzogRHluYW1pY0Zvcm1Db21wb25lbnQpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZm9ybUNvbXBvbmVudCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtQ29tcG9uZW50KSB7XG5cbiAgICAgICAgICAgIGZvcm1Db21wb25lbnQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICBmb3JtQ29tcG9uZW50LmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZvcm0gb2YgdGhpcy5jb21wb25lbnRTZXJ2aWNlLmdldEZvcm1zKCkpIHtcbiAgICAgICAgICAgICAgICBmb3JtLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIGZvcm0uZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJvbUpTT04oanNvbjogc3RyaW5nIHwgb2JqZWN0W10pOiBEeW5hbWljRm9ybU1vZGVsIHwgbmV2ZXIge1xuXG4gICAgICAgIGNvbnN0IGZvcm1Nb2RlbEpTT04gPSBpc1N0cmluZyhqc29uKSA/IEpTT04ucGFyc2UoanNvbiwgcGFyc2VSZXZpdmVyKSA6IGpzb247XG4gICAgICAgIGNvbnN0IGZvcm1Nb2RlbDogRHluYW1pY0Zvcm1Nb2RlbCA9IFtdO1xuXG4gICAgICAgIGZvcm1Nb2RlbEpTT04uZm9yRWFjaCgobW9kZWw6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBsYXlvdXQgPSBtb2RlbC5sYXlvdXQgPz8gbnVsbDtcblxuICAgICAgICAgICAgc3dpdGNoIChtb2RlbC50eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQVJSQVk6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1BcnJheU1vZGVsID0gbW9kZWwgYXMgRHluYW1pY0Zvcm1BcnJheU1vZGVsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1BcnJheU1vZGVsLmdyb3VwcykpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUFycmF5TW9kZWwuZ3JvdXBzLmZvckVhY2goKGdyb3VwTW9kZWw6IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBNb2RlbC5ncm91cCA9IHRoaXMuZnJvbUpTT04oZ3JvdXBNb2RlbC5ncm91cCkgYXMgRHluYW1pY0Zvcm1Nb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybUFycmF5TW9kZWwuZ3JvdXBGYWN0b3J5ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbUpTT04oZm9ybUFycmF5TW9kZWwuZ3JvdXBQcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljRm9ybUFycmF5TW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWDpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNDaGVja2JveE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ0hFQ0tCT1hfR1JPVVA6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmdyb3VwID0gdGhpcy5mcm9tSlNPTihtb2RlbC5ncm91cCkgYXMgRHluYW1pY0NoZWNrYm94TW9kZWxbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNDaGVja2JveEdyb3VwTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DT0xPUlBJQ0tFUjpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNDb2xvclBpY2tlck1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfREFURVBJQ0tFUjpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNEYXRlUGlja2VyTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9FRElUT1I6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljRWRpdG9yTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9GSUxFX1VQTE9BRDpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0ZpbGVVcGxvYWRNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0dST1VQOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5ncm91cCA9IHRoaXMuZnJvbUpTT04obW9kZWwuZ3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfSU5QVVQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0TW9kZWwgPSBtb2RlbCBhcyBEeW5hbWljSW5wdXRNb2RlbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRNb2RlbC5tYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpbnB1dE1vZGVsLm1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGVsLm1hc2sgPSBtYXNrRnJvbVN0cmluZyhpbnB1dE1vZGVsLm1hc2sgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljSW5wdXRNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1JBRElPX0dST1VQOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1JhZGlvR3JvdXBNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1JBVElORzpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNSYXRpbmdNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NFTEVDVDpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNTZWxlY3RNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NMSURFUjpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNTbGlkZXJNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NXSVRDSDpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNTd2l0Y2hNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1RFWFRBUkVBOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1RleHRBcmVhTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9USU1FUElDS0VSOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1RpbWVQaWNrZXJNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGZvcm0gY29udHJvbCBtb2RlbCB0eXBlIGRlZmluZWQgb24gSlNPTiBvYmplY3Qgd2l0aCBpZCBcIiR7bW9kZWwuaWR9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbDtcbiAgICB9XG59XG4iXX0=