import { QueryList, ElementRef, Renderer2, Input, Directive, TemplateRef, InjectionToken, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, Injector, INJECTOR, NgModule } from '@angular/core';
import { __decorate, __metadata, __param } from 'tslib';
import { BehaviorSubject, isObservable, of, merge } from 'rxjs';
import 'reflect-metadata';
import { tap, map, startWith } from 'rxjs/operators';
import { Validators, NG_VALIDATORS, NG_ASYNC_VALIDATORS, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

function isBoolean(value) {
    return typeof value === "boolean";
}
// tslint:disable-next-line:ban-types
function isFunction(value) {
    return typeof value === "function";
}
function isNumber(value) {
    return typeof value === "number";
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isString(value) {
    return typeof value === "string";
}

class DynamicFormControlComponent {
    constructor(layoutService, validationService) {
        this.layoutService = layoutService;
        this.validationService = validationService;
        this._hasFocus = false;
    }
    get control() {
        const control = this.group.get(this.model.id);
        if (control === null) {
            throw new Error(`form group does not contain an abstract control with id ${this.model.id}`);
        }
        return control;
    }
    get id() {
        return this.layoutService.getElementId(this.model);
    }
    get hasFocus() {
        return this._hasFocus;
    }
    get isInvalid() {
        return this.control.invalid;
    }
    get isValid() {
        return this.control.valid;
    }
    get errorMessages() {
        return this.validationService.createErrorMessages(this.control, this.model);
    }
    get showErrorMessages() {
        return this.validationService.showErrorMessages(this.control, this.model, this.hasFocus);
    }
    getClass(context, place, model = this.model) {
        var _a;
        const controlLayout = model === this.model ? this.layout : (_a = this.layoutService.findByModel(model, this.formLayout)) !== null && _a !== void 0 ? _a : model.layout;
        return this.layoutService.getClass(controlLayout, context, place);
    }
    onBlur($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = false;
        this.blur.emit($event);
    }
    onChange($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.change.emit($event);
    }
    onCustomEvent($event, type = null, bypass = false) {
        if (bypass) {
            this.customEvent.emit($event);
        }
        else if (isString(type)) {
            this.customEvent.emit({ customEvent: $event, customEventType: type });
        }
    }
    onFocus($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = true;
        this.focus.emit($event);
    }
}

class DynamicFormArrayComponent extends DynamicFormControlComponent {
    get array() {
        return this.control;
    }
    get startTemplate() {
        return this.layoutService.getStartTemplate(this.model, this.templates);
    }
    get endTemplate() {
        return this.layoutService.getEndTemplate(this.model, this.templates);
    }
    markForCheck() {
        if (this.components instanceof QueryList) {
            this.components.forEach(component => component.markForCheck());
        }
    }
}

class DynamicFormGroupComponent extends DynamicFormControlComponent {
    markForCheck() {
        if (this.components instanceof QueryList) {
            this.components.forEach(component => component.markForCheck());
        }
    }
}

class DynamicFormComponent {
    constructor(changeDetectorRef, componentService) {
        this.changeDetectorRef = changeDetectorRef;
        this.componentService = componentService;
    }
    ngOnInit() {
        this.componentService.registerForm(this);
    }
    ngOnDestroy() {
        this.componentService.unregisterForm(this);
    }
    trackByFn(_index, model) {
        return model.id;
    }
    markForCheck() {
        this.changeDetectorRef.markForCheck();
        if (this.components instanceof QueryList) {
            this.components.forEach(component => component.markForCheck());
        }
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    onBlur($event) {
        this.blur.emit($event);
    }
    onChange($event) {
        this.change.emit($event);
    }
    onFocus($event) {
        this.focus.emit($event);
    }
    onCustomEvent($event, customEventEmitter) {
        customEventEmitter.emit($event);
    }
}

var DynamicFormControlEventType;
(function (DynamicFormControlEventType) {
    DynamicFormControlEventType["Blur"] = "blur";
    DynamicFormControlEventType["Change"] = "change";
    DynamicFormControlEventType["Focus"] = "focus";
})(DynamicFormControlEventType || (DynamicFormControlEventType = {}));
function isDynamicFormControlEvent($event) {
    return isObject($event) && $event.hasOwnProperty("$event");
}

var DynamicFormHook;
(function (DynamicFormHook) {
    DynamicFormHook["Blur"] = "blur";
    DynamicFormHook["Change"] = "change";
    DynamicFormHook["Submit"] = "submit";
})(DynamicFormHook || (DynamicFormHook = {}));

const METADATA_KEY_SERIALIZABLE = "SERIALIZABLE";
function serializable(name) {
    return (target, key) => {
        Reflect.defineMetadata(METADATA_KEY_SERIALIZABLE, { key, name: name || key }, target, key);
    };
}
function getSerializables(target) {
    const serializables = [];
    for (const key in target) {
        const metadata = Reflect.getMetadata(METADATA_KEY_SERIALIZABLE, target, key);
        if (metadata) {
            serializables.push(metadata);
        }
    }
    return serializables;
}
function serialize(target, prototype) {
    return getSerializables(prototype || target).reduce((prev, prop) => {
        prev[prop.name] = target[prop.key];
        return prev;
    }, {});
}

class DynamicFormControlModel {
    constructor(config, layout = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.parent = null;
        this.asyncValidators = (_a = config.asyncValidators) !== null && _a !== void 0 ? _a : null;
        this.errorMessages = (_b = config.errorMessages) !== null && _b !== void 0 ? _b : null;
        this.hidden = isBoolean(config.hidden) ? config.hidden : false;
        this.id = config.id;
        this.label = (_c = config.label) !== null && _c !== void 0 ? _c : null;
        this.labelTooltip = (_d = config.labelTooltip) !== null && _d !== void 0 ? _d : null;
        this.controlTooltip = (_e = config.controlTooltip) !== null && _e !== void 0 ? _e : null;
        this.layout = layout;
        this.name = (_f = config.name) !== null && _f !== void 0 ? _f : config.id;
        this.relations = Array.isArray(config.relations) ? config.relations : [];
        this.updateOn = isString(config.updateOn) ? config.updateOn : null;
        this.validators = (_g = config.validators) !== null && _g !== void 0 ? _g : null;
        this.disabled$ = new BehaviorSubject(isBoolean(config.disabled) ? config.disabled : false);
        this.disabled$.subscribe(disabled => this._disabled = disabled);
        this.disabledChanges = this.disabled$.asObservable();
    }
    get disabled() {
        return this.disabled$.getValue();
    }
    set disabled(disabled) {
        this.disabled$.next(disabled);
    }
    get hasErrorMessages() {
        return isObject(this.errorMessages);
    }
    toJSON() {
        return serialize(this);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "asyncValidators", void 0);
__decorate([
    serializable("disabled"),
    __metadata("design:type", Boolean)
], DynamicFormControlModel.prototype, "_disabled", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "errorMessages", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFormControlModel.prototype, "hidden", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "id", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "label", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "labelTooltip", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "controlTooltip", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "layout", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "name", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormControlModel.prototype, "relations", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormControlModel.prototype, "updateOn", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormControlModel.prototype, "validators", void 0);

class DynamicFormValueControlModel extends DynamicFormControlModel {
    constructor(config, layout) {
        var _a, _b, _c;
        super(config, layout);
        this.additional = isObject(config.additional) ? config.additional : null;
        this.hint = (_a = config.hint) !== null && _a !== void 0 ? _a : null;
        this.required = isBoolean(config.required) ? config.required : false;
        this.tabIndex = (_b = config.tabIndex) !== null && _b !== void 0 ? _b : null;
        this.value$ = new BehaviorSubject((_c = config.value) !== null && _c !== void 0 ? _c : null);
        this.value$.subscribe(value => this._value = value);
        this.valueChanges = this.value$.asObservable();
    }
    get value() {
        return this.value$.getValue();
    }
    set value(value) {
        this.value$.next(value);
    }
    getAdditional(key, defaultValue) {
        return this.additional !== null && this.additional.hasOwnProperty(key) ? this.additional[key] : defaultValue;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormValueControlModel.prototype, "additional", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormValueControlModel.prototype, "hint", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFormValueControlModel.prototype, "required", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormValueControlModel.prototype, "tabIndex", void 0);
__decorate([
    serializable("value"),
    __metadata("design:type", Object)
], DynamicFormValueControlModel.prototype, "_value", void 0);

class DynamicFormArrayGroupModel {
    constructor(context, group = [], index = -1) {
        this.$implicit = this;
        this.context = context;
        this.group = group;
        this.index = index;
    }
    get parent() {
        return this.context;
    }
    get(index) {
        return this.group[index];
    }
    toJSON() {
        return serialize(this);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormArrayGroupModel.prototype, "index", void 0);
const DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
class DynamicFormArrayModel extends DynamicFormControlModel {
    constructor(config, layout) {
        var _a, _b;
        super(config, layout);
        this.groups = [];
        this.type = DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
        if (isFunction(config.groupFactory)) {
            this.groupFactory = config.groupFactory;
        }
        else {
            throw new Error("group factory function must be specified for DynamicFormArrayModel");
        }
        this.groupAsyncValidators = (_a = config.groupAsyncValidators) !== null && _a !== void 0 ? _a : null;
        this.groupPrototype = this.groupFactory();
        this.groupValidators = (_b = config.groupValidators) !== null && _b !== void 0 ? _b : null;
        this.initialCount = isNumber(config.initialCount) ? config.initialCount : 1;
        if (Array.isArray(config.groups)) {
            config.groups.forEach((arrayGroup, index) => {
                var _a;
                this.groups.push(new DynamicFormArrayGroupModel(this, arrayGroup.group, (_a = arrayGroup.index) !== null && _a !== void 0 ? _a : index));
            });
        }
        else {
            for (let index = 0; index < this.initialCount; index++) {
                this.addGroup();
            }
        }
    }
    updateGroupIndex() {
        this.groups.forEach((group, index) => group.index = index);
    }
    get size() {
        return this.groups.length;
    }
    get(index) {
        return this.groups[index];
    }
    addGroup() {
        return this.insertGroup(this.groups.length);
    }
    insertGroup(index) {
        let group = new DynamicFormArrayGroupModel(this, this.groupFactory());
        this.groups.splice(index, 0, group);
        this.updateGroupIndex();
        return group;
    }
    moveGroup(index, step) {
        this.groups.splice(index + step, 0, ...this.groups.splice(index, 1));
        this.updateGroupIndex();
    }
    removeGroup(index) {
        this.groups.splice(index, 1);
        this.updateGroupIndex();
    }
    clear() {
        this.groups.splice(0);
        this.updateGroupIndex();
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormArrayModel.prototype, "groupAsyncValidators", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormArrayModel.prototype, "groupValidators", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayModel.prototype, "groups", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormArrayModel.prototype, "initialCount", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayModel.prototype, "groupPrototype", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormArrayModel.prototype, "type", void 0);

class DynamicCheckControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        var _a;
        super(config, layout);
        this.labelPosition = (_a = config.labelPosition) !== null && _a !== void 0 ? _a : null;
        this.checked = isBoolean(this.value) ? this.value : false;
    }
    get checked() {
        return this.value;
    }
    set checked(checked) {
        this.value = checked;
    }
    toggle() {
        this.checked = !this.checked;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicCheckControlModel.prototype, "labelPosition", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX = "CHECKBOX";
class DynamicCheckboxModel extends DynamicCheckControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
        this.indeterminate = isBoolean(config.indeterminate) ? config.indeterminate : false;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicCheckboxModel.prototype, "indeterminate", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicCheckboxModel.prototype, "type", void 0);

class DynamicInputControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        var _a, _b, _c, _d;
        super(config, layout);
        this.autoComplete = (_a = config.autoComplete) !== null && _a !== void 0 ? _a : "on";
        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.maxLength = isNumber(config.maxLength) ? config.maxLength : null;
        this.minLength = isNumber(config.minLength) ? config.minLength : null;
        this.placeholder = (_b = config.placeholder) !== null && _b !== void 0 ? _b : "";
        this.prefix = (_c = config.prefix) !== null && _c !== void 0 ? _c : null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.spellCheck = isBoolean(config.spellCheck) ? config.spellCheck : false;
        this.suffix = (_d = config.suffix) !== null && _d !== void 0 ? _d : null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputControlModel.prototype, "autoComplete", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputControlModel.prototype, "autoFocus", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicInputControlModel.prototype, "maxLength", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicInputControlModel.prototype, "minLength", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputControlModel.prototype, "placeholder", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputControlModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputControlModel.prototype, "readOnly", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputControlModel.prototype, "spellCheck", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputControlModel.prototype, "suffix", void 0);

function maskToString(mask) {
    if (isString(mask)) {
        return mask;
    }
    else if (mask instanceof RegExp) {
        return mask.toString();
    }
    else if (Array.isArray(mask)) {
        return mask.map(value => maskToString(value));
    }
    return null;
}
function maskFromString(mask) {
    if (isString(mask)) {
        const isRegExp = mask.startsWith("/") && mask.endsWith("/");
        return isRegExp ? new RegExp(mask.slice(1, mask.length - 1)) : mask;
    }
    else if (Array.isArray(mask)) {
        return mask.map(value => maskFromString(value));
    }
    return null;
}
function parseReviver(_key, value) {
    const regexDateISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|([+\-])([\d|:]*))?$/;
    return isString(value) && regexDateISO.test(value) ? new Date(value) : value;
}

const DYNAMIC_FORM_CONTROL_TYPE_INPUT = "INPUT";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_COLOR = "color";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE = "date";
//export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME = "datetime";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME_LOCAL = "datetime-local";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL = "email";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE = "file";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_MONTH = "month";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER = "number";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_PASSWORD = "password";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_RANGE = "range";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_SEARCH = "search";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL = "tel";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT = "text";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_TIME = "time";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_URL = "url";
const DYNAMIC_FORM_CONTROL_INPUT_TYPE_WEEK = "week";
class DynamicInputModel extends DynamicInputControlModel {
    constructor(config, layout) {
        var _a, _b, _c, _d;
        super(config, layout);
        this.files = null;
        this.list$ = null;
        this._list = null;
        this._listId = null;
        this.type = DYNAMIC_FORM_CONTROL_TYPE_INPUT;
        this.accept = (_a = config.accept) !== null && _a !== void 0 ? _a : null;
        this.inputType = (_b = config.inputType) !== null && _b !== void 0 ? _b : DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT;
        this.mask = (_c = config.mask) !== null && _c !== void 0 ? _c : null;
        this.max = config.max !== undefined ? config.max : null;
        this.min = config.min !== undefined ? config.min : null;
        this.multiple = isBoolean(config.multiple) ? config.multiple : null;
        this.pattern = (_d = config.pattern) !== null && _d !== void 0 ? _d : null;
        this.step = isNumber(config.step) ? config.step : null;
        if (config.list !== undefined) {
            this.list = config.list;
            this._listId = `${this.id}List`;
        }
    }
    get listId() {
        return this._listId;
    }
    get hasList() {
        return isObservable(this.list$);
    }
    set list(list) {
        if (Array.isArray(list)) {
            this._list = list;
            this.list$ = of(this._list);
        }
        else if (isObservable(list)) {
            this.list$ = list.pipe(tap(list => this._list = list));
        }
        else {
            this._list = null;
            this.list$ = null;
        }
    }
    toJSON() {
        const json = super.toJSON();
        if (this.mask !== null) {
            json.mask = isFunction(this.mask) ? this.mask : maskToString(this.mask);
        }
        return json;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputModel.prototype, "accept", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputModel.prototype, "inputType", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "mask", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicInputModel.prototype, "min", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicInputModel.prototype, "multiple", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputModel.prototype, "pattern", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicInputModel.prototype, "step", void 0);
__decorate([
    serializable("list"),
    __metadata("design:type", Array)
], DynamicInputModel.prototype, "_list", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicInputModel.prototype, "type", void 0);

class DynamicFormControlContainerComponent {
    constructor(changeDetectorRef, componentFactoryResolver, layoutService, validationService, componentService, relationService) {
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
    ngOnChanges(changes) {
        const groupChange = changes.group;
        const layoutChange = changes.layout;
        const modelChange = changes.model;
        if (layoutChange || modelChange) {
            this.onLayoutOrModelChange();
        }
        if (modelChange) {
            this.onModelChange();
        }
        if (groupChange || modelChange) {
            this.onGroupOrModelChange();
        }
    }
    ngOnDestroy() {
        this.destroyFormControlComponent();
        this.unsubscribe();
    }
    get id() {
        return this.layoutService.getElementId(this.model);
    }
    get hasFocus() {
        return this._hasFocus;
    }
    get isInvalid() {
        return this.control.invalid;
    }
    get isValid() {
        return this.control.valid;
    }
    get errorMessages() {
        return this.validationService.createErrorMessages(this.control, this.model);
    }
    get showErrorMessages() {
        return this.validationService.showErrorMessages(this.control, this.model, this.hasFocus);
    }
    get hasLabel() {
        return isString(this.model.label);
    }
    get hasHint() {
        return isString(this.model.hint);
    }
    get hint() {
        var _a;
        return (_a = this.model.hint) !== null && _a !== void 0 ? _a : null;
    }
    get isCheckbox() {
        return this.model.type === DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
    }
    get templates() {
        return this.inputTemplateList !== undefined ? this.inputTemplateList : this.contentTemplateList;
    }
    get startTemplate() {
        return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
            this.layoutService.getStartTemplate(this.model, this.templates) : undefined;
    }
    get endTemplate() {
        return this.model.type !== DYNAMIC_FORM_CONTROL_TYPE_ARRAY ?
            this.layoutService.getEndTemplate(this.model, this.templates) : undefined;
    }
    getClass(context, place) {
        return this.layoutService.getClass(this.controlLayout, context, place);
    }
    markForCheck() {
        this.changeDetectorRef.markForCheck();
        const component = this.componentRef && this.componentRef.instance;
        if (component && (component instanceof DynamicFormGroupComponent || component instanceof DynamicFormArrayComponent)) {
            component.markForCheck();
        }
    }
    createFormControlComponent() {
        const componentType = this.componentType;
        if (componentType !== null) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentViewContainerRef.clear();
            this.componentRef = this.componentViewContainerRef.createComponent(componentFactory);
            const component = this.componentRef.instance;
            component.formLayout = this.layout;
            component.group = this.group;
            component.layout = this.controlLayout;
            component.model = this.model;
            if (this.templates) {
                component.templates = this.templates;
            }
            this.componentSubscriptions.push(component.blur.subscribe(($event) => this.onBlur($event)));
            this.componentSubscriptions.push(component.change.subscribe(($event) => this.onChange($event)));
            this.componentSubscriptions.push(component.focus.subscribe(($event) => this.onFocus($event)));
            if (component.customEvent !== undefined) {
                this.componentSubscriptions.push(component.customEvent.subscribe(($event) => this.onCustomEvent($event)));
            }
            this.registerFormControlComponentRef(this.componentRef);
        }
    }
    destroyFormControlComponent() {
        if (this.componentRef) {
            this.componentSubscriptions.forEach(subscription => subscription.unsubscribe());
            this.componentSubscriptions = [];
            this.unregisterFormControlComponentRef();
            this.componentRef.destroy();
        }
    }
    createDynamicFormControlEvent($event, type) {
        return { $event, context: this.context, control: this.control, group: this.group, model: this.model, type };
    }
    unsubscribe() {
        // this.componentSubscriptions.forEach(subscription => subscription.unsubscribe());
        // this.componentSubscriptions = [];
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.subscriptions = [];
    }
    onControlValueChanges(value) {
        if (this.model instanceof DynamicFormValueControlModel && this.model.value !== value) {
            this.model.value = value;
        }
    }
    onModelValueUpdates(value) {
        if (this.control.value !== value) {
            this.control.setValue(value);
        }
    }
    onModelDisabledUpdates(disabled) {
        disabled ? this.control.disable() : this.control.enable();
    }
    onLayoutOrModelChange() {
        var _a;
        this.controlLayout = (_a = this.layoutService.findByModel(this.model, this.layout)) !== null && _a !== void 0 ? _a : this.model.layout;
        this.klass = `${Array.isArray(this.hostClass) ? this.hostClass.join(" ") : ""} ${this.layoutService.getHostClass(this.controlLayout)}`;
    }
    onModelChange() {
        this.destroyFormControlComponent();
        this.createFormControlComponent();
    }
    onGroupOrModelChange() {
        if (this.model) {
            this.unsubscribe();
            if (this.group) {
                this.control = this.group.get(this.model.id);
                this.subscriptions.push(this.control.valueChanges.subscribe(value => this.onControlValueChanges(value)));
            }
            this.subscriptions.push(this.model.disabledChanges.subscribe(value => this.onModelDisabledUpdates(value)));
            if (this.model instanceof DynamicFormValueControlModel) {
                const model = this.model;
                this.subscriptions.push(model.valueChanges.subscribe(value => this.onModelValueUpdates(value)));
            }
            if (this.model.relations.length > 0) {
                this.subscriptions.push(...this.relationService.subscribeRelations(this.model, this.group, this.control));
            }
        }
    }
    onChange($event) {
        var _a;
        if ($event instanceof Event) { // native HTML5 change event
            if (this.model.type === DYNAMIC_FORM_CONTROL_TYPE_INPUT) {
                const model = this.model;
                if (model.inputType === DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE) {
                    const inputElement = (_a = $event.target) !== null && _a !== void 0 ? _a : $event.srcElement;
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
    }
    onBlur($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            this.blur.emit($event);
        }
        else { // native HTML 5 or UI library blur event
            this._hasFocus = false;
            this.blur.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Blur));
        }
    }
    onFocus($event) {
        if (isDynamicFormControlEvent($event)) { // event bypass
            this.focus.emit($event);
        }
        else { // native HTML 5 or UI library focus event
            this._hasFocus = true;
            this.focus.emit(this.createDynamicFormControlEvent($event, DynamicFormControlEventType.Focus));
        }
    }
    onCustomEvent($event) {
        const emitter = this.customEvent;
        if (isDynamicFormControlEvent($event)) { // child event bypass
            emitter.emit($event);
        }
        else { // native UI library custom event
            emitter.emit(this.createDynamicFormControlEvent($event.customEvent, $event.customEventType));
        }
    }
    registerFormControlComponentRef(ref) {
        if (this.context instanceof DynamicFormArrayGroupModel) {
            this.componentService.registerFormControl(this.model, ref, this.context.index);
        }
        else {
            this.componentService.registerFormControl(this.model, ref);
        }
    }
    unregisterFormControlComponentRef() {
        if (this.context instanceof DynamicFormArrayGroupModel) {
            this.componentService.unregisterFormControl(this.model.id, this.context.index);
        }
        else {
            this.componentService.unregisterFormControl(this.model.id);
        }
    }
}

class DynamicFormControlWithTemplateComponent extends DynamicFormControlComponent {
    constructor(layoutService, validationService) {
        super(layoutService, validationService);
        this.layoutService = layoutService;
        this.validationService = validationService;
    }
    ngAfterViewInit() {
        this.layoutService
            .filterTemplatesByModel(this.model, this.templates)
            .forEach(template => this.bindTemplate(template));
    }
    bindTemplate(template) {
        if (isString(template.as) && this.templateDirectives.has(template.as)) {
            const property = this.templateDirectives.get(template.as);
            this.viewChild[property] = this.mapTemplate(template);
        }
    }
}

let DynamicListDirective = class DynamicListDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        if (isString(this.listId)) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "list", this.listId);
        }
    }
};
DynamicListDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input("dynamicList"),
    __metadata("design:type", String)
], DynamicListDirective.prototype, "listId", void 0);
DynamicListDirective = __decorate([
    Directive({
        selector: "[dynamicList]"
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], DynamicListDirective);

var DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT;
(function (DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT) {
    DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT["Start"] = "START";
    DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT["End"] = "END";
})(DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT || (DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT = {}));
let DynamicTemplateDirective = class DynamicTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this.align = DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End;
        this.as = null;
    }
};
DynamicTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], DynamicTemplateDirective.prototype, "align", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DynamicTemplateDirective.prototype, "as", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DynamicTemplateDirective.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DynamicTemplateDirective.prototype, "modelId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DynamicTemplateDirective.prototype, "modelType", void 0);
DynamicTemplateDirective = __decorate([
    Directive({
        selector: "ng-template[modelId],ng-template[modelType]"
    }),
    __metadata("design:paramtypes", [TemplateRef])
], DynamicTemplateDirective);

class DynamicDateControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        var _a, _b, _c, _d;
        super(config, layout);
        this.format = (_a = config.format) !== null && _a !== void 0 ? _a : null;
        this.max = (_b = config.max) !== null && _b !== void 0 ? _b : null;
        this.min = (_c = config.min) !== null && _c !== void 0 ? _c : null;
        this.placeholder = (_d = config.placeholder) !== null && _d !== void 0 ? _d : null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDateControlModel.prototype, "format", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicDateControlModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicDateControlModel.prototype, "min", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDateControlModel.prototype, "placeholder", void 0);

class DynamicFileControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.multiple = isBoolean(config.multiple) ? config.multiple : false;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFileControlModel.prototype, "multiple", void 0);

class DynamicFormOption {
    constructor(config) {
        var _a;
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.label = (_a = config.label) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
    }
    get text() {
        return this.label;
    }
    set text(text) {
        this.label = text;
    }
    toJSON() {
        return serialize(this);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFormOption.prototype, "disabled", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormOption.prototype, "label", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormOption.prototype, "value", void 0);
class DynamicOptionControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        super(config, layout);
        this._options = [];
        this.options = config.options;
    }
    updateOptions$() {
        this.options$ = of(this.options);
    }
    set options(options) {
        if (Array.isArray(options)) {
            this._options = options.map(optionConfig => new DynamicFormOption(optionConfig));
            this.updateOptions$();
        }
        else if (isObservable(options)) {
            this.options$ = options.pipe(map(optionsConfig => {
                this._options = optionsConfig.map(optionConfig => new DynamicFormOption(optionConfig));
                return this._options;
            }));
        }
        else {
            this.updateOptions$();
        }
    }
    get options() {
        return this._options;
    }
    add(optionConfig) {
        return this.insert(this.options.length, optionConfig);
    }
    get(index) {
        return this.options[index];
    }
    insert(index, optionConfig) {
        const option = new DynamicFormOption(optionConfig);
        this.options.splice(index, 0, option);
        this.updateOptions$();
        return option;
    }
    remove(...indices) {
        indices.forEach(index => this.options.splice(index, 1));
        this.updateOptions$();
    }
}
__decorate([
    serializable("options"),
    __metadata("design:type", Array)
], DynamicOptionControlModel.prototype, "_options", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_GROUP = "GROUP";
class DynamicFormGroupModel extends DynamicFormControlModel {
    constructor(config, layout) {
        var _a;
        super(config, layout);
        this.group = [];
        this.type = DYNAMIC_FORM_CONTROL_TYPE_GROUP;
        this.group = Array.isArray(config.group) ? config.group : [];
        this.legend = (_a = config.legend) !== null && _a !== void 0 ? _a : null;
    }
    get(index) {
        return this.group[index];
    }
    set(index, controlModel) {
        this.group[index] = controlModel;
    }
    add(controlModel) {
        this.group.push(controlModel);
    }
    insert(index, controlModel) {
        this.group.splice(index, 0, controlModel);
    }
    move(index, step) {
        this.group.splice(index + step, 0, ...this.group.splice(index, 1));
    }
    remove(index) {
        this.group.splice(index, 1);
    }
    size() {
        return this.group.length;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormGroupModel.prototype, "legend", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormGroupModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP = "CHECKBOX_GROUP";
class DynamicCheckboxGroupModel extends DynamicFormGroupModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP;
    }
    check(...indices) {
        indices.forEach(index => this.group[index].checked = true);
    }
    uncheck(...indices) {
        indices.forEach(index => this.group[index].checked = false);
    }
    checkAll() {
        this.group.forEach(model => model.checked = true);
    }
    uncheckAll() {
        this.group.forEach(model => model.checked = false);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicCheckboxGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicCheckboxGroupModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER = "COLORPICKER";
class DynamicColorPickerModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER;
        this.format = isString(config.format) ? config.format : null;
        this.inline = isBoolean(config.inline) ? config.inline : false;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicColorPickerModel.prototype, "format", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicColorPickerModel.prototype, "inline", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicColorPickerModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";
class DynamicDatePickerModel extends DynamicDateControlModel {
    constructor(config, layout) {
        var _a, _b, _c;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER;
        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.focusedDate = (_a = config.focusedDate) !== null && _a !== void 0 ? _a : null;
        this.inline = isBoolean(config.inline) ? config.inline : false;
        this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.toggleIcon = isString(config.toggleIcon) ? config.toggleIcon : null;
        this.toggleLabel = isString(config.toggleLabel) ? config.toggleLabel : null;
        this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicDatePickerModel.prototype, "autoFocus", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicDatePickerModel.prototype, "focusedDate", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicDatePickerModel.prototype, "inline", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicDatePickerModel.prototype, "readOnly", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "suffix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "toggleIcon", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "toggleLabel", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_EDITOR = "EDITOR";
class DynamicEditorModel extends DynamicInputControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_EDITOR;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicEditorModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD = "FILE_UPLOAD";
class DynamicFileUploadModel extends DynamicFileControlModel {
    constructor(config, layout) {
        var _a, _b;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD;
        this.accept = Array.isArray(config.accept) ? config.accept : null;
        this.autoUpload = isBoolean(config.autoUpload) ? config.autoUpload : true;
        this.maxSize = isNumber(config.maxSize) ? config.maxSize : null;
        this.minSize = isNumber(config.minSize) ? config.minSize : null;
        this.removeUrl = (_a = config.removeUrl) !== null && _a !== void 0 ? _a : null;
        this.showFileList = isBoolean(config.showFileList) ? config.showFileList : true;
        this.url = (_b = config.url) !== null && _b !== void 0 ? _b : null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFileUploadModel.prototype, "accept", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFileUploadModel.prototype, "autoUpload", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFileUploadModel.prototype, "maxSize", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFileUploadModel.prototype, "minSize", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFileUploadModel.prototype, "removeUrl", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicFileUploadModel.prototype, "showFileList", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFileUploadModel.prototype, "url", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFileUploadModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP = "RADIO_GROUP";
class DynamicRadioGroupModel extends DynamicOptionControlModel {
    constructor(config, layout) {
        var _a;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP;
        this.legend = (_a = config.legend) !== null && _a !== void 0 ? _a : null;
    }
    select(index) {
        this.value = this.get(index).value;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicRadioGroupModel.prototype, "legend", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicRadioGroupModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_RATING = "RATING";
class DynamicRatingModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_RATING;
        this.max = isNumber(config.max) ? config.max : 10;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicRatingModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicRatingModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
class DynamicSelectModel extends DynamicOptionControlModel {
    constructor(config, layout) {
        var _a, _b, _c;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : Object.is;
        this.filterable = isBoolean(config.filterable) ? config.filterable : false;
        this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        this.placeholder = (_a = config.placeholder) !== null && _a !== void 0 ? _a : "";
        this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
    }
    select(...indices) {
        this.value = this.multiple ? indices.map(index => this.get(index).value) : this.get(indices[0]).value;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSelectModel.prototype, "filterable", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSelectModel.prototype, "multiple", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "placeholder", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "suffix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_SLIDER = "SLIDER";
class DynamicSliderModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SLIDER;
        this.max = isNumber(config.max) ? config.max : 10;
        this.min = isNumber(config.min) ? config.min : 0;
        this.step = isNumber(config.step) ? config.step : 1;
        this.vertical = isBoolean(config.vertical) ? config.vertical : false;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicSliderModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicSliderModel.prototype, "min", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicSliderModel.prototype, "step", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSliderModel.prototype, "vertical", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSliderModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";
class DynamicSwitchModel extends DynamicCheckControlModel {
    constructor(config, layout) {
        var _a, _b;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SWITCH;
        this.offLabel = (_a = config.offLabel) !== null && _a !== void 0 ? _a : null;
        this.onLabel = (_b = config.onLabel) !== null && _b !== void 0 ? _b : null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSwitchModel.prototype, "offLabel", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSwitchModel.prototype, "onLabel", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSwitchModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA = "TEXTAREA";
const DYNAMIC_FORM_TEXTAREA_WRAP_HARD = "hard";
const DYNAMIC_FORM_TEXTAREA_WRAP_SOFT = "soft";
class DynamicTextAreaModel extends DynamicInputControlModel {
    constructor(config, layout) {
        var _a;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA;
        this.cols = isNumber(config.cols) ? config.cols : 20;
        this.rows = isNumber(config.rows) ? config.rows : 2;
        this.wrap = (_a = config.wrap) !== null && _a !== void 0 ? _a : DYNAMIC_FORM_TEXTAREA_WRAP_SOFT;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicTextAreaModel.prototype, "cols", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicTextAreaModel.prototype, "rows", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicTextAreaModel.prototype, "wrap", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicTextAreaModel.prototype, "type", void 0);

const DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER = "TIMEPICKER";
class DynamicTimePickerModel extends DynamicDateControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER;
        this.meridian = isBoolean(config.meridian) ? config.meridian : false;
        this.showSeconds = isBoolean(config.showSeconds) ? config.showSeconds : false;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicTimePickerModel.prototype, "meridian", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicTimePickerModel.prototype, "showSeconds", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicTimePickerModel.prototype, "type", void 0);

const DYNAMIC_VALIDATORS = new InjectionToken("DYNAMIC_VALIDATORS");

const DEFAULT_ERROR_STATE_MATCHER = (control, model, hasFocus) => {
    return control.touched && !hasFocus;
};
const CHANGE_ERROR_STATE_MATCHER = (control, model, hasFocus) => {
    return (model.updateOn === DynamicFormHook.Change || model.updateOn === null) ? control.dirty : control.touched && !hasFocus;
};
const DYNAMIC_ERROR_MESSAGES_MATCHER = new InjectionToken("DYNAMIC_ERROR_MESSAGES_MATCHER");

let DynamicFormValidationService = class DynamicFormValidationService {
    constructor(_NG_VALIDATORS, _NG_ASYNC_VALIDATORS, _DYNAMIC_VALIDATORS, _DYNAMIC_ERROR_MESSAGES_MATCHER) {
        this._NG_VALIDATORS = _NG_VALIDATORS;
        this._NG_ASYNC_VALIDATORS = _NG_ASYNC_VALIDATORS;
        this._DYNAMIC_VALIDATORS = _DYNAMIC_VALIDATORS;
        this._DYNAMIC_ERROR_MESSAGES_MATCHER = _DYNAMIC_ERROR_MESSAGES_MATCHER;
    }
    getValidatorFn(validatorName, validatorArgs = null, validatorsToken = this._NG_VALIDATORS) {
        let validatorFn;
        if (Validators.hasOwnProperty(validatorName)) { // Built-in Angular Validators
            validatorFn = Validators[validatorName];
        }
        else { // Custom Validators
            if (this._DYNAMIC_VALIDATORS && this._DYNAMIC_VALIDATORS.has(validatorName)) {
                validatorFn = this._DYNAMIC_VALIDATORS.get(validatorName);
            }
            else if (validatorsToken) {
                validatorFn = validatorsToken.find(validator => validator.name === validatorName);
            }
        }
        if (validatorFn === undefined) { // throw when no validator could be resolved
            throw new Error(`validator "${validatorName}" is not provided via NG_VALIDATORS, NG_ASYNC_VALIDATORS or DYNAMIC_FORM_VALIDATORS`);
        }
        if (validatorArgs !== null) {
            return validatorFn(validatorArgs);
        }
        return validatorFn;
    }
    getValidatorFns(validatorsConfig, validatorsToken = this._NG_VALIDATORS) {
        let validatorFns = [];
        if (isObject(validatorsConfig)) {
            validatorFns = Object.keys(validatorsConfig).map(validatorConfigKey => {
                const validatorConfigValue = validatorsConfig[validatorConfigKey];
                if (this.isValidatorDescriptor(validatorConfigValue)) {
                    const descriptor = validatorConfigValue;
                    return this.getValidatorFn(descriptor.name, descriptor.args, validatorsToken);
                }
                return this.getValidatorFn(validatorConfigKey, validatorConfigValue, validatorsToken);
            });
        }
        return validatorFns;
    }
    getValidator(validatorName, validatorArgs = null) {
        return this.getValidatorFn(validatorName, validatorArgs);
    }
    getAsyncValidator(validatorName, validatorArgs = null) {
        return this.getValidatorFn(validatorName, validatorArgs, this._NG_ASYNC_VALIDATORS);
    }
    getValidators(validatorsConfig) {
        return this.getValidatorFns(validatorsConfig);
    }
    getAsyncValidators(asyncValidatorsConfig) {
        return this.getValidatorFns(asyncValidatorsConfig, this._NG_ASYNC_VALIDATORS);
    }
    updateValidators(validatorsConfig, control, model) {
        model.validators = validatorsConfig;
        if (validatorsConfig === null) {
            control.clearValidators();
        }
        else {
            control.setValidators(this.getValidators(validatorsConfig));
        }
        control.updateValueAndValidity();
    }
    updateAsyncValidators(asyncValidatorsConfig, control, model) {
        model.asyncValidators = asyncValidatorsConfig;
        if (asyncValidatorsConfig === null) {
            control.clearAsyncValidators();
        }
        else {
            control.setAsyncValidators(this.getAsyncValidators(asyncValidatorsConfig));
        }
        control.updateValueAndValidity();
    }
    showErrorMessages(control, model, hasFocus) {
        const precondition = control.invalid && model.hasErrorMessages;
        const matcher = this._DYNAMIC_ERROR_MESSAGES_MATCHER ? this._DYNAMIC_ERROR_MESSAGES_MATCHER(control, model, hasFocus) :
            DEFAULT_ERROR_STATE_MATCHER(control, model, hasFocus);
        return precondition && matcher;
    }
    parseErrorMessageConfig(template, model, error = null) {
        return template.replace(/{{\s*(.+?)\s*}}/mg, (_match, expression) => {
            let propertySource = model;
            let propertyName = expression;
            if (expression.indexOf("validator.") >= 0 && error) {
                propertySource = error;
                propertyName = expression.replace("validator.", "");
            }
            return propertySource[propertyName] !== null && propertySource[propertyName] !== undefined ?
                propertySource[propertyName] : null;
        });
    }
    createErrorMessages(control, model) {
        const messages = [];
        if (model.hasErrorMessages) {
            const messagesConfig = model.errorMessages;
            Object.keys(control.errors || {}).forEach(validationErrorKey => {
                let messageKey = validationErrorKey;
                if (validationErrorKey === "minlength" || validationErrorKey === "maxlength") {
                    messageKey = messageKey.replace("length", "Length");
                }
                if (messagesConfig.hasOwnProperty(messageKey)) {
                    const validationError = control.getError(validationErrorKey);
                    const messageTemplate = messagesConfig[messageKey];
                    messages.push(this.parseErrorMessageConfig(messageTemplate, model, validationError));
                }
            });
        }
        return messages;
    }
    isFormHook(value) {
        return isString(value) && Object.values(DynamicFormHook).includes(value);
    }
    isValidatorDescriptor(value) {
        if (isObject(value)) {
            return value.hasOwnProperty("name") && value.hasOwnProperty("args");
        }
        return false;
    }
};
DynamicFormValidationService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Map, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_VALIDATORS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_ERROR_MESSAGES_MATCHER,] }] }
];
DynamicFormValidationService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormValidationService_Factory() { return new DynamicFormValidationService(ɵɵinject(NG_VALIDATORS, 8), ɵɵinject(NG_ASYNC_VALIDATORS, 8), ɵɵinject(DYNAMIC_VALIDATORS, 8), ɵɵinject(DYNAMIC_ERROR_MESSAGES_MATCHER, 8)); }, token: DynamicFormValidationService, providedIn: "root" });
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

const DYNAMIC_FORM_CONTROL_MAP_FN = new InjectionToken("DYNAMIC_FORM_CONTROL_MAP_FN");
let DynamicFormComponentService = class DynamicFormComponentService {
    constructor(DYNAMIC_FORM_CONTROL_MAP_FN) {
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
        this.forms = [];
        this.formControls = {};
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
    }
    getForms() {
        return this.forms.values();
    }
    registerForm(component) {
        this.forms.push(component);
    }
    unregisterForm(component) {
        const indexOf = this.forms.indexOf(component);
        if (indexOf !== -1) {
            this.forms.splice(indexOf, 1);
        }
    }
    getFormControlRef(modelId, index) {
        const ref = this.formControls[modelId];
        if (isNumber(index)) {
            return Array.isArray(ref) ? ref[index] : undefined;
        }
        else {
            return ref;
        }
    }
    registerFormControl(model, ref, index) {
        if (isNumber(index)) { // threat model as array child
            const arrayRef = this.formControls[model.id] || [];
            if (Array.isArray(arrayRef)) {
                arrayRef.splice(index, 0, ref);
                this.formControls[model.id] = arrayRef;
            }
            else {
                console.warn(`registerFormControlRef is called with index for a non-array form control: ${model.id}`);
            }
        }
        else {
            this.formControls[model.id] = ref;
        }
    }
    unregisterFormControl(modelId, index) {
        const componentRef = this.formControls[modelId];
        if (isNumber(index)) {
            if (Array.isArray(componentRef) && componentRef[index] !== undefined) {
                componentRef.splice(index, 1);
            }
        }
        else if (componentRef !== undefined) {
            delete this.formControls[modelId];
        }
    }
    getCustomComponentType(model) {
        return isFunction(this.DYNAMIC_FORM_CONTROL_MAP_FN) ? this.DYNAMIC_FORM_CONTROL_MAP_FN(model) : null;
    }
};
DynamicFormComponentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
];
DynamicFormComponentService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormComponentService_Factory() { return new DynamicFormComponentService(ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormComponentService, providedIn: "root" });
DynamicFormComponentService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __param(0, Inject(DYNAMIC_FORM_CONTROL_MAP_FN)), __param(0, Optional()),
    __metadata("design:paramtypes", [Object])
], DynamicFormComponentService);

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
DynamicFormService.ctorParameters = () => [
    { type: DynamicFormComponentService },
    { type: DynamicFormValidationService }
];
DynamicFormService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(ɵɵinject(DynamicFormComponentService), ɵɵinject(DynamicFormValidationService)); }, token: DynamicFormService, providedIn: "root" });
DynamicFormService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [DynamicFormComponentService,
        DynamicFormValidationService])
], DynamicFormService);

