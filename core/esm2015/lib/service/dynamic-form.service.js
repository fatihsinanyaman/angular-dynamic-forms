import { __decorate, __metadata } from "tslib";
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
let DynamicFormService = class DynamicFormService {
    constructor(componentService, validationService) {
        this.componentService = componentService;
        this.validationService = validationService;
    }
    createAbstractControlOptions(validatorsConfig = null, asyncValidatorsConfig = null, updateOn = null) {
        return {
            asyncValidators: asyncValidatorsConfig !== null ? this.validationService.getAsyncValidators(asyncValidatorsConfig) : null,
            validators: validatorsConfig !== null ? this.validationService.getValidators(validatorsConfig) : null,
            updateOn: updateOn !== null && this.validationService.isFormHook(updateOn) ? updateOn : DynamicFormHook.Change
        };
    }
    createFormArray(formArrayModel) {
        const controls = [];
        const options = this.createAbstractControlOptions(formArrayModel.validators, formArrayModel.asyncValidators, formArrayModel.updateOn);
        for (let index = 0; index < formArrayModel.size; index++) {
            const groupModel = formArrayModel.get(index);
            const groupOptions = this.createAbstractControlOptions(formArrayModel.groupValidators, formArrayModel.groupAsyncValidators, formArrayModel.updateOn);
            controls.push(this.createFormGroup(groupModel.group, groupOptions, groupModel));
        }
        return new FormArray(controls, options);
    }
    createFormGroup(formModel, options = null, parent = null) {
        const controls = {};
        formModel.forEach(model => {
            model.parent = parent;
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    controls[model.id] = this.createFormArray(model);
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    const groupModel = model;
                    const groupOptions = this.createAbstractControlOptions(groupModel.validators, groupModel.asyncValidators, groupModel.updateOn);
                    controls[model.id] = this.createFormGroup(groupModel.group, groupOptions, groupModel);
                    break;
                default:
                    const controlModel = model;
                    const controlState = { value: controlModel.value, disabled: controlModel.disabled };
                    const controlOptions = this.createAbstractControlOptions(controlModel.validators, controlModel.asyncValidators, controlModel.updateOn);
                    controls[model.id] = new FormControl(controlState, controlOptions);
            }
        });
        return new FormGroup(controls, options);
    }
    getPathSegment(model) {
        return model instanceof DynamicFormArrayGroupModel ? model.index.toString() : model.id;
    }
    getPath(model, join = false) {
        const path = [this.getPathSegment(model)];
        let parent = model.parent;
        while (parent) {
            path.unshift(this.getPathSegment(parent));
            parent = parent.parent;
        }
        return join ? path.join(".") : path;
    }
    addFormGroupControl(formGroup, formModel, ...models) {
        if (formModel instanceof DynamicFormGroupModel) {
            this.insertFormGroupControl(formModel.size(), formGroup, formModel, ...models);
        }
        else {
            const model = formModel;
            this.insertFormGroupControl(model.length, formGroup, model, ...models);
        }
    }
    moveFormGroupControl(index, step, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formModel.move(index, step);
        }
        else {
            const model = formModel;
            model.splice(index + step, 0, ...model.splice(index, 1));
        }
    }
    insertFormGroupControl(index, formGroup, formModel, ...models) {
        const parent = formModel instanceof DynamicFormGroupModel ? formModel : null;
        const controls = this.createFormGroup(models, null, parent).controls;
        Object.keys(controls).forEach((controlName, idx) => {
            const controlModel = models[idx];
            if (formModel instanceof DynamicFormGroupModel) {
                formModel.insert(index, controlModel);
            }
            else {
                formModel.splice(index, 0, controlModel);
            }
            formGroup.addControl(controlName, controls[controlName]);
        });
    }
    removeFormGroupControl(index, formGroup, formModel) {
        if (formModel instanceof DynamicFormGroupModel) {
            formGroup.removeControl(formModel.get(index).id);
            formModel.remove(index);
        }
        else {
            formGroup.removeControl(formModel[index].id);
            formModel.splice(index, 1);
        }
    }
    addFormArrayGroup(formArray, formArrayModel) {
        const groupModel = formArrayModel.addGroup();
        formArray.push(this.createFormGroup(groupModel.group, null, groupModel));
    }
    insertFormArrayGroup(index, formArray, formArrayModel) {
        const groupModel = formArrayModel.insertGroup(index);
        formArray.insert(index, this.createFormGroup(groupModel.group, null, groupModel));
    }
    moveFormArrayGroup(index, step, formArray, formArrayModel) {
        const newIndex = index + step;
        const moveUp = step >= 0;
        if ((index >= 0 && index < formArrayModel.size) && (newIndex >= 0 && newIndex < formArrayModel.size)) {
            const movingGroups = [];
            for (let i = moveUp ? index : newIndex; i <= (moveUp ? newIndex : index); i++) {
                movingGroups.push(formArray.at(i));
            }
            movingGroups.forEach((formControl, idx) => {
                let position;
                if (moveUp) {
                    position = idx === 0 ? newIndex : index + idx - 1;
                }
                else {
                    position = idx === movingGroups.length - 1 ? newIndex : newIndex + idx + 1;
                }
                formArray.setControl(position, formControl);
            });
            formArrayModel.moveGroup(index, step);
        }
        else {
            throw new Error(`form array group cannot be moved due to index or new index being out of bounds`);
        }
    }
    removeFormArrayGroup(index, formArray, formArrayModel) {
        formArray.removeAt(index);
        formArrayModel.removeGroup(index);
    }
    clearFormArray(formArray, formArrayModel) {
        formArray.clear();
        formArrayModel.clear();
    }
    findById(id, formModel) {
        let result = null;
        const findByIdFn = (modelId, groupModel) => {
            for (const controlModel of groupModel) {
                if (controlModel.id === modelId) {
                    result = controlModel;
                    break;
                }
                if (controlModel instanceof DynamicFormGroupModel) {
                    findByIdFn(modelId, controlModel.group);
                }
            }
        };
        findByIdFn(id, formModel);
        return result;
    }
    findModelById(id, formModel) {
        return this.findById(id, formModel);
    }
    findControlByModel(model, group) {
        return group.root.get(this.getPath(model, true));
    }
    detectChanges(formComponent) {
        if (formComponent instanceof DynamicFormComponent) {
            formComponent.markForCheck();
            formComponent.detectChanges();
        }
        else {
            for (const form of this.componentService.getForms()) {
                form.markForCheck();
                form.detectChanges();
            }
        }
    }
    fromJSON(json) {
        const formModelJSON = isString(json) ? JSON.parse(json, parseReviver) : json;
        const formModel = [];
        formModelJSON.forEach((model) => {
            var _a;
            const layout = (_a = model.layout) !== null && _a !== void 0 ? _a : null;
            switch (model.type) {
                case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                    const formArrayModel = model;
                    if (Array.isArray(formArrayModel.groups)) {
                        formArrayModel.groups.forEach((groupModel) => {
                            groupModel.group = this.fromJSON(groupModel.group);
                        });
                    }
                    formArrayModel.groupFactory = () => {
                        return this.fromJSON(formArrayModel.groupPrototype);
                    };
                    formModel.push(new DynamicFormArrayModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                    formModel.push(new DynamicCheckboxModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
                    model.group = this.fromJSON(model.group);
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
                    model.group = this.fromJSON(model.group);
                    formModel.push(new DynamicFormGroupModel(model, layout));
                    break;
                case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                    const inputModel = model;
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
                    throw new Error(`unknown form control model type defined on JSON object with id "${model.id}"`);
            }
        });
        return formModel;
    }
};
DynamicFormService.ɵfac = function DynamicFormService_Factory(t) { return new (t || DynamicFormService)(ɵngcc0.ɵɵinject(DynamicFormComponentService), ɵngcc0.ɵɵinject(DynamicFormValidationService)); };
DynamicFormService.ctorParameters = () => [
    { type: DynamicFormComponentService },
    { type: DynamicFormValidationService }
];
DynamicFormService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(i0.ɵɵinject(i1.DynamicFormComponentService), i0.ɵɵinject(i2.DynamicFormValidationService)); }, token: DynamicFormService, providedIn: "root" });
DynamicFormService = __decorate([ __metadata("design:paramtypes", [DynamicFormComponentService,
        DynamicFormValidationService])
], DynamicFormService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: DynamicFormComponentService }, { type: DynamicFormValidationService }]; }, null); })();
export { DynamicFormService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBbUIsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlwRixPQUFPLEVBQ0gscUJBQXFCLEVBQ3JCLCtCQUErQixFQUMvQiwwQkFBMEIsRUFDN0IsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0SCxPQUFPLEVBQ0gsd0NBQXdDLEVBQ3hDLHlCQUF5QixFQUM1QixNQUFNLGdEQUFnRCxDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BILE9BQU8sRUFDSCxxQ0FBcUMsRUFDckMsdUJBQXVCLEVBQzFCLE1BQU0sZ0RBQWdELENBQUM7QUFDeEQsT0FBTyxFQUNILG9DQUFvQyxFQUNwQyxzQkFBc0IsRUFDekIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RyxPQUFPLEVBQ0gscUNBQXFDLEVBQ3JDLHNCQUFzQixFQUN6QixNQUFNLGdEQUFnRCxDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFDSCxxQ0FBcUMsRUFDckMsc0JBQXNCLEVBQ3pCLE1BQU0sMENBQTBDLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENB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QUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3RELE1BQU07Z0JBRVYsS0FBSyxrQ0FBa0M7b0JBQ25DLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsTUFBTTtnQkFFVixLQUFLLG9DQUFvQztvQkFDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUMxRCxNQUFNO2dCQUVWO29CQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZHO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7d01BQUE7O1lBOVd5QywyQkFBMkI7WUFDMUIsNEJBQTRCOzs7QUFIMUQsa0JBQWtCLGVBRXBCLEtBTFYsVUFBVSxDQUFDLFVBQ1IsVUFBVSxFQUFFLE1BQU0sTUFDckIsQ0FBQyxuREFDRSxrQ0FFc0MsMkJBQTJCO1FBQzFCLDRCQUE0QjtHQUgxRCxrQkFBa0IsQ0FnWDlCOzs7Ozs7NkhBQ0Q7U0FqWGEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sT3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1BcnJheU1vZGVsLFxuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQVJSQVksXG4gICAgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2Zvcm0tYXJyYXkvZHluYW1pYy1mb3JtLWFycmF5Lm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0dST1VQLCBEeW5hbWljRm9ybUdyb3VwTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZm9ybS1ncm91cC9keW5hbWljLWZvcm0tZ3JvdXAubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWF9HUk9VUCxcbiAgICBEeW5hbWljQ2hlY2tib3hHcm91cE1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC9jaGVja2JveC9keW5hbWljLWNoZWNrYm94LWdyb3VwLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YLCBEeW5hbWljQ2hlY2tib3hNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9jaGVja2JveC9keW5hbWljLWNoZWNrYm94Lm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ09MT1JQSUNLRVIsXG4gICAgRHluYW1pY0NvbG9yUGlja2VyTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2NvbG9ycGlja2VyL2R5bmFtaWMtY29sb3JwaWNrZXIubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9EQVRFUElDS0VSLFxuICAgIER5bmFtaWNEYXRlUGlja2VyTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2RhdGVwaWNrZXIvZHluYW1pYy1kYXRlcGlja2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0VESVRPUiwgRHluYW1pY0VkaXRvck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2VkaXRvci9keW5hbWljLWVkaXRvci5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0ZJTEVfVVBMT0FELFxuICAgIER5bmFtaWNGaWxlVXBsb2FkTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2ZpbGUtdXBsb2FkL2R5bmFtaWMtZmlsZS11cGxvYWQubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfSU5QVVQsIER5bmFtaWNJbnB1dE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2lucHV0L2R5bmFtaWMtaW5wdXQubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9SQURJT19HUk9VUCxcbiAgICBEeW5hbWljUmFkaW9Hcm91cE1vZGVsXG59IGZyb20gXCIuLi9tb2RlbC9yYWRpby9keW5hbWljLXJhZGlvLWdyb3VwLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1JBVElORywgRHluYW1pY1JhdGluZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3JhdGluZy9keW5hbWljLXJhdGluZy5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TRUxFQ1QsIER5bmFtaWNTZWxlY3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9zZWxlY3QvZHluYW1pYy1zZWxlY3QubW9kZWxcIjtcbmltcG9ydCB7IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU0xJREVSLCBEeW5hbWljU2xpZGVyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvc2xpZGVyL2R5bmFtaWMtc2xpZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NXSVRDSCwgRHluYW1pY1N3aXRjaE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3N3aXRjaC9keW5hbWljLXN3aXRjaC5tb2RlbFwiO1xuaW1wb3J0IHsgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9URVhUQVJFQSwgRHluYW1pY1RleHRBcmVhTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvdGV4dGFyZWEvZHluYW1pYy10ZXh0YXJlYS5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1RJTUVQSUNLRVIsXG4gICAgRHluYW1pY1RpbWVQaWNrZXJNb2RlbFxufSBmcm9tIFwiLi4vbW9kZWwvdGltZXBpY2tlci9keW5hbWljLXRpbWVwaWNrZXIubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybU1vZGVsLCBEeW5hbWljVW5pb25Gb3JtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvZHluYW1pYy1mb3JtLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljUGF0aGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1wYXRoLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUhvb2ssIER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIH0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtdmFsaWRhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgbWFza0Zyb21TdHJpbmcsIHBhcnNlUmV2aXZlciB9IGZyb20gXCIuLi91dGlscy9qc29uLnV0aWxzXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnQvZHluYW1pYy1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbXBvbmVudC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRTZXJ2aWNlOiBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogRHluYW1pY0Zvcm1WYWxpZGF0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQWJzdHJhY3RDb250cm9sT3B0aW9ucyh2YWxpZGF0b3JzQ29uZmlnOiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB8IG51bGwgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnNDb25maWc6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9uOiBEeW5hbWljRm9ybUhvb2sgfCBudWxsID0gbnVsbCk6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IGFzeW5jVmFsaWRhdG9yc0NvbmZpZyAhPT0gbnVsbCA/IHRoaXMudmFsaWRhdGlvblNlcnZpY2UuZ2V0QXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9yc0NvbmZpZykgOiBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdG9yczogdmFsaWRhdG9yc0NvbmZpZyAhPT0gbnVsbCA/IHRoaXMudmFsaWRhdGlvblNlcnZpY2UuZ2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzQ29uZmlnKSA6IG51bGwsXG4gICAgICAgICAgICB1cGRhdGVPbjogdXBkYXRlT24gIT09IG51bGwgJiYgdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Ib29rKHVwZGF0ZU9uKSA/IHVwZGF0ZU9uIDogRHluYW1pY0Zvcm1Ib29rLkNoYW5nZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm1BcnJheShmb3JtQXJyYXlNb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsKTogRm9ybUFycmF5IHtcblxuICAgICAgICBjb25zdCBjb250cm9sczogQWJzdHJhY3RDb250cm9sW10gPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY3JlYXRlQWJzdHJhY3RDb250cm9sT3B0aW9ucyhmb3JtQXJyYXlNb2RlbC52YWxpZGF0b3JzLCBmb3JtQXJyYXlNb2RlbC5hc3luY1ZhbGlkYXRvcnMsXG4gICAgICAgICAgICBmb3JtQXJyYXlNb2RlbC51cGRhdGVPbik7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZvcm1BcnJheU1vZGVsLnNpemU7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBNb2RlbCA9IGZvcm1BcnJheU1vZGVsLmdldChpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBncm91cE9wdGlvbnMgPSB0aGlzLmNyZWF0ZUFic3RyYWN0Q29udHJvbE9wdGlvbnMoZm9ybUFycmF5TW9kZWwuZ3JvdXBWYWxpZGF0b3JzLFxuICAgICAgICAgICAgICAgIGZvcm1BcnJheU1vZGVsLmdyb3VwQXN5bmNWYWxpZGF0b3JzLCBmb3JtQXJyYXlNb2RlbC51cGRhdGVPbik7XG5cbiAgICAgICAgICAgIGNvbnRyb2xzLnB1c2godGhpcy5jcmVhdGVGb3JtR3JvdXAoZ3JvdXBNb2RlbC5ncm91cCwgZ3JvdXBPcHRpb25zLCBncm91cE1vZGVsKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEZvcm1BcnJheShjb250cm9scywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybUdyb3VwKGZvcm1Nb2RlbDogRHluYW1pY0Zvcm1Nb2RlbCwgb3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGwgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IER5bmFtaWNQYXRoYWJsZSB8IG51bGwgPSBudWxsKTogRm9ybUdyb3VwIHtcblxuICAgICAgICBjb25zdCBjb250cm9sczogeyBbY29udHJvbElkOiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2w7IH0gPSB7fTtcblxuICAgICAgICBmb3JtTW9kZWwuZm9yRWFjaChtb2RlbCA9PiB7XG5cbiAgICAgICAgICAgIG1vZGVsLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICAgICAgc3dpdGNoIChtb2RlbC50eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQVJSQVk6XG5cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNbbW9kZWwuaWRdID0gdGhpcy5jcmVhdGVGb3JtQXJyYXkobW9kZWwgYXMgRHluYW1pY0Zvcm1BcnJheU1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfR1JPVVA6XG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YX0dST1VQOlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwTW9kZWwgPSBtb2RlbCBhcyBEeW5hbWljRm9ybUdyb3VwTW9kZWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9ucyA9IHRoaXMuY3JlYXRlQWJzdHJhY3RDb250cm9sT3B0aW9ucyhncm91cE1vZGVsLnZhbGlkYXRvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE1vZGVsLmFzeW5jVmFsaWRhdG9ycywgZ3JvdXBNb2RlbC51cGRhdGVPbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNbbW9kZWwuaWRdID0gdGhpcy5jcmVhdGVGb3JtR3JvdXAoZ3JvdXBNb2RlbC5ncm91cCwgZ3JvdXBPcHRpb25zLCBncm91cE1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xNb2RlbCA9IG1vZGVsIGFzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWw8YW55PjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbFN0YXRlID0ge3ZhbHVlOiBjb250cm9sTW9kZWwudmFsdWUsIGRpc2FibGVkOiBjb250cm9sTW9kZWwuZGlzYWJsZWR9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sT3B0aW9ucyA9IHRoaXMuY3JlYXRlQWJzdHJhY3RDb250cm9sT3B0aW9ucyhjb250cm9sTW9kZWwudmFsaWRhdG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xNb2RlbC5hc3luY1ZhbGlkYXRvcnMsIGNvbnRyb2xNb2RlbC51cGRhdGVPbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNbbW9kZWwuaWRdID0gbmV3IEZvcm1Db250cm9sKGNvbnRyb2xTdGF0ZSwgY29udHJvbE9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChjb250cm9scywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aFNlZ21lbnQobW9kZWw6IER5bmFtaWNQYXRoYWJsZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBtb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsID8gbW9kZWwuaW5kZXgudG9TdHJpbmcoKSA6IChtb2RlbCBhcyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCkuaWQ7XG4gICAgfVxuXG4gICAgZ2V0UGF0aChtb2RlbDogRHluYW1pY1BhdGhhYmxlLCBqb2luOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmdbXSB8IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFt0aGlzLmdldFBhdGhTZWdtZW50KG1vZGVsKV07XG4gICAgICAgIGxldCBwYXJlbnQgPSBtb2RlbC5wYXJlbnQ7XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuXG4gICAgICAgICAgICBwYXRoLnVuc2hpZnQodGhpcy5nZXRQYXRoU2VnbWVudChwYXJlbnQpKTtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gam9pbiA/IHBhdGguam9pbihcIi5cIikgOiBwYXRoO1xuICAgIH1cblxuICAgIGFkZEZvcm1Hcm91cENvbnRyb2woZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1Nb2RlbDogRHluYW1pY1VuaW9uRm9ybU1vZGVsLCAuLi5tb2RlbHM6IER5bmFtaWNGb3JtTW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZm9ybU1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0Rm9ybUdyb3VwQ29udHJvbChmb3JtTW9kZWwuc2l6ZSgpLCBmb3JtR3JvdXAsIGZvcm1Nb2RlbCwgLi4ubW9kZWxzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IGZvcm1Nb2RlbCBhcyBEeW5hbWljRm9ybU1vZGVsO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRGb3JtR3JvdXBDb250cm9sKG1vZGVsLmxlbmd0aCwgZm9ybUdyb3VwLCBtb2RlbCwgLi4ubW9kZWxzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVGb3JtR3JvdXBDb250cm9sKGluZGV4OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgZm9ybU1vZGVsOiBEeW5hbWljVW5pb25Gb3JtTW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZm9ybU1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKSB7XG5cbiAgICAgICAgICAgIGZvcm1Nb2RlbC5tb3ZlKGluZGV4LCBzdGVwKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IGZvcm1Nb2RlbCBhcyBEeW5hbWljRm9ybU1vZGVsO1xuICAgICAgICAgICAgbW9kZWwuc3BsaWNlKGluZGV4ICsgc3RlcCwgMCwgLi4ubW9kZWwuc3BsaWNlKGluZGV4LCAxKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnRGb3JtR3JvdXBDb250cm9sKGluZGV4OiBudW1iZXIsIGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtTW9kZWw6IER5bmFtaWNVbmlvbkZvcm1Nb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1vZGVsczogRHluYW1pY0Zvcm1Nb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGZvcm1Nb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtR3JvdXBNb2RlbCA/IGZvcm1Nb2RlbCA6IG51bGw7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5jcmVhdGVGb3JtR3JvdXAobW9kZWxzLCBudWxsLCBwYXJlbnQpLmNvbnRyb2xzO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzKS5mb3JFYWNoKChjb250cm9sTmFtZSwgaWR4KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xNb2RlbCA9IG1vZGVsc1tpZHhdO1xuXG4gICAgICAgICAgICBpZiAoZm9ybU1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cE1vZGVsKSB7XG4gICAgICAgICAgICAgICAgZm9ybU1vZGVsLmluc2VydChpbmRleCwgY29udHJvbE1vZGVsKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoZm9ybU1vZGVsIGFzIER5bmFtaWNGb3JtTW9kZWwpLnNwbGljZShpbmRleCwgMCwgY29udHJvbE1vZGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbE5hbWUsIGNvbnRyb2xzW2NvbnRyb2xOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZUZvcm1Hcm91cENvbnRyb2woaW5kZXg6IG51bWJlciwgZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1Nb2RlbDogRHluYW1pY1VuaW9uRm9ybU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGZvcm1Nb2RlbCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtR3JvdXBNb2RlbCkge1xuXG4gICAgICAgICAgICBmb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmb3JtTW9kZWwuZ2V0KGluZGV4KS5pZCk7XG4gICAgICAgICAgICBmb3JtTW9kZWwucmVtb3ZlKGluZGV4KTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmb3JtTW9kZWxbaW5kZXhdLmlkKTtcbiAgICAgICAgICAgIChmb3JtTW9kZWwgYXMgRHluYW1pY0Zvcm1Nb2RlbCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEZvcm1BcnJheUdyb3VwKGZvcm1BcnJheTogRm9ybUFycmF5LCBmb3JtQXJyYXlNb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBNb2RlbCA9IGZvcm1BcnJheU1vZGVsLmFkZEdyb3VwKCk7XG5cbiAgICAgICAgZm9ybUFycmF5LnB1c2godGhpcy5jcmVhdGVGb3JtR3JvdXAoZ3JvdXBNb2RlbC5ncm91cCwgbnVsbCwgZ3JvdXBNb2RlbCkpO1xuICAgIH1cblxuICAgIGluc2VydEZvcm1BcnJheUdyb3VwKGluZGV4OiBudW1iZXIsIGZvcm1BcnJheTogRm9ybUFycmF5LCBmb3JtQXJyYXlNb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBNb2RlbCA9IGZvcm1BcnJheU1vZGVsLmluc2VydEdyb3VwKGluZGV4KTtcblxuICAgICAgICBmb3JtQXJyYXkuaW5zZXJ0KGluZGV4LCB0aGlzLmNyZWF0ZUZvcm1Hcm91cChncm91cE1vZGVsLmdyb3VwLCBudWxsLCBncm91cE1vZGVsKSk7XG4gICAgfVxuXG4gICAgbW92ZUZvcm1BcnJheUdyb3VwKGluZGV4OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgZm9ybUFycmF5OiBGb3JtQXJyYXksIGZvcm1BcnJheU1vZGVsOiBEeW5hbWljRm9ybUFycmF5TW9kZWwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ICsgc3RlcDtcbiAgICAgICAgY29uc3QgbW92ZVVwID0gc3RlcCA+PSAwO1xuXG4gICAgICAgIGlmICgoaW5kZXggPj0gMCAmJiBpbmRleCA8IGZvcm1BcnJheU1vZGVsLnNpemUpICYmIChuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDwgZm9ybUFycmF5TW9kZWwuc2l6ZSkpIHtcblxuICAgICAgICAgICAgY29uc3QgbW92aW5nR3JvdXBzOiBBYnN0cmFjdENvbnRyb2xbXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbW92ZVVwID8gaW5kZXggOiBuZXdJbmRleDsgaSA8PSAobW92ZVVwID8gbmV3SW5kZXggOiBpbmRleCk7IGkrKykge1xuICAgICAgICAgICAgICAgIG1vdmluZ0dyb3Vwcy5wdXNoKGZvcm1BcnJheS5hdChpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdmluZ0dyb3Vwcy5mb3JFYWNoKChmb3JtQ29udHJvbCwgaWR4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICBpZiAobW92ZVVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gaWR4ID09PSAwID8gbmV3SW5kZXggOiBpbmRleCArIGlkeCAtIDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGlkeCA9PT0gbW92aW5nR3JvdXBzLmxlbmd0aCAtIDEgPyBuZXdJbmRleCA6IG5ld0luZGV4ICsgaWR4ICsgMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtQXJyYXkuc2V0Q29udHJvbChwb3NpdGlvbiwgZm9ybUNvbnRyb2wpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvcm1BcnJheU1vZGVsLm1vdmVHcm91cChpbmRleCwgc3RlcCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZm9ybSBhcnJheSBncm91cCBjYW5ub3QgYmUgbW92ZWQgZHVlIHRvIGluZGV4IG9yIG5ldyBpbmRleCBiZWluZyBvdXQgb2YgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGb3JtQXJyYXlHcm91cChpbmRleDogbnVtYmVyLCBmb3JtQXJyYXk6IEZvcm1BcnJheSwgZm9ybUFycmF5TW9kZWw6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGZvcm1BcnJheS5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgIGZvcm1BcnJheU1vZGVsLnJlbW92ZUdyb3VwKGluZGV4KTtcbiAgICB9XG5cbiAgICBjbGVhckZvcm1BcnJheShmb3JtQXJyYXk6IEZvcm1BcnJheSwgZm9ybUFycmF5TW9kZWw6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCk6IHZvaWQge1xuXG4gICAgICAgIGZvcm1BcnJheS5jbGVhcigpO1xuICAgICAgICBmb3JtQXJyYXlNb2RlbC5jbGVhcigpO1xuICAgIH1cblxuICAgIGZpbmRCeUlkKGlkOiBzdHJpbmcsIGZvcm1Nb2RlbDogRHluYW1pY0Zvcm1Nb2RlbCk6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIHwgbnVsbCB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgZmluZEJ5SWRGbiA9IChtb2RlbElkOiBzdHJpbmcsIGdyb3VwTW9kZWw6IER5bmFtaWNGb3JtTW9kZWwpOiB2b2lkID0+IHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjb250cm9sTW9kZWwgb2YgZ3JvdXBNb2RlbCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xNb2RlbC5pZCA9PT0gbW9kZWxJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250cm9sTW9kZWw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sTW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUdyb3VwTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZEJ5SWRGbihtb2RlbElkLCAoY29udHJvbE1vZGVsIGFzIER5bmFtaWNGb3JtR3JvdXBNb2RlbCkuZ3JvdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmaW5kQnlJZEZuKGlkLCBmb3JtTW9kZWwpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZmluZE1vZGVsQnlJZDxUIGV4dGVuZHMgRHluYW1pY0Zvcm1Db250cm9sTW9kZWw+KGlkOiBzdHJpbmcsIGZvcm1Nb2RlbDogRHluYW1pY0Zvcm1Nb2RlbCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEJ5SWQoaWQsIGZvcm1Nb2RlbCkgYXMgVDtcbiAgICB9XG5cbiAgICBmaW5kQ29udHJvbEJ5TW9kZWw8VCBleHRlbmRzIEFic3RyYWN0Q29udHJvbD4obW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCBncm91cDogRm9ybUdyb3VwKTogVCB8IG51bGwge1xuICAgICAgICByZXR1cm4gZ3JvdXAucm9vdC5nZXQodGhpcy5nZXRQYXRoKG1vZGVsLCB0cnVlKSkgYXMgVDtcbiAgICB9XG5cbiAgICBkZXRlY3RDaGFuZ2VzKGZvcm1Db21wb25lbnQ/OiBEeW5hbWljRm9ybUNvbXBvbmVudCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChmb3JtQ29tcG9uZW50IGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Db21wb25lbnQpIHtcblxuICAgICAgICAgICAgZm9ybUNvbXBvbmVudC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIGZvcm1Db21wb25lbnQuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZm9ybSBvZiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuZ2V0Rm9ybXMoKSkge1xuICAgICAgICAgICAgICAgIGZvcm0ubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgZm9ybS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcm9tSlNPTihqc29uOiBzdHJpbmcgfCBvYmplY3RbXSk6IER5bmFtaWNGb3JtTW9kZWwgfCBuZXZlciB7XG5cbiAgICAgICAgY29uc3QgZm9ybU1vZGVsSlNPTiA9IGlzU3RyaW5nKGpzb24pID8gSlNPTi5wYXJzZShqc29uLCBwYXJzZVJldml2ZXIpIDoganNvbjtcbiAgICAgICAgY29uc3QgZm9ybU1vZGVsOiBEeW5hbWljRm9ybU1vZGVsID0gW107XG5cbiAgICAgICAgZm9ybU1vZGVsSlNPTi5mb3JFYWNoKChtb2RlbDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxheW91dCA9IG1vZGVsLmxheW91dCA/PyBudWxsO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLnR5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9BUlJBWTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUFycmF5TW9kZWwgPSBtb2RlbCBhcyBEeW5hbWljRm9ybUFycmF5TW9kZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybUFycmF5TW9kZWwuZ3JvdXBzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQXJyYXlNb2RlbC5ncm91cHMuZm9yRWFjaCgoZ3JvdXBNb2RlbDogRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE1vZGVsLmdyb3VwID0gdGhpcy5mcm9tSlNPTihncm91cE1vZGVsLmdyb3VwKSBhcyBEeW5hbWljRm9ybU1vZGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3JtQXJyYXlNb2RlbC5ncm91cEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tSlNPTihmb3JtQXJyYXlNb2RlbC5ncm91cFByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNGb3JtQXJyYXlNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0NoZWNrYm94TW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWF9HUk9VUDpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ3JvdXAgPSB0aGlzLmZyb21KU09OKG1vZGVsLmdyb3VwKSBhcyBEeW5hbWljQ2hlY2tib3hNb2RlbFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0NoZWNrYm94R3JvdXBNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NPTE9SUElDS0VSOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0NvbG9yUGlja2VyTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9EQVRFUElDS0VSOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY0RhdGVQaWNrZXJNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0VESVRPUjpcbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNFZGl0b3JNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0ZJTEVfVVBMT0FEOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbC52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljRmlsZVVwbG9hZE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfR1JPVVA6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmdyb3VwID0gdGhpcy5mcm9tSlNPTihtb2RlbC5ncm91cCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljRm9ybUdyb3VwTW9kZWwobW9kZWwsIGxheW91dCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9JTlBVVDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRNb2RlbCA9IG1vZGVsIGFzIER5bmFtaWNJbnB1dE1vZGVsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dE1vZGVsLm1hc2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGlucHV0TW9kZWwubWFzayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TW9kZWwubWFzayA9IG1hc2tGcm9tU3RyaW5nKGlucHV0TW9kZWwubWFzayBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybU1vZGVsLnB1c2gobmV3IER5bmFtaWNJbnB1dE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfUkFESU9fR1JPVVA6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljUmFkaW9Hcm91cE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfUkFUSU5HOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1JhdGluZ01vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU0VMRUNUOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1NlbGVjdE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU0xJREVSOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1NsaWRlck1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU1dJVENIOlxuICAgICAgICAgICAgICAgICAgICBmb3JtTW9kZWwucHVzaChuZXcgRHluYW1pY1N3aXRjaE1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVEVYVEFSRUE6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljVGV4dEFyZWFNb2RlbChtb2RlbCwgbGF5b3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1RJTUVQSUNLRVI6XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Nb2RlbC5wdXNoKG5ldyBEeW5hbWljVGltZVBpY2tlck1vZGVsKG1vZGVsLCBsYXlvdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gZm9ybSBjb250cm9sIG1vZGVsIHR5cGUgZGVmaW5lZCBvbiBKU09OIG9iamVjdCB3aXRoIGlkIFwiJHttb2RlbC5pZH1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZm9ybU1vZGVsO1xuICAgIH1cbn1cbiJdfQ==