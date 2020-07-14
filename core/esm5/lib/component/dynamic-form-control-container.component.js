import { __read, __spread } from "tslib";
import { DynamicFormControlEventType, isDynamicFormControlEvent } from "./dynamic-form-control-event";
import { DynamicFormValueControlModel } from "../model/dynamic-form-value-control.model";
import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX } from "../model/checkbox/dynamic-checkbox.model";
import { DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE, DYNAMIC_FORM_CONTROL_TYPE_INPUT } from "../model/input/dynamic-input.model";
import { isString } from "../utils/core.utils";
import { DynamicFormGroupComponent } from "./dynamic-form-group.component";
import { DynamicFormArrayComponent } from "./dynamic-form-array.component";
import * as ɵngcc0 from '@angular/core';
var DynamicFormControlContainerComponent = /** @class */ (function () {
    function DynamicFormControlContainerComponent(changeDetectorRef, componentFactoryResolver, layoutService, validationService, componentService, relationService) {
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.layoutService = layoutService;
        this.validationService = validationService;
        this.componentService = componentService;
        this.relationService = relationService;
        this._hasFocus = false;
        this.context = null;
        this.componentSubscriptions = [];
        this.subscriptions = [];
    }
    DynamicFormControlContainerComponent.prototype.ngOnChanges = function (changes) {
        var groupChange = changes.group;
        var layoutChange = changes.layout;
        var modelChange = changes.model;
        if (layoutChange || modelChange) {
            this.onLayoutOrModelChange();
        }
        if (modelChange) {
            this.onModelChange();
        }
        if (groupChange || modelChange) {
            this.onGroupOrModelChange();
        }
    };
    DynamicFormControlContainerComponent.prototype.ngOnDestroy = function () {
        this.destroyFormControlComponent();
        this.unsubscribe();
    };
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "id", {
        get: function () {
            return this.layoutService.getElementId(this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "hasFocus", {
        get: function () {
            return this._hasFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "isInvalid", {
        get: function () {
            return this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "isValid", {
        get: function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "errorMessages", {
        get: function () {
            return this.validationService.createErrorMessages(this.control, this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "showErrorMessages", {
        get: function () {
            return this.validationService.showErrorMessages(this.control, this.model, this.hasFocus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "hasLabel", {
        get: function () {
            return isString(this.model.label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "hasHint", {
        get: function () {
            return isString(this.model.hint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "hint", {
        get: function () {
            var _a;
            return (_a = this.model.hint) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "isCheckbox", {
        get: function () {
            return this.model.type === DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "templates", {
        get: function () {
            return this.inputTemplateList !== undefined ? this.inputTemplateList : this.contentTemplateList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "startTemplate", {
        get: function () {
            return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
                this.layoutService.getStartTemplate(this.model, this.templates) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlContainerComponent.prototype, "endTemplate", {
        get: function () {
            return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
                this.layoutService.getEndTemplate(this.model, this.templates) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormControlContainerComponent.prototype.getClass = function (context, place) {
        return this.layoutService.getClass(this.controlLayout, context, place);
    };
    DynamicFormControlContainerComponent.prototype.markForCheck = function () {
        this.changeDetectorRef.markForCheck();
        var component = this.componentRef && this.componentRef.instance;
        if (component && (component instanceof DynamicFormGroupComponent || component instanceof DynamicFormArrayComponent)) {
            component.markForCheck();
        }
    };
    DynamicFormControlContainerComponent.prototype.createFormControlComponent = function () {
        var _this = this;
        var componentType = this.componentType;
        if (componentType !== null) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentViewContainerRef.clear();
            this.componentRef = this.componentViewContainerRef.createComponent(componentFactory);
            var component = this.componentRef.instance;
            component.formLayout = this.layout;
            component.group = this.group;
            component.layout = this.controlLayout;
            component.model = this.model;
            if (this.templates) {
                component.templates = this.templates;
            }
            this.componentSubscriptions.push(component.blur.subscribe(function ($event) { return _this.onBlur($event); }));
            this.componentSubscriptions.push(component.change.subscribe(function ($event) { return _this.onChange($event); }));
            this.componentSubscriptions.push(component.focus.subscribe(function ($event) { return _this.onFocus($event); }));
            if (component.customEvent !== undefined) {
                this.componentSubscriptions.push(component.customEvent.subscribe(function ($event) { return _this.onCustomEvent($event); }));
            }
            this.registerFormControlComponentRef(this.componentRef);
        }
    };
    DynamicFormControlContainerComponent.prototype.destroyFormControlComponent = function () {
        if (this.componentRef) {
            this.componentSubscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
            this.componentSubscriptions = [];
            this.unregisterFormControlComponentRef();
            this.componentRef.destroy();
        }
    };
    DynamicFormControlContainerComponent.prototype.createDynamicFormControlEvent = function ($event, type) {
        return { $event: $event, context: this.context, control: this.control, group: this.group, model: this.model, type: type };
    };
    DynamicFormControlContainerComponent.prototype.unsubscribe = function () {
        // this.componentSubscriptions.forEach(subscription => subscription.unsubscribe());
        // this.componentSubscriptions = [];
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this.subscriptions = [];
    };
    DynamicFormControlContainerComponent.prototype.onControlValueChanges = function (value) {
        if (this.model instanceof DynamicFormValueControlModel && this.model.value !== value) {
            this.model.value = value;
        }
    };
    DynamicFormControlContainerComponent.prototype.onModelValueUpdates = function (value) {
        if (this.control.value !== value) {
            this.control.setValue(value);
        }
    };
    DynamicFormControlContainerComponent.prototype.onModelDisabledUpdates = function (disabled) {
        disabled ? this.control.disable() : this.control.enable();
    };
    DynamicFormControlContainerComponent.prototype.onLayoutOrModelChange = function () {
        var _a;
        this.controlLayout = (_a = this.layoutService.findByModel(this.model, this.layout)) !== null && _a !== void 0 ? _a : this.model.layout;
        this.klass = (Array.isArray(this.hostClass) ? this.hostClass.join(" ") : "") + " " + this.layoutService.getHostClass(this.controlLayout);
    };
    DynamicFormControlContainerComponent.prototype.onModelChange = function () {
        this.destroyFormControlComponent();
        this.createFormControlComponent();
    };
    DynamicFormControlContainerComponent.prototype.onGroupOrModelChange = function () {
        var _a;
        var _this = this;
        if (this.model) {
            this.unsubscribe();
            if (this.group) {
                this.control = this.group.get(this.model.id);
                this.subscriptions.push(this.control.valueChanges.subscribe(function (value) { return _this.onControlValueChanges(value); }));
            }
            this.subscriptions.push(this.model.disabledChanges.subscribe(function (value) { return _this.onModelDisabledUpdates(value); }));
            if (this.model instanceof DynamicFormValueControlModel) {
                var model = this.model;
                this.subscriptions.push(model.valueChanges.subscribe(function (value) { return _this.onModelValueUpdates(value); }));
            }
            if (this.model.relations.length > 0) {
                (_a = this.subscriptions).push.apply(_a, __spread(this.relationService.subscribeRelations(this.model, this.group, this.control)));
            }
        }
    };
    DynamicFormControlContainerComponent.prototype.onChange = function ($event) {
        var _a;
        if ($event instanceof Event) { // native HTML5 change event
            if (this.model.type === DYNAMIC_FORM_CONTROL_TYPE_INPUT) {
                var model = this.model;
                if (model.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE) {
                    var inputElement = (_a = $event.target) !== null && _a !== void 0 ? _a : $event.srcElement;
                    model.files = inputElement.files;
                }
            }
            this.change.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Change));
        }
        else if (isDynamicFormControlEvent($event)) { // event bypass
            this.change.emit($event);
        }
        else { // custom library value change event
            this.change.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Change));
        }
    };
    DynamicFormControlContainerComponent.prototype.onBlur = function ($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            this.blur.emit($event);
        }
        else { // native HTML 5 or UI library blur event
            this._hasFocus = false;
            this.blur.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Blur));
        }
    };
    DynamicFormControlContainerComponent.prototype.onFocus = function ($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            this.focus.emit($event);
        }
        else { // native HTML 5 or UI library focus event
            this._hasFocus = true;
            this.focus.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Focus));
        }
    };
    DynamicFormControlContainerComponent.prototype.onCustomEvent = function ($event) {
        var emitter = this.customEvent;
        if (isDynamicFormControlEvent($event)) { // child event bypass
            emitter.emit($event);
        }
        else { // native UI library custom event
            emitter.emit(this.createDynamicFormControlEvent($event.customEvent, $event.customEventType));
        }
    };
    DynamicFormControlContainerComponent.prototype.registerFormControlComponentRef = function (ref) {
        if (this.context instanceof DynamicFormArrayGroupModel) {
            this.componentService.registerFormControl(this.model, ref, this.context.index);
        }
        else {
            this.componentService.registerFormControl(this.model, ref);
        }
    };
    DynamicFormControlContainerComponent.prototype.unregisterFormControlComponentRef = function () {
        if (this.context instanceof DynamicFormArrayGroupModel) {
            this.componentService.unregisterFormControl(this.model.id, this.context.index);
        }
        else {
            this.componentService.unregisterFormControl(this.model.id);
        }
    };
DynamicFormControlContainerComponent.ɵfac = function DynamicFormControlContainerComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
DynamicFormControlContainerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicFormControlContainerComponent, features: [ɵngcc0.ɵɵNgOnChangesFeature] });

    return DynamicFormControlContainerComponent;
}());
export { DynamicFormControlContainerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbnRyb2wtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0BuZy1keW5hbWljLWZvcm1zL2NvcmUvbGliL2NvbXBvbmVudC9keW5hbWljLWZvcm0tY29udHJvbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFjQSxPQUFPLEVBR0gsMkJBQTJCLEVBQzNCLHlCQUF5QixFQUM1QixNQUFNLDhCQUE4QixDQUFDO0FBRXRDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFDSCwrQkFBK0IsRUFDL0IsMEJBQTBCLEVBQzdCLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUNILG9DQUFvQyxFQUNwQywrQkFBK0IsRUFFbEMsTUFBTSxvQ0FBb0MsQ0FBQztBQVc1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRTNFO0lBMkJJLDhDQUFnQyxpQkFBb0MsRUFDcEMsd0JBQWtELEVBQ2xELGFBQXVDLEVBQ3ZDLGlCQUErQyxFQUMvQyxnQkFBNkMsRUFDN0MsZUFBMkM7UUFMM0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO1FBQy9DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQTRCO1FBOUJuRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTFCLFlBQU8s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QUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUVsRjthQUFNO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDO0lBRU8sZ0ZBQWlDLEdBQXpDO1FBRUksSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLDBCQUEwQixFQUFFO1lBRXBELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBRWxGO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7OztBQUNMO0lBQUEsMkNBQUM7QUFBRCxDQUFDLEFBOVVELElBOFVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFR5cGUsXG4gICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1Db250cm9sQ3VzdG9tRXZlbnQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sRXZlbnQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sRXZlbnRUeXBlLFxuICAgIGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnRcbn0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtZXZlbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS12YWx1ZS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQVJSQVksXG4gICAgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2Zvcm0tYXJyYXkvZHluYW1pYy1mb3JtLWFycmF5Lm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YIH0gZnJvbSBcIi4uL21vZGVsL2NoZWNrYm94L2R5bmFtaWMtY2hlY2tib3gubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfSU5QVVRfVFlQRV9GSUxFLFxuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfSU5QVVQsXG4gICAgRHluYW1pY0lucHV0TW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2lucHV0L2R5bmFtaWMtaW5wdXQubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0LFxuICAgIER5bmFtaWNGb3JtQ29udHJvbExheW91dENvbnRleHQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0UGxhY2Vcbn0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tY29udHJvbC1pbnRlcmZhY2VcIjtcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtTGF5b3V0LCBEeW5hbWljRm9ybUxheW91dFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tbGF5b3V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tY29tcG9uZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtUmVsYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tZ3JvdXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWFycmF5LmNvbXBvbmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfaGFzRm9jdXMgPSBmYWxzZTtcblxuICAgIGNvbnRleHQ6IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgICBob3N0Q2xhc3M6IHN0cmluZ1tdO1xuICAgIGtsYXNzOiBzdHJpbmc7XG4gICAgbGF5b3V0OiBEeW5hbWljRm9ybUxheW91dDtcbiAgICBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWw7XG5cbiAgICBjb250ZW50VGVtcGxhdGVMaXN0OiBRdWVyeUxpc3Q8RHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlPiB8IHVuZGVmaW5lZDtcbiAgICBpbnB1dFRlbXBsYXRlTGlzdDogUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBibHVyOiBFdmVudEVtaXR0ZXI8RHluYW1pY0Zvcm1Db250cm9sRXZlbnQ+O1xuICAgIGNoYW5nZTogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PjtcbiAgICBjdXN0b21FdmVudDogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PiB8IHVuZGVmaW5lZDtcbiAgICBmb2N1czogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PjtcblxuICAgIGNvbXBvbmVudFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RHluYW1pY0Zvcm1Db250cm9sPjtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50U3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgY29udHJvbExheW91dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0O1xuICAgIHByb3RlY3RlZCBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGxheW91dFNlcnZpY2U6IER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25TZXJ2aWNlOiBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY29tcG9uZW50U2VydmljZTogRHluYW1pY0Zvcm1Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVsYXRpb25TZXJ2aWNlOiBEeW5hbWljRm9ybVJlbGF0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgICAgICBjb25zdCBncm91cENoYW5nZSA9IChjaGFuZ2VzIGFzIFBpY2s8U2ltcGxlQ2hhbmdlcywgXCJncm91cFwiPikuZ3JvdXA7XG4gICAgICAgIGNvbnN0IGxheW91dENoYW5nZSA9IChjaGFuZ2VzIGFzIFBpY2s8U2ltcGxlQ2hhbmdlcywgXCJsYXlvdXRcIj4pLmxheW91dDtcbiAgICAgICAgY29uc3QgbW9kZWxDaGFuZ2UgPSAoY2hhbmdlcyBhcyBQaWNrPFNpbXBsZUNoYW5nZXMsIFwibW9kZWxcIj4pLm1vZGVsO1xuXG4gICAgICAgIGlmIChsYXlvdXRDaGFuZ2UgfHwgbW9kZWxDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXlvdXRPck1vZGVsQ2hhbmdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZWxDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdyb3VwQ2hhbmdlIHx8IG1vZGVsQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uR3JvdXBPck1vZGVsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgICAgICB0aGlzLmRlc3Ryb3lGb3JtQ29udHJvbENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IGNvbXBvbmVudFR5cGUoKTogVHlwZTxEeW5hbWljRm9ybUNvbnRyb2w+IHwgbnVsbDtcblxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRTZXJ2aWNlLmdldEVsZW1lbnRJZCh0aGlzLm1vZGVsKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNGb2N1cztcbiAgICB9XG5cbiAgICBnZXQgaXNJbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLmludmFsaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5jcmVhdGVFcnJvck1lc3NhZ2VzKHRoaXMuY29udHJvbCwgdGhpcy5tb2RlbCk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dFcnJvck1lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5zaG93RXJyb3JNZXNzYWdlcyh0aGlzLmNvbnRyb2wsIHRoaXMubW9kZWwsIHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cblxuICAgIGdldCBoYXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMubW9kZWwubGFiZWwpO1xuICAgIH1cblxuICAgIGdldCBoYXNIaW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNTdHJpbmcoKHRoaXMubW9kZWwgYXMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxhbnk+KS5oaW50KTtcbiAgICB9XG5cbiAgICBnZXQgaGludCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1vZGVsIGFzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWw8YW55PikuaGludCA/PyBudWxsO1xuICAgIH1cblxuICAgIGdldCBpc0NoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50eXBlID09PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YO1xuICAgIH1cblxuICAgIGdldCB0ZW1wbGF0ZXMoKTogUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFRlbXBsYXRlTGlzdCAhPT0gdW5kZWZpbmVkID8gdGhpcy5pbnB1dFRlbXBsYXRlTGlzdCA6IHRoaXMuY29udGVudFRlbXBsYXRlTGlzdDtcbiAgICB9XG5cbiAgICBnZXQgc3RhcnRUZW1wbGF0ZSgpOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50eXBlICE9PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZID9cbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS5nZXRTdGFydFRlbXBsYXRlKHRoaXMubW9kZWwsIHRoaXMudGVtcGxhdGVzKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgZW5kVGVtcGxhdGUoKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudHlwZSAhPT0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9BUlJBWSA/XG4gICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UuZ2V0RW5kVGVtcGxhdGUodGhpcy5tb2RlbCwgdGhpcy50ZW1wbGF0ZXMpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldENsYXNzKGNvbnRleHQ6IER5bmFtaWNGb3JtQ29udHJvbExheW91dENvbnRleHQsIHBsYWNlOiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRQbGFjZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dFNlcnZpY2UuZ2V0Q2xhc3ModGhpcy5jb250cm9sTGF5b3V0LCBjb250ZXh0LCBwbGFjZSk7XG4gICAgfVxuXG4gICAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRSZWYgJiYgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiAoY29tcG9uZW50IGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cENvbXBvbmVudCB8fCBjb21wb25lbnQgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUFycmF5Q29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUZvcm1Db250cm9sQ29tcG9uZW50KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLmNvbXBvbmVudFR5cGU7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFR5cGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5mb3JtTGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG4gICAgICAgICAgICBjb21wb25lbnQuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgICAgICAgY29tcG9uZW50LmxheW91dCA9IHRoaXMuY29udHJvbExheW91dDtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tb2RlbCA9IHRoaXMubW9kZWw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC50ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTdWJzY3JpcHRpb25zLnB1c2goY29tcG9uZW50LmJsdXIuc3Vic2NyaWJlKCgkZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkJsdXIoJGV2ZW50KSkpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTdWJzY3JpcHRpb25zLnB1c2goY29tcG9uZW50LmNoYW5nZS5zdWJzY3JpYmUoKCRldmVudDogYW55KSA9PiB0aGlzLm9uQ2hhbmdlKCRldmVudCkpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaXB0aW9ucy5wdXNoKGNvbXBvbmVudC5mb2N1cy5zdWJzY3JpYmUoKCRldmVudDogYW55KSA9PiB0aGlzLm9uRm9jdXMoJGV2ZW50KSkpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmN1c3RvbUV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmN1c3RvbUV2ZW50LnN1YnNjcmliZSgoJGV2ZW50OiBhbnkpID0+IHRoaXMub25DdXN0b21FdmVudCgkZXZlbnQpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtQ29udHJvbENvbXBvbmVudFJlZih0aGlzLmNvbXBvbmVudFJlZik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGVzdHJveUZvcm1Db250cm9sQ29tcG9uZW50KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlckZvcm1Db250cm9sQ29tcG9uZW50UmVmKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50OiBhbnksIHR5cGU6IHN0cmluZyk6IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IHtcbiAgICAgICAgcmV0dXJuIHskZXZlbnQsIGNvbnRleHQ6IHRoaXMuY29udGV4dCwgY29udHJvbDogdGhpcy5jb250cm9sLCBncm91cDogdGhpcy5ncm91cCwgbW9kZWw6IHRoaXMubW9kZWwsIHR5cGV9O1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50U3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIG9uQ29udHJvbFZhbHVlQ2hhbmdlcyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbCAmJiB0aGlzLm1vZGVsLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbFZhbHVlVXBkYXRlcyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbERpc2FibGVkVXBkYXRlcyhkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBkaXNhYmxlZCA/IHRoaXMuY29udHJvbC5kaXNhYmxlKCkgOiB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgb25MYXlvdXRPck1vZGVsQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2xMYXlvdXQgPSB0aGlzLmxheW91dFNlcnZpY2UuZmluZEJ5TW9kZWwodGhpcy5tb2RlbCwgdGhpcy5sYXlvdXQpID8/IHRoaXMubW9kZWwubGF5b3V0IGFzIER5bmFtaWNGb3JtQ29udHJvbExheW91dDtcbiAgICAgICAgdGhpcy5rbGFzcyA9IGAke0FycmF5LmlzQXJyYXkodGhpcy5ob3N0Q2xhc3MpID8gdGhpcy5ob3N0Q2xhc3Muam9pbihcIiBcIikgOiBcIlwifSAke3RoaXMubGF5b3V0U2VydmljZS5nZXRIb3N0Q2xhc3ModGhpcy5jb250cm9sTGF5b3V0KX1gO1xuICAgIH1cblxuICAgIG9uTW9kZWxDaGFuZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVzdHJveUZvcm1Db250cm9sQ29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUNvbnRyb2xDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICBvbkdyb3VwT3JNb2RlbENoYW5nZSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5tb2RlbCkge1xuXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmdyb3VwLmdldCh0aGlzLm1vZGVsLmlkKSBhcyBGb3JtQ29udHJvbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLm9uQ29udHJvbFZhbHVlQ2hhbmdlcyh2YWx1ZSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5tb2RlbC5kaXNhYmxlZENoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMub25Nb2RlbERpc2FibGVkVXBkYXRlcyh2YWx1ZSkpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWwgYXMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxhbnk+O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLm9uTW9kZWxWYWx1ZVVwZGF0ZXModmFsdWUpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLnJlbGF0aW9ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCguLi50aGlzLnJlbGF0aW9uU2VydmljZS5zdWJzY3JpYmVSZWxhdGlvbnModGhpcy5tb2RlbCwgdGhpcy5ncm91cCwgdGhpcy5jb250cm9sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSgkZXZlbnQ6IEV2ZW50IHwgRHluYW1pY0Zvcm1Db250cm9sRXZlbnQgfCBhbnkpOiB2b2lkIHtcblxuICAgICAgICBpZiAoJGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpIHsgLy8gbmF0aXZlIEhUTUw1IGNoYW5nZSBldmVudFxuXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC50eXBlID09PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0lOUFVUKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWwgYXMgRHluYW1pY0lucHV0TW9kZWw7XG5cbiAgICAgICAgICAgICAgICBpZiAobW9kZWwuaW5wdXRUeXBlID09PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9JTlBVVF9UWVBFX0ZJTEUpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IGFueSA9ICRldmVudC50YXJnZXQgPz8gJGV2ZW50LnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZmlsZXMgPSBpbnB1dEVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlYXRlRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50LCBEeW5hbWljRm9ybUNvbnRyb2xFdmVudFR5cGUuQ2hhbmdlKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChpc0R5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudCkpIHsgLy8gZXZlbnQgYnlwYXNzXG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoJGV2ZW50KTtcblxuICAgICAgICB9IGVsc2UgeyAvLyBjdXN0b20gbGlicmFyeSB2YWx1ZSBjaGFuZ2UgZXZlbnRcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUR5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudCwgRHluYW1pY0Zvcm1Db250cm9sRXZlbnRUeXBlLkNoYW5nZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CbHVyKCRldmVudDogRm9jdXNFdmVudCB8IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IHwgYW55KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50KSkgeyAvLyBldmVudCBieXBhc3NcblxuICAgICAgICAgICAgdGhpcy5ibHVyLmVtaXQoJGV2ZW50KTtcblxuICAgICAgICB9IGVsc2UgeyAvLyBuYXRpdmUgSFRNTCA1IG9yIFVJIGxpYnJhcnkgYmx1ciBldmVudFxuXG4gICAgICAgICAgICB0aGlzLl9oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ibHVyLmVtaXQodGhpcy5jcmVhdGVEeW5hbWljRm9ybUNvbnRyb2xFdmVudCgkZXZlbnQsIER5bmFtaWNGb3JtQ29udHJvbEV2ZW50VHlwZS5CbHVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCB8IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IHwgYW55KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50KSkgeyAvLyBldmVudCBieXBhc3NcblxuICAgICAgICAgICAgdGhpcy5mb2N1cy5lbWl0KCRldmVudCk7XG5cbiAgICAgICAgfSBlbHNlIHsgLy8gbmF0aXZlIEhUTUwgNSBvciBVSSBsaWJyYXJ5IGZvY3VzIGV2ZW50XG5cbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMuZW1pdCh0aGlzLmNyZWF0ZUR5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudCwgRHluYW1pY0Zvcm1Db250cm9sRXZlbnRUeXBlLkZvY3VzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkN1c3RvbUV2ZW50KCRldmVudDogRHluYW1pY0Zvcm1Db250cm9sRXZlbnQgfCBEeW5hbWljRm9ybUNvbnRyb2xDdXN0b21FdmVudCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzLmN1c3RvbUV2ZW50IGFzIEV2ZW50RW1pdHRlcjxEeW5hbWljRm9ybUNvbnRyb2xFdmVudD47XG5cbiAgICAgICAgaWYgKGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50KSkgeyAvLyBjaGlsZCBldmVudCBieXBhc3NcblxuICAgICAgICAgICAgZW1pdHRlci5lbWl0KCRldmVudCk7XG5cbiAgICAgICAgfSBlbHNlIHsgLy8gbmF0aXZlIFVJIGxpYnJhcnkgY3VzdG9tIGV2ZW50XG5cbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCh0aGlzLmNyZWF0ZUR5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudC5jdXN0b21FdmVudCwgJGV2ZW50LmN1c3RvbUV2ZW50VHlwZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckZvcm1Db250cm9sQ29tcG9uZW50UmVmKHJlZjogQ29tcG9uZW50UmVmPER5bmFtaWNGb3JtQ29udHJvbD4pOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTZXJ2aWNlLnJlZ2lzdGVyRm9ybUNvbnRyb2wodGhpcy5tb2RlbCwgcmVmLCB0aGlzLmNvbnRleHQuaW5kZXgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFNlcnZpY2UucmVnaXN0ZXJGb3JtQ29udHJvbCh0aGlzLm1vZGVsLCByZWYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnJlZ2lzdGVyRm9ybUNvbnRyb2xDb21wb25lbnRSZWYoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50U2VydmljZS51bnJlZ2lzdGVyRm9ybUNvbnRyb2wodGhpcy5tb2RlbC5pZCwgdGhpcy5jb250ZXh0LmluZGV4KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTZXJ2aWNlLnVucmVnaXN0ZXJGb3JtQ29udHJvbCh0aGlzLm1vZGVsLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==