const MATCH_DISABLED = "DISABLED";
const MATCH_ENABLED = "ENABLED";
const MATCH_HIDDEN = "HIDDEN";
const MATCH_OPTIONAL = "OPTIONAL";
const MATCH_REQUIRED = "REQUIRED";
const MATCH_VISIBLE = "VISIBLE";
const AND_OPERATOR = "AND";
const OR_OPERATOR = "OR";
const DYNAMIC_MATCHERS = new InjectionToken("DYNAMIC_MATCHERS");
const DISABLED_MATCHER = {
    match: MATCH_DISABLED,
    opposingMatch: MATCH_ENABLED,
    onChange(hasMatch, model) {
        model.disabled = hasMatch;
    }
};
const HIDDEN_MATCHER = {
    match: MATCH_HIDDEN,
    opposingMatch: MATCH_VISIBLE,
    onChange(hasMatch, model) {
        model.hidden = hasMatch;
    }
};
const REQUIRED_MATCHER = {
    match: MATCH_REQUIRED,
    opposingMatch: MATCH_OPTIONAL,
    onChange(hasMatch, model, control, injector) {
        let validatorsConfig = null;
        if (hasMatch) {
            validatorsConfig = isObject(model.validators) ? Object.assign(Object.assign({}, model.validators), { required: null }) : { required: null };
        }
        else {
            if (isObject(model.validators)) {
                delete model.validators.required;
                validatorsConfig = Object.assign({}, model.validators);
            }
        }
        injector.get(DynamicFormValidationService).updateValidators(validatorsConfig, control, model);
        injector.get(DynamicFormService).detectChanges();
    }
};
const DISABLED_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: DISABLED_MATCHER,
    multi: true
};
const HIDDEN_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: HIDDEN_MATCHER,
    multi: true
};
const REQUIRED_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: REQUIRED_MATCHER,
    multi: true
};
const DYNAMIC_MATCHER_PROVIDERS = [DISABLED_MATCHER_PROVIDER, HIDDEN_MATCHER_PROVIDER, REQUIRED_MATCHER_PROVIDER];

