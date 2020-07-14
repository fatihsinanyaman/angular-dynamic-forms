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
    DynamicFormService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [DynamicFormComponentService,
            DynamicFormValidationService])
    ], DynamicFormService);
    return DynamicFormService;
}());
export { DynamicFormService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZHluYW1pYy1mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFtQixTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXBGLE9BQU8sRUFDSCxxQkFBcUIsRUFDckIsK0JBQStCLEVBQy9CLDBCQUEwQixFQUM3QixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RILE9BQU8sRUFDSCx3Q0FBd0MsRUFDeEMseUJBQXlCLEVBQzVCLE1BQU0sZ0RBQWdELENBQUM7QUFDeEQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEgsT0FBTyxFQUNILHFDQUFxQyxFQUNyQyx1QkFBdUIsRUFDMUIsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RCxPQUFPLEVBQ0gsb0NBQW9DLEVBQ3BDLHNCQUFzQixFQUN6QixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVHLE9BQU8sRUFDSCxxQ0FBcUMsRUFDckMsc0JBQXNCLEVBQ3pCLE1BQU0sZ0RBQWdELENBQUM7QUFDeEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEcsT0FBTyxFQUNILHFDQUFxQyxFQUNyQyxzQkFBc0IsRUFDekIsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsa0JBQWtCLEVB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QUE0QjtPQUgxRCxrQkFBa0IsQ0FnWDlCOzZCQXZhRDtDQXVhQyxBQWhYRCxJQWdYQztTQWhYWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0tdmFsdWUtY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEeW5hbWljRm9ybUFycmF5TW9kZWwsXG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9BUlJBWSxcbiAgICBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvZm9ybS1hcnJheS9keW5hbWljLWZvcm0tYXJyYXkubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfR1JPVVAsIER5bmFtaWNGb3JtR3JvdXBNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9mb3JtLWdyb3VwL2R5bmFtaWMtZm9ybS1ncm91cC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YX0dST1VQLFxuICAgIER5bmFtaWNDaGVja2JveEdyb3VwTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2NoZWNrYm94L2R5bmFtaWMtY2hlY2tib3gtZ3JvdXAubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ0hFQ0tCT1gsIER5bmFtaWNDaGVja2JveE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2NoZWNrYm94L2R5bmFtaWMtY2hlY2tib3gubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DT0xPUlBJQ0tFUixcbiAgICBEeW5hbWljQ29sb3JQaWNrZXJNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvY29sb3JwaWNrZXIvZHluYW1pYy1jb2xvcnBpY2tlci5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0RBVEVQSUNLRVIsXG4gICAgRHluYW1pY0RhdGVQaWNrZXJNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvZGF0ZXBpY2tlci9keW5hbWljLWRhdGVwaWNrZXIubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRURJVE9SLCBEeW5hbWljRWRpdG9yTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZWRpdG9yL2R5bmFtaWMtZWRpdG9yLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRklMRV9VUExPQUQsXG4gICAgRHluYW1pY0ZpbGVVcGxvYWRNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvZmlsZS11cGxvYWQvZHluYW1pYy1maWxlLXVwbG9hZC5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9JTlBVVCwgRHluYW1pY0lucHV0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvaW5wdXQvZHluYW1pYy1pbnB1dC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1JBRElPX0dST1VQLFxuICAgIER5bmFtaWNSYWRpb0dyb3VwTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL3JhZGlvL2R5bmFtaWMtcmFkaW8tZ3JvdXAubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfUkFUSU5HLCBEeW5hbWljUmF0aW5nTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvcmF0aW5nL2R5bmFtaWMtcmF0aW5nLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NFTEVDVCwgRHluYW1pY1NlbGVjdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3NlbGVjdC9keW5hbWljLXNlbGVjdC5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TTElERVIsIER5bmFtaWNTbGlkZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9zbGlkZXIvZHluYW1pYy1zbGlkZXIubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU1dJVENILCBEeW5hbWljU3dpdGNoTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvc3dpdGNoL2R5bmFtaWMtc3dpdGNoLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1RFWFRBUkVBLCBEeW5hbWljVGV4dEFyZWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC90ZXh0YXJlYS9keW5hbWljLXRleHRhcmVhLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVElNRVBJQ0tFUixcbiAgICBEeW5hbWljVGltZVBpY2tlck1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC90aW1lcGlja2VyL2R5bmFtaWMtdGltZXBpY2tlci5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1WYWxpZGF0aW9uU2VydmljZSB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS12YWxpZGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtTW9kZWwsIER5bmFtaWNVbmlvbkZvcm1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0ubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNQYXRoYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLXBhdGgubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtSG9vaywgRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfSBmcm9tIFwiLi4vbW9kZWwvbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC12YWxpZGF0aW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBtYXNrRnJvbVN0cmluZywgcGFyc2VSZXZpdmVyIH0gZnJvbSBcIi4uL3V0aWxzL2pzb24udXRpbHNcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudC9keW5hbWljLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tY29tcG9uZW50LnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFNlcnZpY2U6IER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBYnN0cmFjdENvbnRyb2xPcHRpb25zKHZhbGlkYXRvcnNDb25maWc6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yc0NvbmZpZzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfCBudWxsID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlT246IER5bmFtaWNGb3JtSG9vayB8IG51bGwgPSBudWxsKTogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogYXN5bmNWYWxpZGF0b3JzQ29uZmlnICE9PSBudWxsID8gdGhpcy52YWxpZGF0aW9uU2VydmljZS5nZXRBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzQ29uZmlnKSA6IG51bGwsXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiB2YWxpZGF0b3JzQ29uZmlnICE9PSBudWxsID8gdGhpcy52YWxpZGF0aW9uU2VydmljZS5nZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnNDb25maWcpIDogbnVsbCxcbiAgICAgICAgICAgIHVwZGF0ZU9uOiB1cGRhdGVPbiAhPT0gbnVsbCAmJiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUhvb2sodXBkYXRlT24pID8gdXBkYXRlT24gOiBEeW5hbWljRm9ybUhvb2suQ2hhbmdlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybUFycmF5KGZvcm1BcnJheU1vZGVsOiBEeW5hbWljRm9ybUFycmF5TW9kZWwpOiBGb3JtQXJyYXkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXSA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jcmVhdGVBYnN0cmFjdENvbnRyb2xPcHRpb25zKGZvcm1BcnJheU1vZGVsLnZhbGlkYXRvcnMsIGZvcm1BcnJheU1vZGVsLmFzeW5jVmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGZvcm1BcnJheU1vZGVsLnVwZGF0ZU9uKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybUFycmF5TW9kZWwuc2l6ZTsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBjb25zdCBncm91cE1vZGVsID0gZm9ybUFycmF5TW9kZWwuZ2V0KGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9ucyA9IHRoaXMuY3JlYXRlQWJzdHJhY3RDb250cm9sT3B0aW9ucyhmb3JtQXJyYXlNb2RlbC5ncm91cFZhbGlkYXRvcnMsXG4gICAgICAgICAgICAgICAgZm9ybUFycmF5TW9kZWwuZ3JvdXBBc3luY1ZhbGlkYXRvcnMsIGZvcm1BcnJheU1vZGVsLnVwZGF0ZU9uKTtcblxuICAgICAgICAgICAgY29udHJvbHMucHVzaCh0aGlzLmNyZWF0ZUZvcm1Hcm91cChncm91cE1vZGVsLmdyb3VwLCBncm91cE9wdGlvbnMsIGdyb3VwTW9kZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGNvbnRyb2xzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtR3JvdXAoZm9ybU1vZGVsOiBEeW5hbWljRm9ybU1vZGVsLCBvcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogRHluYW1pY1BhdGhhYmxlIHwgbnVsbCA9IG51bGwpOiBGb3JtR3JvdXAge1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzOiB7IFtjb250cm9sSWQ6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbDsgfSA9IHt9O1xuXG4gICAgICAgIGZvcm1Nb2RlbC5mb3JFYWNoKG1vZGVsID0+IHtcblxuICAgICAgICAgICAgbW9kZWwucGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLnR5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9BUlJBWTpcblxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc1ttb2RlbC5pZF0gPSB0aGlzLmNyZWF0ZUZvcm1BcnJheShtb2RlbCBhcyBEeW5hbWljRm9ybUFycmF5TW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9HUk9VUDpcbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ0hFQ0tCT1hfR1JPVVA6XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNb2RlbCA9IG1vZGVsIGFzIER5bmFtaWNGb3JtR3JvdXBNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25zID0gdGhpcy5jcmVhdGVBYnN0cmFjdENvbnRyb2xPcHRpb25zKGdyb3VwTW9kZWwudmFsaWRhdG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTW9kZWwuYXN5bmNWYWxpZGF0b3JzLCBncm91cE1vZGVsLnVwZGF0ZU9uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc1ttb2RlbC5pZF0gPSB0aGlzLmNyZWF0ZUZvcm1Hcm91cChncm91cE1vZGVsLmdyb3VwLCBncm91cE9wdGlvbnMsIGdyb3VwTW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbE1vZGVsID0gbW9kZWwgYXMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxhbnk+O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sU3RhdGUgPSB7dmFsdWU6IGNvbnRyb2xNb2RlbC52YWx1ZSwgZGlzYWJsZWQ6IGNvbnRyb2xNb2RlbC5kaXNhYmxlZH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xPcHRpb25zID0gdGhpcy5jcmVhdGVBYnN0cmFjdENvbnRyb2xPcHRpb25zKGNvbnRyb2xNb2RlbC52YWxpZGF0b3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbE1vZGVsLmFzeW5jVmFsaWRhdG9ycywgY29udHJvbE1vZGVsLnVwZGF0ZU9uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc1ttb2RlbC5pZF0gPSBuZXcgRm9ybUNvbnRyb2woY29udHJvbFN0YXRlLCBjb250cm9sT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXRQYXRoU2VnbWVudChtb2RlbDogRHluYW1pY1BhdGhhYmxlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwgPyBtb2RlbC5pbmRleC50b1N0cmluZygpIDogKG1vZGVsIGFzIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsKS5pZDtcbiAgICB9XG5cbiAgICBnZXRQYXRoKG1vZGVsOiBEeW5hbWljUGF0aGFibGUsIGpvaW46IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZ1tdIHwgc3RyaW5nIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gW3RoaXMuZ2V0UGF0aFNlZ21lbnQobW9kZWwpXTtcbiAgICAgICAgbGV0IHBhcmVudCA9IG1vZGVsLnBhcmVudDtcblxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG5cbiAgICAgICAgICAgIHBhdGgudW5zaGlmdCh0aGlzLmdldFBhdGhTZWdtZW50KHBhcmVudCkpO1xuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqb2luID8gcGF0aC5qb2luKFwiLlwiKSA6IHBhdGg7XG4gICAgfVxuXG4gICAgYWRkRm9ybUdyb3VwQ29udHJvbChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybU1vZGVsOiBEeW5hbWljVW5pb25Gb3JtTW9kZWwsIC4uLm1vZGVsczogRHluYW1pY0Zvcm1Nb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChmb3JtTW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgdGhpcy5pbnNlcnRGb3JtR3JvdXBDb250cm9sKGZvcm1Nb2RlbC5zaXplKCksIGZvcm1Hcm91cCwgZm9ybU1vZGVsLCAuLi5tb2RlbHMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gZm9ybU1vZGVsIGFzIER5bmFtaWNGb3JtTW9kZWw7XG4gICAgICAgICAgICB0aGlzLmluc2VydEZvcm1Hcm91cENvbnRyb2wobW9kZWwubGVuZ3RoLCBmb3JtR3JvdXAsIG1vZGVsLCAuLi5tb2RlbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUZvcm1Hcm91cENvbnRyb2woaW5kZXg6IG51bWJlciwgc3RlcDogbnVtYmVyLCBmb3JtTW9kZWw6IER5bmFtaWNVbmlvbkZvcm1Nb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChmb3JtTW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgZm9ybU1vZGVsLm1vdmUoaW5kZXgsIHN0ZXApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gZm9ybU1vZGVsIGFzIER5bmFtaWNGb3JtTW9kZWw7XG4gICAgICAgICAgICBtb2RlbC5zcGxpY2UoaW5kZXggKyBzdGVwLCAwLCAuLi5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc2VydEZvcm1Hcm91cENvbnRyb2woaW5kZXg6IG51bWJlciwgZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1Nb2RlbDogRHluYW1pY1VuaW9uRm9ybU1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubW9kZWxzOiBEeW5hbWljRm9ybU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZm9ybU1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cE1vZGVsID8gZm9ybU1vZGVsIDogbnVsbDtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLmNyZWF0ZUZvcm1Hcm91cChtb2RlbHMsIG51bGwsIHBhcmVudCkuY29udHJvbHM7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goKGNvbnRyb2xOYW1lLCBpZHgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbE1vZGVsID0gbW9kZWxzW2lkeF07XG5cbiAgICAgICAgICAgIGlmIChmb3JtTW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUdyb3VwTW9kZWwpIHtcbiAgICAgICAgICAgICAgICBmb3JtTW9kZWwuaW5zZXJ0KGluZGV4LCBjb250cm9sTW9kZWwpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChmb3JtTW9kZWwgYXMgRHluYW1pY0Zvcm1Nb2RlbCkuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sTW9kZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChjb250cm9sTmFtZSwgY29udHJvbHNbY29udHJvbE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRm9ybUdyb3VwQ29udHJvbChpbmRleDogbnVtYmVyLCBmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybU1vZGVsOiBEeW5hbWljVW5pb25Gb3JtTW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZm9ybU1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKSB7XG5cbiAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZvcm1Nb2RlbC5nZXQoaW5kZXgpLmlkKTtcbiAgICAgICAgICAgIGZvcm1Nb2RlbC5yZW1vdmUoaW5kZXgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZvcm1Nb2RlbFtpbmRleF0uaWQpO1xuICAgICAgICAgICAgKGZvcm1Nb2RlbCBhcyBEeW5hbWljRm9ybU1vZGVsKS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRm9ybUFycmF5R3JvdXAoZm9ybUFycmF5OiBGb3JtQXJyYXksIGZvcm1BcnJheU1vZGVsOiBEeW5hbWljRm9ybUFycmF5TW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBncm91cE1vZGVsID0gZm9ybUFycmF5TW9kZWwuYWRkR3JvdXAoKTtcblxuICAgICAgICBmb3JtQXJyYXkucHVzaCh0aGlzLmNyZWF0ZUZvcm1Hcm91cChncm91cE1vZGVsLmdyb3VwLCBudWxsLCBncm91cE1vZGVsKSk7XG4gICAgfVxuXG4gICAgaW5zZXJ0Rm9ybUFycmF5R3JvdXAoaW5kZXg6IG51bWJlciwgZm9ybUFycmF5OiBGb3JtQXJyYXksIGZvcm1BcnJheU1vZGVsOiBEeW5hbWljRm9ybUFycmF5TW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBncm91cE1vZGVsID0gZm9ybUFycmF5TW9kZWwuaW5zZXJ0R3JvdXAoaW5kZXgpO1xuXG4gICAgICAgIGZvcm1BcnJheS5pbnNlcnQoaW5kZXgsIHRoaXMuY3JlYXRlRm9ybUdyb3VwKGdyb3VwTW9kZWwuZ3JvdXAsIG51bGwsIGdyb3VwTW9kZWwpKTtcbiAgICB9XG5cbiAgICBtb3ZlRm9ybUFycmF5R3JvdXAoaW5kZXg6IG51bWJlciwgc3RlcDogbnVtYmVyLCBmb3JtQXJyYXk6IEZvcm1BcnJheSwgZm9ybUFycmF5TW9kZWw6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggKyBzdGVwO1xuICAgICAgICBjb25zdCBtb3ZlVXAgPSBzdGVwID49IDA7XG5cbiAgICAgICAgaWYgKChpbmRleCA+PSAwICYmIGluZGV4IDwgZm9ybUFycmF5TW9kZWwuc2l6ZSkgJiYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPCBmb3JtQXJyYXlNb2RlbC5zaXplKSkge1xuXG4gICAgICAgICAgICBjb25zdCBtb3ZpbmdHcm91cHM6IEFic3RyYWN0Q29udHJvbFtdID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBtb3ZlVXAgPyBpbmRleCA6IG5ld0luZGV4OyBpIDw9IChtb3ZlVXAgPyBuZXdJbmRleCA6IGluZGV4KTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbW92aW5nR3JvdXBzLnB1c2goZm9ybUFycmF5LmF0KGkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92aW5nR3JvdXBzLmZvckVhY2goKGZvcm1Db250cm9sLCBpZHgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIGlmIChtb3ZlVXApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBpZHggPT09IDAgPyBuZXdJbmRleCA6IGluZGV4ICsgaWR4IC0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gaWR4ID09PSBtb3ZpbmdHcm91cHMubGVuZ3RoIC0gMSA/IG5ld0luZGV4IDogbmV3SW5kZXggKyBpZHggKyAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1BcnJheS5zZXRDb250cm9sKHBvc2l0aW9uLCBmb3JtQ29udHJvbCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9ybUFycmF5TW9kZWwubW92ZUdyb3VwKGluZGV4LCBzdGVwKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmb3JtIGFycmF5IGdyb3VwIGNhbm5vdCBiZSBtb3ZlZCBkdWUgdG8gaW5kZXggb3IgbmV3IGluZGV4IGJlaW5nIG91dCBvZiBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUZvcm1BcnJheUdyb3VwKGluZGV4OiBudW1iZXIsIGZvcm1BcnJheTogRm9ybUFycmF5LCBmb3JtQXJyYXlNb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgZm9ybUFycmF5LnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgZm9ybUFycmF5TW9kZWwucmVtb3ZlR3JvdXAoaW5kZXgpO1xuICAgIH1cblxuICAgIGNsZWFyRm9ybUFycmF5KGZvcm1BcnJheTogRm9ybUFycmF5LCBmb3JtQXJyYXlNb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgZm9ybUFycmF5LmNsZWFyKCk7XG4gICAgICAgIGZvcm1BcnJheU1vZGVsLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZmluZEJ5SWQoaWQ6IHN0cmluZywgZm9ybU1vZGVsOiBEeW5hbWljRm9ybU1vZGVsKTogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwgfCBudWxsIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCBmaW5kQnlJZEZuID0gKG1vZGVsSWQ6IHN0cmluZywgZ3JvdXBNb2RlbDogRHluYW1pY0Zvcm1Nb2RlbCk6IHZvaWQgPT4ge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2xNb2RlbCBvZiBncm91cE1vZGVsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbE1vZGVsLmlkID09PSBtb2RlbElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRyb2xNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xNb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtR3JvdXBNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5kQnlJZEZuKG1vZGVsSWQsIChjb250cm9sTW9kZWwgYXMgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKS5ncm91cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZpbmRCeUlkRm4oaWQsIGZvcm1Nb2RlbCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmaW5kTW9kZWxCeUlkPFQgZXh0ZW5kcyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbD4oaWQ6IHN0cmluZywgZm9ybU1vZGVsOiBEeW5hbWljRm9ybU1vZGVsKTogVCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kQnlJZChpZCwgZm9ybU1vZGVsKSBhcyBUO1xuICAgIH1cblxuICAgIGZpbmRDb250cm9sQnlNb2RlbDxUIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sPihtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGdyb3VwOiBGb3JtR3JvdXApOiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBncm91cC5yb290LmdldCh0aGlzLmdldFBhdGgobW9kZWwsIHRydWUpKSBhcyBUO1xuICAgIH1cblxuICAgIGRldGVjdENoYW5nZXMoZm9ybUNvbXBvbmVudD86IER5bmFtaWNGb3JtQ29tcG9uZW50KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGZvcm1Db21wb25lbnQgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUNvbXBvbmVudCkge1xuXG4gICAgICAgICAgICBmb3JtQ29tcG9uZW50Lm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgZm9ybUNvbXBvbmVudC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBmb3JtIG9mIHRoaXMuY29tcG9uZW50U2VydmljZS5nZXRGb3JtcygpKSB7XG4gICAgICAgICAgICAgICAgZm9ybS5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICBmb3JtLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyb21KU09OKGpzb246IHN0cmluZyB8IG9iamVjdFtdKTogRHluYW1pY0Zvcm1Nb2RlbCB8IG5ldmVyIHtcblxuICAgICAgICBjb25zdCBmb3JtTW9kZWxKU09OID0gaXNTdHJpbmcoanNvbikgPyBKU09OLnBhcnNlKGpzb24sIHBhcnNlUmV2aXZlcikgOiBqc29uO1xuICAgICAgICBjb25zdCBmb3JtTW9kZWw6IER5bmFtaWNGb3JtTW9kZWwgPSBbXTtcblxuICAgICAgICBmb3JtTW9kZWxKU09OLmZvckVhY2goKG1vZGVsOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbGF5b3V0ID0gbW9kZWwubGF5b3V0ID8/IG51bGw7XG5cbiAgICAgICAgICAgIHN3aXRjaCAobW9kZWwudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtQXJyYXlNb2RlbCA9IG1vZGVsIGFzIER5bmFtaWNGb3JtQXJyYXlNb2RlbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JtQXJyYXlNb2RlbC5ncm91cHMpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1BcnJheU1vZGVsLmdyb3Vwcy5mb3JFYWNoKChncm91cE1vZGVsOiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTW9kZWwuZ3JvdXAgPSB0aGlzLmZyb21KU09OKGdyb3VwTW9kZWwuZ3JvdXApIGFzIER5bmFtaWNGb3JtTW9kZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcm1BcnJheU1vZGVsLmdyb3VwRmFjdG9yeSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21KU09OKGZvcm1BcnJheU1vZGVsLmdyb3VwUHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0Zvcm1BcnJheU1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ0hFQ0tCT1g6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljQ2hlY2tib3hNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YX0dST1VQOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5ncm91cCA9IHRoaXMuZnJvbUpTT04obW9kZWwuZ3JvdXApIGFzIER5bmFtaWNDaGVja2JveE1vZGVsW107XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljQ2hlY2tib3hHcm91cE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ09MT1JQSUNLRVI6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljQ29sb3JQaWNrZXJNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0RBVEVQSUNLRVI6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljRGF0ZVBpY2tlck1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRURJVE9SOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0VkaXRvck1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRklMRV9VUExPQUQ6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNGaWxlVXBsb2FkTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9HUk9VUDpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ3JvdXAgPSB0aGlzLmZyb21KU09OKG1vZGVsLmdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNGb3JtR3JvdXBNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0lOUFVUOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE1vZGVsID0gbW9kZWwgYXMgRHluYW1pY0lucHV0TW9kZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0TW9kZWwubWFzayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5wdXRNb2RlbC5tYXNrIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNb2RlbC5tYXNrID0gbWFza0Zyb21TdHJpbmcoaW5wdXRNb2RlbC5tYXNrIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0lucHV0TW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9SQURJT19HUk9VUDpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNSYWRpb0dyb3VwTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9SQVRJTkc6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljUmF0aW5nTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TRUxFQ1Q6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljU2VsZWN0TW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TTElERVI6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljU2xpZGVyTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TV0lUQ0g6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljU3dpdGNoTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9URVhUQVJFQTpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNUZXh0QXJlYU1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVElNRVBJQ0tFUjpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNUaW1lUGlja2VyTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biBmb3JtIGNvbnRyb2wgbW9kZWwgdHlwZSBkZWZpbmVkIG9uIEpTT04gb2JqZWN0IHdpdGggaWQgXCIke21vZGVsLmlkfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmb3JtTW9kZWw7XG4gICAgfVxufVxuIl19