import { __read, __spread } from "tslib";
import { DynamicFormControlEventType, isDynamicFormControlEvent } from "./dynamic-form-control-event";
import { DynamicFormValueControlModel } from "../model/dynamic-form-value-control.model";
import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX } from "../model/checkbox/dynamic-checkbox.model";
import { DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE, DYNAMIC_FORM_CONTROL_TYPE_INPUT } from "../model/input/dynamic-input.model";
import { isString } from "../utils/core.utils";
import { DynamicFormGroupComponent } from "./dynamic-form-group.component";
import { DynamicFormArrayComponent } from "./dynamic-form-array.component";
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
    return DynamicFormControlContainerComponent;
}());
export { DynamicFormControlContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbnRyb2wtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2R5bmFtaWMtZm9ybS1jb250cm9sLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWNBLE9BQU8sRUFHSCwyQkFBMkIsRUFDM0IseUJBQXlCLEVBQzVCLE1BQU0sOEJBQThCLENBQUM7QUFFdEMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUNILCtCQUErQixFQUMvQiwwQkFBMEIsRUFDN0IsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQ0gsb0NBQW9DLEVBQ3BDLCtCQUErQixFQUVsQyxNQUFNLG9DQUFvQyxDQUFDO0FBVzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRTtJQTJCSSw4Q0FBZ0MsaUJBQW9DLEVBQ3BDLHdCQUFrRCxFQUNsRCxhQUF1QyxFQUN2QyxpQkFBK0MsRUFDL0MsZ0JBQTZDLEVBQzdDLGVBQTJDO1FBTDNDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE4QjtRQUMvQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUE0QjtRQTlCbkUsY0FBUyxHQUFHLEtBQUss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R0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFbEY7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQUVPLGdGQUFpQyxHQUF6QztRQUVJLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSwwQkFBMEIsRUFBRTtZQUVwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUVsRjthQUFNO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDO0lBQ0wsMkNBQUM7QUFBRCxDQUFDLEFBOVVELElBOFVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFR5cGUsXG4gICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1Db250cm9sQ3VzdG9tRXZlbnQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sRXZlbnQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sRXZlbnRUeXBlLFxuICAgIGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnRcbn0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtZXZlbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS12YWx1ZS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQge1xuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQVJSQVksXG4gICAgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2Zvcm0tYXJyYXkvZHluYW1pYy1mb3JtLWFycmF5Lm1vZGVsXCI7XG5pbXBvcnQgeyBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YIH0gZnJvbSBcIi4uL21vZGVsL2NoZWNrYm94L2R5bmFtaWMtY2hlY2tib3gubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRFlOQU1JQ19GT1JNX0NPTlRST0xfSU5QVVRfVFlQRV9GSUxFLFxuICAgIERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfSU5QVVQsXG4gICAgRHluYW1pY0lucHV0TW9kZWxcbn0gZnJvbSBcIi4uL21vZGVsL2lucHV0L2R5bmFtaWMtaW5wdXQubW9kZWxcIjtcbmltcG9ydCB7XG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0LFxuICAgIER5bmFtaWNGb3JtQ29udHJvbExheW91dENvbnRleHQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0UGxhY2Vcbn0gZnJvbSBcIi4uL21vZGVsL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tY29udHJvbC1pbnRlcmZhY2VcIjtcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtTGF5b3V0LCBEeW5hbWljRm9ybUxheW91dFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tbGF5b3V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tY29tcG9uZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtUmVsYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tZ3JvdXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWFycmF5LmNvbXBvbmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfaGFzRm9jdXMgPSBmYWxzZTtcblxuICAgIGNvbnRleHQ6IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgICBob3N0Q2xhc3M6IHN0cmluZ1tdO1xuICAgIGtsYXNzOiBzdHJpbmc7XG4gICAgbGF5b3V0OiBEeW5hbWljRm9ybUxheW91dDtcbiAgICBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWw7XG5cbiAgICBjb250ZW50VGVtcGxhdGVMaXN0OiBRdWVyeUxpc3Q8RHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlPiB8IHVuZGVmaW5lZDtcbiAgICBpbnB1dFRlbXBsYXRlTGlzdDogUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBibHVyOiBFdmVudEVtaXR0ZXI8RHluYW1pY0Zvcm1Db250cm9sRXZlbnQ+O1xuICAgIGNoYW5nZTogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PjtcbiAgICBjdXN0b21FdmVudDogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PiB8IHVuZGVmaW5lZDtcbiAgICBmb2N1czogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PjtcblxuICAgIGNvbXBvbmVudFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RHluYW1pY0Zvcm1Db250cm9sPjtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50U3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgY29udHJvbExheW91dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0O1xuICAgIHByb3RlY3RlZCBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGxheW91dFNlcnZpY2U6IER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25TZXJ2aWNlOiBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY29tcG9uZW50U2VydmljZTogRHluYW1pY0Zvcm1Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVsYXRpb25TZXJ2aWNlOiBEeW5hbWljRm9ybVJlbGF0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgICAgICBjb25zdCBncm91cENoYW5nZSA9IChjaGFuZ2VzIGFzIFBpY2s8U2ltcGxlQ2hhbmdlcywgXCJncm91cFwiPikuZ3JvdXA7XG4gICAgICAgIGNvbnN0IGxheW91dENoYW5nZSA9IChjaGFuZ2VzIGFzIFBpY2s8U2ltcGxlQ2hhbmdlcywgXCJsYXlvdXRcIj4pLmxheW91dDtcbiAgICAgICAgY29uc3QgbW9kZWxDaGFuZ2UgPSAoY2hhbmdlcyBhcyBQaWNrPFNpbXBsZUNoYW5nZXMsIFwibW9kZWxcIj4pLm1vZGVsO1xuXG4gICAgICAgIGlmIChsYXlvdXRDaGFuZ2UgfHwgbW9kZWxDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXlvdXRPck1vZGVsQ2hhbmdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZWxDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdyb3VwQ2hhbmdlIHx8IG1vZGVsQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uR3JvdXBPck1vZGVsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgICAgICB0aGlzLmRlc3Ryb3lGb3JtQ29udHJvbENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IGNvbXBvbmVudFR5cGUoKTogVHlwZTxEeW5hbWljRm9ybUNvbnRyb2w+IHwgbnVsbDtcblxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRTZXJ2aWNlLmdldEVsZW1lbnRJZCh0aGlzLm1vZGVsKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNGb2N1cztcbiAgICB9XG5cbiAgICBnZXQgaXNJbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLmludmFsaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5jcmVhdGVFcnJvck1lc3NhZ2VzKHRoaXMuY29udHJvbCwgdGhpcy5tb2RlbCk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dFcnJvck1lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5zaG93RXJyb3JNZXNzYWdlcyh0aGlzLmNvbnRyb2wsIHRoaXMubW9kZWwsIHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cblxuICAgIGdldCBoYXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMubW9kZWwubGFiZWwpO1xuICAgIH1cblxuICAgIGdldCBoYXNIaW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNTdHJpbmcoKHRoaXMubW9kZWwgYXMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxhbnk+KS5oaW50KTtcbiAgICB9XG5cbiAgICBnZXQgaGludCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1vZGVsIGFzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWw8YW55PikuaGludCA/PyBudWxsO1xuICAgIH1cblxuICAgIGdldCBpc0NoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50eXBlID09PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YO1xuICAgIH1cblxuICAgIGdldCB0ZW1wbGF0ZXMoKTogUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFRlbXBsYXRlTGlzdCAhPT0gdW5kZWZpbmVkID8gdGhpcy5pbnB1dFRlbXBsYXRlTGlzdCA6IHRoaXMuY29udGVudFRlbXBsYXRlTGlzdDtcbiAgICB9XG5cbiAgICBnZXQgc3RhcnRUZW1wbGF0ZSgpOiBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50eXBlICE9PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZID9cbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS5nZXRTdGFydFRlbXBsYXRlKHRoaXMubW9kZWwsIHRoaXMudGVtcGxhdGVzKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgZW5kVGVtcGxhdGUoKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudHlwZSAhPT0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9BUlJBWSA/XG4gICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UuZ2V0RW5kVGVtcGxhdGUodGhpcy5tb2RlbCwgdGhpcy50ZW1wbGF0ZXMpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldENsYXNzKGNvbnRleHQ6IER5bmFtaWNGb3JtQ29udHJvbExheW91dENvbnRleHQsIHBsYWNlOiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRQbGFjZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dFNlcnZpY2UuZ2V0Q2xhc3ModGhpcy5jb250cm9sTGF5b3V0LCBjb250ZXh0LCBwbGFjZSk7XG4gICAgfVxuXG4gICAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRSZWYgJiYgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiAoY29tcG9uZW50IGluc3RhbmNlb2YgRHluYW1pY0Zvcm1Hcm91cENvbXBvbmVudCB8fCBjb21wb25lbnQgaW5zdGFuY2VvZiBEeW5hbWljRm9ybUFycmF5Q29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUZvcm1Db250cm9sQ29tcG9uZW50KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLmNvbXBvbmVudFR5cGU7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFR5cGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5mb3JtTGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG4gICAgICAgICAgICBjb21wb25lbnQuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgICAgICAgY29tcG9uZW50LmxheW91dCA9IHRoaXMuY29udHJvbExheW91dDtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tb2RlbCA9IHRoaXMubW9kZWw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC50ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTdWJzY3JpcHRpb25zLnB1c2goY29tcG9uZW50LmJsdXIuc3Vic2NyaWJlKCgkZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkJsdXIoJGV2ZW50KSkpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTdWJzY3JpcHRpb25zLnB1c2goY29tcG9uZW50LmNoYW5nZS5zdWJzY3JpYmUoKCRldmVudDogYW55KSA9PiB0aGlzLm9uQ2hhbmdlKCRldmVudCkpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaXB0aW9ucy5wdXNoKGNvbXBvbmVudC5mb2N1cy5zdWJzY3JpYmUoKCRldmVudDogYW55KSA9PiB0aGlzLm9uRm9jdXMoJGV2ZW50KSkpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmN1c3RvbUV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmN1c3RvbUV2ZW50LnN1YnNjcmliZSgoJGV2ZW50OiBhbnkpID0+IHRoaXMub25DdXN0b21FdmVudCgkZXZlbnQpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtQ29udHJvbENvbXBvbmVudFJlZih0aGlzLmNvbXBvbmVudFJlZik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGVzdHJveUZvcm1Db250cm9sQ29tcG9uZW50KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlckZvcm1Db250cm9sQ29tcG9uZW50UmVmKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50OiBhbnksIHR5cGU6IHN0cmluZyk6IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IHtcbiAgICAgICAgcmV0dXJuIHskZXZlbnQsIGNvbnRleHQ6IHRoaXMuY29udGV4dCwgY29udHJvbDogdGhpcy5jb250cm9sLCBncm91cDogdGhpcy5ncm91cCwgbW9kZWw6IHRoaXMubW9kZWwsIHR5cGV9O1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50U3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIG9uQ29udHJvbFZhbHVlQ2hhbmdlcyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsIGluc3RhbmNlb2YgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbCAmJiB0aGlzLm1vZGVsLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbFZhbHVlVXBkYXRlcyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbERpc2FibGVkVXBkYXRlcyhkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBkaXNhYmxlZCA/IHRoaXMuY29udHJvbC5kaXNhYmxlKCkgOiB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgb25MYXlvdXRPck1vZGVsQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2xMYXlvdXQgPSB0aGlzLmxheW91dFNlcnZpY2UuZmluZEJ5TW9kZWwodGhpcy5tb2RlbCwgdGhpcy5sYXlvdXQpID8/IHRoaXMubW9kZWwubGF5b3V0IGFzIER5bmFtaWNGb3JtQ29udHJvbExheW91dDtcbiAgICAgICAgdGhpcy5rbGFzcyA9IGAke0FycmF5LmlzQXJyYXkodGhpcy5ob3N0Q2xhc3MpID8gdGhpcy5ob3N0Q2xhc3Muam9pbihcIiBcIikgOiBcIlwifSAke3RoaXMubGF5b3V0U2VydmljZS5nZXRIb3N0Q2xhc3ModGhpcy5jb250cm9sTGF5b3V0KX1gO1xuICAgIH1cblxuICAgIG9uTW9kZWxDaGFuZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVzdHJveUZvcm1Db250cm9sQ29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUNvbnRyb2xDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICBvbkdyb3VwT3JNb2RlbENoYW5nZSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5tb2RlbCkge1xuXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmdyb3VwLmdldCh0aGlzLm1vZGVsLmlkKSBhcyBGb3JtQ29udHJvbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLm9uQ29udHJvbFZhbHVlQ2hhbmdlcyh2YWx1ZSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5tb2RlbC5kaXNhYmxlZENoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMub25Nb2RlbERpc2FibGVkVXBkYXRlcyh2YWx1ZSkpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwgaW5zdGFuY2VvZiBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWwgYXMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxhbnk+O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLm9uTW9kZWxWYWx1ZVVwZGF0ZXModmFsdWUpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLnJlbGF0aW9ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCguLi50aGlzLnJlbGF0aW9uU2VydmljZS5zdWJzY3JpYmVSZWxhdGlvbnModGhpcy5tb2RlbCwgdGhpcy5ncm91cCwgdGhpcy5jb250cm9sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSgkZXZlbnQ6IEV2ZW50IHwgRHluYW1pY0Zvcm1Db250cm9sRXZlbnQgfCBhbnkpOiB2b2lkIHtcblxuICAgICAgICBpZiAoJGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpIHsgLy8gbmF0aXZlIEhUTUw1IGNoYW5nZSBldmVudFxuXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC50eXBlID09PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0lOUFVUKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWwgYXMgRHluYW1pY0lucHV0TW9kZWw7XG5cbiAgICAgICAgICAgICAgICBpZiAobW9kZWwuaW5wdXRUeXBlID09PSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9JTlBVVF9UWVBFX0ZJTEUpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IGFueSA9ICRldmVudC50YXJnZXQgPz8gJGV2ZW50LnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZmlsZXMgPSBpbnB1dEVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlYXRlRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50LCBEeW5hbWljRm9ybUNvbnRyb2xFdmVudFR5cGUuQ2hhbmdlKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChpc0R5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudCkpIHsgLy8gZXZlbnQgYnlwYXNzXG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoJGV2ZW50KTtcblxuICAgICAgICB9IGVsc2UgeyAvLyBjdXN0b20gbGlicmFyeSB2YWx1ZSBjaGFuZ2UgZXZlbnRcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUR5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudCwgRHluYW1pY0Zvcm1Db250cm9sRXZlbnRUeXBlLkNoYW5nZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CbHVyKCRldmVudDogRm9jdXNFdmVudCB8IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IHwgYW55KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50KSkgeyAvLyBldmVudCBieXBhc3NcblxuICAgICAgICAgICAgdGhpcy5ibHVyLmVtaXQoJGV2ZW50KTtcblxuICAgICAgICB9IGVsc2UgeyAvLyBuYXRpdmUgSFRNTCA1IG9yIFVJIGxpYnJhcnkgYmx1ciBldmVudFxuXG4gICAgICAgICAgICB0aGlzLl9oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ibHVyLmVtaXQodGhpcy5jcmVhdGVEeW5hbWljRm9ybUNvbnRyb2xFdmVudCgkZXZlbnQsIER5bmFtaWNGb3JtQ29udHJvbEV2ZW50VHlwZS5CbHVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCB8IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IHwgYW55KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50KSkgeyAvLyBldmVudCBieXBhc3NcblxuICAgICAgICAgICAgdGhpcy5mb2N1cy5lbWl0KCRldmVudCk7XG5cbiAgICAgICAgfSBlbHNlIHsgLy8gbmF0aXZlIEhUTUwgNSBvciBVSSBsaWJyYXJ5IGZvY3VzIGV2ZW50XG5cbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMuZW1pdCh0aGlzLmNyZWF0ZUR5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudCwgRHluYW1pY0Zvcm1Db250cm9sRXZlbnRUeXBlLkZvY3VzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkN1c3RvbUV2ZW50KCRldmVudDogRHluYW1pY0Zvcm1Db250cm9sRXZlbnQgfCBEeW5hbWljRm9ybUNvbnRyb2xDdXN0b21FdmVudCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzLmN1c3RvbUV2ZW50IGFzIEV2ZW50RW1pdHRlcjxEeW5hbWljRm9ybUNvbnRyb2xFdmVudD47XG5cbiAgICAgICAgaWYgKGlzRHluYW1pY0Zvcm1Db250cm9sRXZlbnQoJGV2ZW50KSkgeyAvLyBjaGlsZCBldmVudCBieXBhc3NcblxuICAgICAgICAgICAgZW1pdHRlci5lbWl0KCRldmVudCk7XG5cbiAgICAgICAgfSBlbHNlIHsgLy8gbmF0aXZlIFVJIGxpYnJhcnkgY3VzdG9tIGV2ZW50XG5cbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCh0aGlzLmNyZWF0ZUR5bmFtaWNGb3JtQ29udHJvbEV2ZW50KCRldmVudC5jdXN0b21FdmVudCwgJGV2ZW50LmN1c3RvbUV2ZW50VHlwZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckZvcm1Db250cm9sQ29tcG9uZW50UmVmKHJlZjogQ29tcG9uZW50UmVmPER5bmFtaWNGb3JtQ29udHJvbD4pOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwpIHtcblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTZXJ2aWNlLnJlZ2lzdGVyRm9ybUNvbnRyb2wodGhpcy5tb2RlbCwgcmVmLCB0aGlzLmNvbnRleHQuaW5kZXgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFNlcnZpY2UucmVnaXN0ZXJGb3JtQ29udHJvbCh0aGlzLm1vZGVsLCByZWYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnJlZ2lzdGVyRm9ybUNvbnRyb2xDb21wb25lbnRSZWYoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50U2VydmljZS51bnJlZ2lzdGVyRm9ybUNvbnRyb2wodGhpcy5tb2RlbC5pZCwgdGhpcy5jb250ZXh0LmluZGV4KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRTZXJ2aWNlLnVucmVnaXN0ZXJGb3JtQ29udHJvbCh0aGlzLm1vZGVsLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==