let DynamicFormLayoutService = class DynamicFormLayoutService {
    findById(id, formLayout) {
        if (isObject(formLayout)) {
            for (const key of Object.keys(formLayout)) {
                if (key === id) {
                    return formLayout[key];
                }
            }
        }
        return null;
    }
    findByModel(model, formLayout) {
        let controlLayout = null;
        if (isObject(formLayout)) {
            for (const key of Object.keys(formLayout)) {
                key.split(",").forEach(substring => {
                    const selector = substring.trim();
                    if (selector === model.id || selector === model.type) {
                        controlLayout = formLayout[key];
                    }
                });
            }
        }
        return controlLayout;
    }
    filterTemplatesByModel(model, templates) {
        const filterCallback = (template) => {
            return template.modelId === model.id || template.modelType === model.type;
        };
        if (templates instanceof QueryList) {
            return templates.filter(filterCallback);
        }
        else if (Array.isArray(templates)) {
            return templates.filter(filterCallback);
        }
        return [];
    }
    getAlignedTemplate(model, templates, alignment) {
        return this.filterTemplatesByModel(model, templates)
            .find(template => template.as === null && template.align === alignment);
    }
    /*
    getIndexedTemplates(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective[] | undefined {
        return this.filterTemplatesByModel(model, templates).filter(template => template.as === null);
    }
    */
    getStartTemplate(model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.Start);
    }
    getEndTemplate(model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End);
    }
    getClass(layout, context, place) {
        if (isObject(layout) && layout.hasOwnProperty(context)) {
            const config = layout[context];
            if (config.hasOwnProperty(place)) {
                return config[place];
            }
        }
        return "";
    }
    getHostClass(layout) {
        const keys = ["element", "grid"];
        let cls = "";
        if (isObject(layout)) {
            keys.forEach(key => {
                if (isObject(layout[key]) && isString(layout[key].host)) {
                    cls = cls + ` ${layout[key].host}`;
                }
            });
        }
        return cls;
    }
    getElementId(model) {
        let id = model.id;
        let parent = model.parent;
        while (parent !== null) {
            if (parent instanceof DynamicFormArrayGroupModel) {
                id = `${parent.context.id}-${parent.index}-${model.id}`;
                break;
            }
            parent = parent.parent;
        }
        return id;
    }
};
DynamicFormLayoutService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormLayoutService_Factory() { return new DynamicFormLayoutService(); }, token: DynamicFormLayoutService, providedIn: "root" });
DynamicFormLayoutService = __decorate([
    Injectable({
        providedIn: "root"
    })
], DynamicFormLayoutService);

let DynamicFormRelationService = class DynamicFormRelationService {
    constructor(MATCHERS, injector) {
        this.MATCHERS = MATCHERS;
        this.injector = injector;
    }
    getRelatedFormControls(model, group) {
        const conditionReducer = (controls, condition) => {
            var _a;
            const path = (_a = condition.rootPath) !== null && _a !== void 0 ? _a : condition.id;
            if (!controls.hasOwnProperty(path)) {
                const control = condition.rootPath ? group.root.get(condition.rootPath) : group.get(condition.id);
                control instanceof FormControl ? controls[path] = control : console.warn(`No related form control with id ${condition.id} could be found`);
            }
            return controls;
        };
        const relationReducer = (controls, relation) => relation.when.reduce(conditionReducer, controls);
        return model.relations.reduce(relationReducer, {});
    }
    findRelationByMatcher(relations, matcher) {
        return relations.find(relation => [matcher.match, matcher.opposingMatch].includes(relation.match));
    }
    matchesCondition(relation, relatedFormControls, matcher) {
        var _a;
        const operator = (_a = relation.operator) !== null && _a !== void 0 ? _a : OR_OPERATOR;
        return relation.when.reduce((hasAlreadyMatched, condition, index) => {
            var _a;
            const path = (_a = condition.rootPath) !== null && _a !== void 0 ? _a : condition.id;
            let relatedFormControl;
            for (const [key, control] of Object.entries(relatedFormControls)) {
                if (key === path) {
                    relatedFormControl = control;
                    break;
                }
            }
            if (relatedFormControl && relation.match === matcher.match) {
                if (index > 0 && operator === AND_OPERATOR && !hasAlreadyMatched) {
                    return false;
                }
                if (index > 0 && operator === OR_OPERATOR && hasAlreadyMatched) {
                    return true;
                }
                return condition.value === relatedFormControl.value || condition.status === relatedFormControl.status;
            }
            if (relatedFormControl && relation.match === matcher.opposingMatch) {
                if (index > 0 && operator === AND_OPERATOR && hasAlreadyMatched) {
                    return true;
                }
                if (index > 0 && operator === OR_OPERATOR && !hasAlreadyMatched) {
                    return false;
                }
                return !(condition.value === relatedFormControl.value || condition.status === relatedFormControl.status);
            }
            return false;
        }, false);
    }
    subscribeRelations(model, group, control) {
        const relatedFormControls = this.getRelatedFormControls(model, group);
        const subscriptions = [];
        Object.values(relatedFormControls).forEach(relatedControl => {
            const valueChanges = relatedControl.valueChanges.pipe(startWith(relatedControl.value));
            const statusChanges = relatedControl.statusChanges.pipe(startWith(relatedControl.status));
            subscriptions.push(merge(valueChanges, statusChanges).subscribe(() => {
                this.MATCHERS.forEach(matcher => {
                    const relation = this.findRelationByMatcher(model.relations, matcher);
                    if (relation !== undefined) {
                        const hasMatch = this.matchesCondition(relation, relatedFormControls, matcher);
                        matcher.onChange(hasMatch, model, control, this.injector);
                    }
                });
            }));
        });
        return subscriptions;
    }
};
DynamicFormRelationService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_MATCHERS,] }] },
    { type: Injector }
];
DynamicFormRelationService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormRelationService_Factory() { return new DynamicFormRelationService(ɵɵinject(DYNAMIC_MATCHERS, 8), ɵɵinject(INJECTOR)); }, token: DynamicFormRelationService, providedIn: "root" });
DynamicFormRelationService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __param(0, Optional()), __param(0, Inject(DYNAMIC_MATCHERS)),
    __metadata("design:paramtypes", [Array, Injector])
], DynamicFormRelationService);

const AUTOCOMPLETE_OFF = "off";
const AUTOCOMPLETE_ON = "on";
const AUTOFILL_TOKEN_BILLING = "billing";
const AUTOFILL_TOKEN_SHIPPING = "shipping";
const AUTOFILL_TOKENS_ADDRESS = [AUTOFILL_TOKEN_BILLING, AUTOFILL_TOKEN_SHIPPING];
const AUTOFILL_TOKEN_HOME = "home";
const AUTOFILL_TOKEN_WORK = "work";
const AUTOFILL_TOKEN_MOBILE = "mobile";
const AUTOFILL_TOKEN_FAX = "fax";
const AUTOFILL_TOKEN_PAGER = "pager";
const AUTOFILL_TOKENS_CONTACT = [
    AUTOFILL_TOKEN_FAX, AUTOFILL_TOKEN_HOME, AUTOFILL_TOKEN_MOBILE, AUTOFILL_TOKEN_PAGER, AUTOFILL_TOKEN_WORK
];
const AUTOFILL_FIELD_STREET_ADDRESS = "street-address";
const AUTOFILL_FIELD_ADDRESS_LINE_1 = "address-line1";
const AUTOFILL_FIELD_ADDRESS_LINE_2 = "address-line2";
const AUTOFILL_FIELD_ADDRESS_LINE_3 = "address-line3";
const AUTOFILL_FIELD_ADDRESS_LEVEL_4 = "address-level4";
const AUTOFILL_FIELD_ADDRESS_LEVEL_3 = "address-level3";
const AUTOFILL_FIELD_ADDRESS_LEVEL_2 = "address-level2";
const AUTOFILL_FIELD_ADDRESS_LEVEL_1 = "address-level1";
const AUTOFILL_FIELD_NAME = "name";
const AUTOFILL_FIELD_HONORIFIC_PREFIX = "honorific-prefix";
const AUTOFILL_FIELD_GIVEN_NAME = "given-name";
const AUTOFILL_FIELD_ADDITIONAL_NAME = "additional-name";
const AUTOFILL_FIELD_FAMILY_NAME = "family-name";
const AUTOFILL_FIELD_HONORIFIC_SUFFIX = "honorific-suffix";
const AUTOFILL_FIELD_NICKNAME = "nickname";
const AUTOFILL_FIELD_USERNAME = "username";
const AUTOFILL_FIELD_NEW_PASSWORD = "new-password";
const AUTOFILL_FIELD_CURRENT_PASSWORD = "current-password";
const AUTOFILL_FIELD_ORGANIZATION_TITLE = "organization-title";
const AUTOFILL_FIELD_ORGANIZATION = "organization";
const AUTOFILL_FIELD_COUNTRY = "country";
const AUTOFILL_FIELD_COUNTRY_NAME = "country-name";
const AUTOFILL_FIELD_POSTAL_CODE = "postal-code";
const AUTOFILL_FIELD_CC_NAME = "cc-name";
const AUTOFILL_FIELD_CC_GIVEN_NAME = "cc-given-name";
const AUTOFILL_FIELD_CC_ADDITIONAL_NAME = "cc-additional-name";
const AUTOFILL_FIELD_CC_FAMILY_NAME = "cc-family-name";
const AUTOFILL_FIELD_CC_NUMBER = "cc-number";
const AUTOFILL_FIELD_CC_EXP = "cc-exp";
const AUTOFILL_FIELD_CC_EXP_MONTH = "cc-exp-month";
const AUTOFILL_FIELD_CC_EXP_YEAR = "cc-exp-year";
const AUTOFILL_FIELD_CC_CSC = "cc-csc";
const AUTOFILL_FIELD_CC_TYPE = "cc-type";
const AUTOFILL_FIELD_TRANSACTION_CURRENCY = "transaction-currency";
const AUTOFILL_FIELD_TRANSACTION_AMOUNT = "transaction-amount";
const AUTOFILL_FIELD_LANGUAGE = "language";
const AUTOFILL_FIELD_BDAY = "bday";
const AUTOFILL_FIELD_BDAY_DAY = "bday-day";
const AUTOFILL_FIELD_BDAY_MONTH = "bday-month";
const AUTOFILL_FIELD_BDAY_YEAR = "bday-year";
const AUTOFILL_FIELD_SEX = "sex";
const AUTOFILL_FIELD_URL = "url";
const AUTOFILL_FIELD_PHOTO = "photo";
const AUTOFILL_FIELDS = [
    AUTOFILL_FIELD_STREET_ADDRESS, AUTOFILL_FIELD_ADDRESS_LINE_1, AUTOFILL_FIELD_ADDRESS_LINE_2,
    AUTOFILL_FIELD_ADDRESS_LINE_3, AUTOFILL_FIELD_ADDRESS_LEVEL_4, AUTOFILL_FIELD_ADDRESS_LEVEL_3,
    AUTOFILL_FIELD_ADDRESS_LEVEL_2, AUTOFILL_FIELD_ADDRESS_LEVEL_1, AUTOFILL_FIELD_NAME,
    AUTOFILL_FIELD_HONORIFIC_PREFIX, AUTOFILL_FIELD_GIVEN_NAME, AUTOFILL_FIELD_ADDITIONAL_NAME,
    AUTOFILL_FIELD_FAMILY_NAME, AUTOFILL_FIELD_HONORIFIC_SUFFIX, AUTOFILL_FIELD_NICKNAME, AUTOFILL_FIELD_USERNAME,
    AUTOFILL_FIELD_NEW_PASSWORD, AUTOFILL_FIELD_CURRENT_PASSWORD, AUTOFILL_FIELD_ORGANIZATION_TITLE,
    AUTOFILL_FIELD_ORGANIZATION, AUTOFILL_FIELD_COUNTRY, AUTOFILL_FIELD_COUNTRY_NAME, AUTOFILL_FIELD_POSTAL_CODE,
    AUTOFILL_FIELD_CC_NAME, AUTOFILL_FIELD_CC_GIVEN_NAME, AUTOFILL_FIELD_CC_ADDITIONAL_NAME,
    AUTOFILL_FIELD_CC_FAMILY_NAME, AUTOFILL_FIELD_CC_NUMBER, AUTOFILL_FIELD_CC_EXP, AUTOFILL_FIELD_CC_EXP_MONTH,
    AUTOFILL_FIELD_CC_EXP_YEAR, AUTOFILL_FIELD_CC_CSC, AUTOFILL_FIELD_CC_TYPE, AUTOFILL_FIELD_TRANSACTION_CURRENCY,
    AUTOFILL_FIELD_TRANSACTION_AMOUNT, AUTOFILL_FIELD_LANGUAGE, AUTOFILL_FIELD_BDAY, AUTOFILL_FIELD_BDAY_DAY,
    AUTOFILL_FIELD_BDAY_MONTH, AUTOFILL_FIELD_BDAY_YEAR, AUTOFILL_FIELD_SEX, AUTOFILL_FIELD_URL, AUTOFILL_FIELD_PHOTO
];
const AUTOFILL_FIELD_TEL = "tel";
const AUTOFILL_FIELD_TEL_COUNTRY_CODE = "tel-country-code";
const AUTOFILL_FIELD_TEL_NATIONAL = "tel-national";
const AUTOFILL_FIELD_TEL_AREA_CODE = "tel-area-code";
const AUTOFILL_FIELD_TEL_LOCAL = "tel-local";
const AUTOFILL_FIELD_TEL_LOCAL_PREFIX = "tel-local-prefix";
const AUTOFILL_FIELD_TEL_LOCAL_SUFFIX = "tel-local-suffix";
const AUTOFILL_FIELD_TEL_LOCAL_EXTENSION = "tel-extension";
const AUTOFILL_FIELD_EMAIL = "email";
const AUTOFILL_FIELD_IMPP = "impp";
const AUTOFILL_FIELDS_CONTACT = [
    AUTOFILL_FIELD_TEL, AUTOFILL_FIELD_TEL_COUNTRY_CODE, AUTOFILL_FIELD_TEL_NATIONAL, AUTOFILL_FIELD_TEL_AREA_CODE,
    AUTOFILL_FIELD_TEL_LOCAL, AUTOFILL_FIELD_TEL_LOCAL_PREFIX, AUTOFILL_FIELD_TEL_LOCAL_SUFFIX,
    AUTOFILL_FIELD_TEL_LOCAL_EXTENSION, AUTOFILL_FIELD_EMAIL, AUTOFILL_FIELD_IMPP
];
function isAddressToken(token) {
    return AUTOFILL_TOKENS_ADDRESS.indexOf(token) > -1;
}
function isContactField(token) {
    return AUTOFILL_FIELDS_CONTACT.indexOf(token) > -1;
}
function isContactToken(token) {
    return AUTOFILL_TOKENS_CONTACT.indexOf(token) > -1;
}
function isField(token) {
    return AUTOFILL_FIELDS.indexOf(token) > -1;
}
function isSectionToken(token) {
    return token.startsWith("section-");
}
function validate(tokens) {
    const toExpression = (total, currentValue) => `${total}|${currentValue}`;
    const tokensAddress = AUTOFILL_TOKENS_ADDRESS.reduce(toExpression);
    const tokensContact = AUTOFILL_TOKENS_CONTACT.reduce(toExpression);
    const fields = AUTOFILL_FIELDS.reduce(toExpression);
    const fieldsContact = AUTOFILL_FIELDS_CONTACT.reduce(toExpression);
    const regex = new RegExp(`^(section-\\w+\\s{1})?((${tokensAddress}){1}\\s)?((${fields}){1}|((${tokensContact}){1}\\s{1}(${fieldsContact})))$`);
    return regex.test(tokens);
}

var DynamicFormsCoreModule_1;
let DynamicFormsCoreModule = DynamicFormsCoreModule_1 = class DynamicFormsCoreModule {
    /*@deprecated*/
    static forRoot() {
        return {
            ngModule: DynamicFormsCoreModule_1,
            providers: [
                DynamicFormService,
                DynamicFormLayoutService,
                DynamicFormValidationService,
                DynamicFormComponentService,
                DynamicFormRelationService
            ]
        };
    }
};
DynamicFormsCoreModule = DynamicFormsCoreModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule
        ],
        declarations: [
            DynamicListDirective,
            DynamicTemplateDirective
        ],
        exports: [
            DynamicListDirective,
            DynamicTemplateDirective
        ]
    })
], DynamicFormsCoreModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AND_OPERATOR, AUTOCOMPLETE_OFF, AUTOCOMPLETE_ON, AUTOFILL_FIELDS, AUTOFILL_FIELDS_CONTACT, AUTOFILL_FIELD_ADDITIONAL_NAME, AUTOFILL_FIELD_ADDRESS_LEVEL_1, AUTOFILL_FIELD_ADDRESS_LEVEL_2, AUTOFILL_FIELD_ADDRESS_LEVEL_3, AUTOFILL_FIELD_ADDRESS_LEVEL_4, AUTOFILL_FIELD_ADDRESS_LINE_1, AUTOFILL_FIELD_ADDRESS_LINE_2, AUTOFILL_FIELD_ADDRESS_LINE_3, AUTOFILL_FIELD_BDAY, AUTOFILL_FIELD_BDAY_DAY, AUTOFILL_FIELD_BDAY_MONTH, AUTOFILL_FIELD_BDAY_YEAR, AUTOFILL_FIELD_CC_ADDITIONAL_NAME, AUTOFILL_FIELD_CC_CSC, AUTOFILL_FIELD_CC_EXP, AUTOFILL_FIELD_CC_EXP_MONTH, AUTOFILL_FIELD_CC_EXP_YEAR, AUTOFILL_FIELD_CC_FAMILY_NAME, AUTOFILL_FIELD_CC_GIVEN_NAME, AUTOFILL_FIELD_CC_NAME, AUTOFILL_FIELD_CC_NUMBER, AUTOFILL_FIELD_CC_TYPE, AUTOFILL_FIELD_COUNTRY, AUTOFILL_FIELD_COUNTRY_NAME, AUTOFILL_FIELD_CURRENT_PASSWORD, AUTOFILL_FIELD_EMAIL, AUTOFILL_FIELD_FAMILY_NAME, AUTOFILL_FIELD_GIVEN_NAME, AUTOFILL_FIELD_HONORIFIC_PREFIX, AUTOFILL_FIELD_HONORIFIC_SUFFIX, AUTOFILL_FIELD_IMPP, AUTOFILL_FIELD_LANGUAGE, AUTOFILL_FIELD_NAME, AUTOFILL_FIELD_NEW_PASSWORD, AUTOFILL_FIELD_NICKNAME, AUTOFILL_FIELD_ORGANIZATION, AUTOFILL_FIELD_ORGANIZATION_TITLE, AUTOFILL_FIELD_PHOTO, AUTOFILL_FIELD_POSTAL_CODE, AUTOFILL_FIELD_SEX, AUTOFILL_FIELD_STREET_ADDRESS, AUTOFILL_FIELD_TEL, AUTOFILL_FIELD_TEL_AREA_CODE, AUTOFILL_FIELD_TEL_COUNTRY_CODE, AUTOFILL_FIELD_TEL_LOCAL, AUTOFILL_FIELD_TEL_LOCAL_EXTENSION, AUTOFILL_FIELD_TEL_LOCAL_PREFIX, AUTOFILL_FIELD_TEL_LOCAL_SUFFIX, AUTOFILL_FIELD_TEL_NATIONAL, AUTOFILL_FIELD_TRANSACTION_AMOUNT, AUTOFILL_FIELD_TRANSACTION_CURRENCY, AUTOFILL_FIELD_URL, AUTOFILL_FIELD_USERNAME, AUTOFILL_TOKENS_ADDRESS, AUTOFILL_TOKENS_CONTACT, AUTOFILL_TOKEN_BILLING, AUTOFILL_TOKEN_FAX, AUTOFILL_TOKEN_HOME, AUTOFILL_TOKEN_MOBILE, AUTOFILL_TOKEN_PAGER, AUTOFILL_TOKEN_SHIPPING, AUTOFILL_TOKEN_WORK, CHANGE_ERROR_STATE_MATCHER, DEFAULT_ERROR_STATE_MATCHER, DISABLED_MATCHER, DISABLED_MATCHER_PROVIDER, DYNAMIC_ERROR_MESSAGES_MATCHER, DYNAMIC_FORM_CONTROL_INPUT_TYPE_COLOR, DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME_LOCAL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_MONTH, DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, DYNAMIC_FORM_CONTROL_INPUT_TYPE_PASSWORD, DYNAMIC_FORM_CONTROL_INPUT_TYPE_RANGE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_SEARCH, DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT, DYNAMIC_FORM_CONTROL_INPUT_TYPE_TIME, DYNAMIC_FORM_CONTROL_INPUT_TYPE_URL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_WEEK, DYNAMIC_FORM_CONTROL_MAP_FN, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_EDITOR, DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_RATING, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DYNAMIC_FORM_TEXTAREA_WRAP_HARD, DYNAMIC_FORM_TEXTAREA_WRAP_SOFT, DYNAMIC_MATCHERS, DYNAMIC_MATCHER_PROVIDERS, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT, DYNAMIC_VALIDATORS, DynamicCheckControlModel, DynamicCheckboxGroupModel, DynamicCheckboxModel, DynamicColorPickerModel, DynamicDateControlModel, DynamicDatePickerModel, DynamicEditorModel, DynamicFileControlModel, DynamicFileUploadModel, DynamicFormArrayComponent, DynamicFormArrayGroupModel, DynamicFormArrayModel, DynamicFormComponent, DynamicFormComponentService, DynamicFormControlComponent, DynamicFormControlContainerComponent, DynamicFormControlEventType, DynamicFormControlModel, DynamicFormControlWithTemplateComponent, DynamicFormGroupComponent, DynamicFormGroupModel, DynamicFormHook, DynamicFormLayoutService, DynamicFormOption, DynamicFormRelationService, DynamicFormService, DynamicFormValidationService, DynamicFormValueControlModel, DynamicFormsCoreModule, DynamicInputControlModel, DynamicInputModel, DynamicListDirective, DynamicOptionControlModel, DynamicRadioGroupModel, DynamicRatingModel, DynamicSelectModel, DynamicSliderModel, DynamicSwitchModel, DynamicTemplateDirective, DynamicTextAreaModel, DynamicTimePickerModel, HIDDEN_MATCHER, HIDDEN_MATCHER_PROVIDER, MATCH_DISABLED, MATCH_ENABLED, MATCH_HIDDEN, MATCH_OPTIONAL, MATCH_REQUIRED, MATCH_VISIBLE, METADATA_KEY_SERIALIZABLE, OR_OPERATOR, REQUIRED_MATCHER, REQUIRED_MATCHER_PROVIDER, getSerializables, isAddressToken, isBoolean, isContactField, isContactToken, isDynamicFormControlEvent, isField, isFunction, isNumber, isObject, isSectionToken, isString, maskFromString, maskToString, parseReviver, serializable, serialize, validate };
//# sourceMappingURL=core.js.map
