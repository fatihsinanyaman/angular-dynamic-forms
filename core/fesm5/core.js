import { __extends, __decorate, __metadata, __spread, __param, __values, __assign, __read } from 'tslib';
import { QueryList, ElementRef, Renderer2, Input, Directive, TemplateRef, ɵlooseIdentical, InjectionToken, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, Injector, INJECTOR, NgModule } from '@angular/core';
import { BehaviorSubject, isObservable, of, merge } from 'rxjs';
import 'reflect-metadata';
import { tap, map, startWith } from 'rxjs/operators';
import { Validators, NG_VALIDATORS, NG_ASYNC_VALIDATORS, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
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

var DynamicFormControlComponent = /** @class */ (function () {
    function DynamicFormControlComponent(layoutService, validationService) {
        this.layoutService = layoutService;
        this.validationService = validationService;
        this._hasFocus = false;
    }
    Object.defineProperty(DynamicFormControlComponent.prototype, "control", {
        get: function () {
            var control = this.group.get(this.model.id);
            if (control === null) {
                throw new Error("form group does not contain an abstract control with id " + this.model.id);
            }
            return control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "id", {
        get: function () {
            return this.layoutService.getElementId(this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "hasFocus", {
        get: function () {
            return this._hasFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "isInvalid", {
        get: function () {
            return this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "isValid", {
        get: function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "errorMessages", {
        get: function () {
            return this.validationService.createErrorMessages(this.control, this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "showErrorMessages", {
        get: function () {
            return this.validationService.showErrorMessages(this.control, this.model, this.hasFocus);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormControlComponent.prototype.getClass = function (context, place, model) {
        if (model === void 0) { model = this.model; }
        var _a;
        var controlLayout = model === this.model ? this.layout : (_a = this.layoutService.findByModel(model, this.formLayout)) !== null && _a !== void 0 ? _a : model.layout;
        return this.layoutService.getClass(controlLayout, context, place);
    };
    DynamicFormControlComponent.prototype.onBlur = function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = false;
        this.blur.emit($event);
    };
    DynamicFormControlComponent.prototype.onChange = function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.change.emit($event);
    };
    DynamicFormControlComponent.prototype.onCustomEvent = function ($event, type, bypass) {
        if (type === void 0) { type = null; }
        if (bypass === void 0) { bypass = false; }
        if (bypass) {
            this.customEvent.emit($event);
        }
        else if (isString(type)) {
            this.customEvent.emit({ customEvent: $event, customEventType: type });
        }
    };
    DynamicFormControlComponent.prototype.onFocus = function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = true;
        this.focus.emit($event);
    };
    return DynamicFormControlComponent;
}());

var DynamicFormArrayComponent = /** @class */ (function (_super) {
    __extends(DynamicFormArrayComponent, _super);
    function DynamicFormArrayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DynamicFormArrayComponent.prototype, "array", {
        get: function () {
            return this.control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormArrayComponent.prototype, "startTemplate", {
        get: function () {
            return this.layoutService.getStartTemplate(this.model, this.templates);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormArrayComponent.prototype, "endTemplate", {
        get: function () {
            return this.layoutService.getEndTemplate(this.model, this.templates);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormArrayComponent.prototype.markForCheck = function () {
        if (this.components instanceof QueryList) {
            this.components.forEach(function (component) { return component.markForCheck(); });
        }
    };
    return DynamicFormArrayComponent;
}(DynamicFormControlComponent));

var DynamicFormGroupComponent = /** @class */ (function (_super) {
    __extends(DynamicFormGroupComponent, _super);
    function DynamicFormGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicFormGroupComponent.prototype.markForCheck = function () {
        if (this.components instanceof QueryList) {
            this.components.forEach(function (component) { return component.markForCheck(); });
        }
    };
    return DynamicFormGroupComponent;
}(DynamicFormControlComponent));

var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(changeDetectorRef, componentService) {
        this.changeDetectorRef = changeDetectorRef;
        this.componentService = componentService;
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.componentService.registerForm(this);
    };
    DynamicFormComponent.prototype.ngOnDestroy = function () {
        this.componentService.unregisterForm(this);
    };
    DynamicFormComponent.prototype.trackByFn = function (_index, model) {
        return model.id;
    };
    DynamicFormComponent.prototype.markForCheck = function () {
        this.changeDetectorRef.markForCheck();
        if (this.components instanceof QueryList) {
            this.components.forEach(function (component) { return component.markForCheck(); });
        }
    };
    DynamicFormComponent.prototype.detectChanges = function () {
        this.changeDetectorRef.detectChanges();
    };
    DynamicFormComponent.prototype.onBlur = function ($event) {
        this.blur.emit($event);
    };
    DynamicFormComponent.prototype.onChange = function ($event) {
        this.change.emit($event);
    };
    DynamicFormComponent.prototype.onFocus = function ($event) {
        this.focus.emit($event);
    };
    DynamicFormComponent.prototype.onCustomEvent = function ($event, customEventEmitter) {
        customEventEmitter.emit($event);
    };
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
DynamicFormComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicFormComponent });

    return DynamicFormComponent;
}());

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

var METADATA_KEY_SERIALIZABLE = "SERIALIZABLE";
function serializable(name) {
    return function (target, key) {
        Reflect.defineMetadata(METADATA_KEY_SERIALIZABLE, { key: key, name: name || key }, target, key);
    };
}
function getSerializables(target) {
    var serializables = [];
    for (var key in target) {
        var metadata = Reflect.getMetadata(METADATA_KEY_SERIALIZABLE, target, key);
        if (metadata) {
            serializables.push(metadata);
        }
    }
    return serializables;
}
function serialize(target, prototype) {
    return getSerializables(prototype || target).reduce(function (prev, prop) {
        prev[prop.name] = target[prop.key];
        return prev;
    }, {});
}

var DynamicFormControlModel = /** @class */ (function () {
    function DynamicFormControlModel(config, layout) {
        var _this = this;
        if (layout === void 0) { layout = null; }
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
        this.disabled$.subscribe(function (disabled) { return _this._disabled = disabled; });
        this.disabledChanges = this.disabled$.asObservable();
    }
    Object.defineProperty(DynamicFormControlModel.prototype, "disabled", {
        get: function () {
            return this.disabled$.getValue();
        },
        set: function (disabled) {
            this.disabled$.next(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlModel.prototype, "hasErrorMessages", {
        get: function () {
            return isObject(this.errorMessages);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormControlModel.prototype.toJSON = function () {
        return serialize(this);
    };
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
    return DynamicFormControlModel;
}());

var DynamicFormValueControlModel = /** @class */ (function (_super) {
    __extends(DynamicFormValueControlModel, _super);
    function DynamicFormValueControlModel(config, layout) {
        var _a, _b, _c;
        var _this = _super.call(this, config, layout) || this;
        _this.additional = isObject(config.additional) ? config.additional : null;
        _this.hint = (_a = config.hint) !== null && _a !== void 0 ? _a : null;
        _this.required = isBoolean(config.required) ? config.required : false;
        _this.tabIndex = (_b = config.tabIndex) !== null && _b !== void 0 ? _b : null;
        _this.value$ = new BehaviorSubject((_c = config.value) !== null && _c !== void 0 ? _c : null);
        _this.value$.subscribe(function (value) { return _this._value = value; });
        _this.valueChanges = _this.value$.asObservable();
        return _this;
    }
    Object.defineProperty(DynamicFormValueControlModel.prototype, "value", {
        get: function () {
            return this.value$.getValue();
        },
        set: function (value) {
            this.value$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormValueControlModel.prototype.getAdditional = function (key, defaultValue) {
        return this.additional !== null && this.additional.hasOwnProperty(key) ? this.additional[key] : defaultValue;
    };
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
    return DynamicFormValueControlModel;
}(DynamicFormControlModel));

var DynamicFormArrayGroupModel = /** @class */ (function () {
    function DynamicFormArrayGroupModel(context, group, index) {
        if (group === void 0) { group = []; }
        if (index === void 0) { index = -1; }
        this.$implicit = this;
        this.context = context;
        this.group = group;
        this.index = index;
    }
    Object.defineProperty(DynamicFormArrayGroupModel.prototype, "parent", {
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormArrayGroupModel.prototype.get = function (index) {
        return this.group[index];
    };
    DynamicFormArrayGroupModel.prototype.toJSON = function () {
        return serialize(this);
    };
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicFormArrayGroupModel.prototype, "group", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicFormArrayGroupModel.prototype, "index", void 0);
    return DynamicFormArrayGroupModel;
}());
var DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
var DynamicFormArrayModel = /** @class */ (function (_super) {
    __extends(DynamicFormArrayModel, _super);
    function DynamicFormArrayModel(config, layout) {
        var _a, _b;
        var _this = _super.call(this, config, layout) || this;
        _this.groups = [];
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
        if (isFunction(config.groupFactory)) {
            _this.groupFactory = config.groupFactory;
        }
        else {
            throw new Error("group factory function must be specified for DynamicFormArrayModel");
        }
        _this.groupAsyncValidators = (_a = config.groupAsyncValidators) !== null && _a !== void 0 ? _a : null;
        _this.groupPrototype = _this.groupFactory();
        _this.groupValidators = (_b = config.groupValidators) !== null && _b !== void 0 ? _b : null;
        _this.initialCount = isNumber(config.initialCount) ? config.initialCount : 1;
        if (Array.isArray(config.groups)) {
            config.groups.forEach(function (arrayGroup, index) {
                var _a;
                _this.groups.push(new DynamicFormArrayGroupModel(_this, arrayGroup.group, (_a = arrayGroup.index) !== null && _a !== void 0 ? _a : index));
            });
        }
        else {
            for (var index = 0; index < _this.initialCount; index++) {
                _this.addGroup();
            }
        }
        return _this;
    }
    DynamicFormArrayModel.prototype.updateGroupIndex = function () {
        this.groups.forEach(function (group, index) { return group.index = index; });
    };
    Object.defineProperty(DynamicFormArrayModel.prototype, "size", {
        get: function () {
            return this.groups.length;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormArrayModel.prototype.get = function (index) {
        return this.groups[index];
    };
    DynamicFormArrayModel.prototype.addGroup = function () {
        return this.insertGroup(this.groups.length);
    };
    DynamicFormArrayModel.prototype.insertGroup = function (index) {
        var group = new DynamicFormArrayGroupModel(this, this.groupFactory());
        this.groups.splice(index, 0, group);
        this.updateGroupIndex();
        return group;
    };
    DynamicFormArrayModel.prototype.moveGroup = function (index, step) {
        var _a;
        (_a = this.groups).splice.apply(_a, __spread([index + step, 0], this.groups.splice(index, 1)));
        this.updateGroupIndex();
    };
    DynamicFormArrayModel.prototype.removeGroup = function (index) {
        this.groups.splice(index, 1);
        this.updateGroupIndex();
    };
    DynamicFormArrayModel.prototype.clear = function () {
        this.groups.splice(0);
        this.updateGroupIndex();
    };
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
    return DynamicFormArrayModel;
}(DynamicFormControlModel));

var DynamicCheckControlModel = /** @class */ (function (_super) {
    __extends(DynamicCheckControlModel, _super);
    function DynamicCheckControlModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.labelPosition = (_a = config.labelPosition) !== null && _a !== void 0 ? _a : null;
        _this.checked = isBoolean(_this.value) ? _this.value : false;
        return _this;
    }
    Object.defineProperty(DynamicCheckControlModel.prototype, "checked", {
        get: function () {
            return this.value;
        },
        set: function (checked) {
            this.value = checked;
        },
        enumerable: true,
        configurable: true
    });
    DynamicCheckControlModel.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicCheckControlModel.prototype, "labelPosition", void 0);
    return DynamicCheckControlModel;
}(DynamicFormValueControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX = "CHECKBOX";
var DynamicCheckboxModel = /** @class */ (function (_super) {
    __extends(DynamicCheckboxModel, _super);
    function DynamicCheckboxModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
        _this.indeterminate = isBoolean(config.indeterminate) ? config.indeterminate : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicCheckboxModel.prototype, "indeterminate", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicCheckboxModel.prototype, "type", void 0);
    return DynamicCheckboxModel;
}(DynamicCheckControlModel));

var DynamicInputControlModel = /** @class */ (function (_super) {
    __extends(DynamicInputControlModel, _super);
    function DynamicInputControlModel(config, layout) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, config, layout) || this;
        _this.autoComplete = (_a = config.autoComplete) !== null && _a !== void 0 ? _a : "on";
        _this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        _this.maxLength = isNumber(config.maxLength) ? config.maxLength : null;
        _this.minLength = isNumber(config.minLength) ? config.minLength : null;
        _this.placeholder = (_b = config.placeholder) !== null && _b !== void 0 ? _b : "";
        _this.prefix = (_c = config.prefix) !== null && _c !== void 0 ? _c : null;
        _this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        _this.spellCheck = isBoolean(config.spellCheck) ? config.spellCheck : false;
        _this.suffix = (_d = config.suffix) !== null && _d !== void 0 ? _d : null;
        return _this;
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
    return DynamicInputControlModel;
}(DynamicFormValueControlModel));

function maskToString(mask) {
    if (isString(mask)) {
        return mask;
    }
    else if (mask instanceof RegExp) {
        return mask.toString();
    }
    else if (Array.isArray(mask)) {
        return mask.map(function (value) { return maskToString(value); });
    }
    return null;
}
function maskFromString(mask) {
    if (isString(mask)) {
        var isRegExp = mask.startsWith("/") && mask.endsWith("/");
        return isRegExp ? new RegExp(mask.slice(1, mask.length - 1)) : mask;
    }
    else if (Array.isArray(mask)) {
        return mask.map(function (value) { return maskFromString(value); });
    }
    return null;
}
function parseReviver(_key, value) {
    var regexDateISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|([+\-])([\d|:]*))?$/;
    return isString(value) && regexDateISO.test(value) ? new Date(value) : value;
}

var DYNAMIC_FORM_CONTROL_TYPE_INPUT = "INPUT";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_COLOR = "color";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE = "date";
//export const DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME = "datetime";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME_LOCAL = "datetime-local";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL = "email";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE = "file";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_MONTH = "month";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER = "number";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_PASSWORD = "password";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_RANGE = "range";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_SEARCH = "search";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL = "tel";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT = "text";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_TIME = "time";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_URL = "url";
var DYNAMIC_FORM_CONTROL_INPUT_TYPE_WEEK = "week";
var DynamicInputModel = /** @class */ (function (_super) {
    __extends(DynamicInputModel, _super);
    function DynamicInputModel(config, layout) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, config, layout) || this;
        _this.files = null;
        _this.list$ = null;
        _this._list = null;
        _this._listId = null;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_INPUT;
        _this.accept = (_a = config.accept) !== null && _a !== void 0 ? _a : null;
        _this.inputType = (_b = config.inputType) !== null && _b !== void 0 ? _b : DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT;
        _this.mask = (_c = config.mask) !== null && _c !== void 0 ? _c : null;
        _this.max = config.max !== undefined ? config.max : null;
        _this.min = config.min !== undefined ? config.min : null;
        _this.multiple = isBoolean(config.multiple) ? config.multiple : null;
        _this.pattern = (_d = config.pattern) !== null && _d !== void 0 ? _d : null;
        _this.step = isNumber(config.step) ? config.step : null;
        if (config.list !== undefined) {
            _this.list = config.list;
            _this._listId = _this.id + "List";
        }
        return _this;
    }
    Object.defineProperty(DynamicInputModel.prototype, "listId", {
        get: function () {
            return this._listId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicInputModel.prototype, "hasList", {
        get: function () {
            return isObservable(this.list$);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicInputModel.prototype, "list", {
        set: function (list) {
            var _this = this;
            if (Array.isArray(list)) {
                this._list = list;
                this.list$ = of(this._list);
            }
            else if (isObservable(list)) {
                this.list$ = list.pipe(tap(function (list) { return _this._list = list; }));
            }
            else {
                this._list = null;
                this.list$ = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicInputModel.prototype.toJSON = function () {
        var json = _super.prototype.toJSON.call(this);
        if (this.mask !== null) {
            json.mask = isFunction(this.mask) ? this.mask : maskToString(this.mask);
        }
        return json;
    };
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
    return DynamicInputModel;
}(DynamicInputControlModel));

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

var DynamicFormControlWithTemplateComponent = /** @class */ (function (_super) {
    __extends(DynamicFormControlWithTemplateComponent, _super);
    function DynamicFormControlWithTemplateComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        return _this;
    }
    DynamicFormControlWithTemplateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutService
            .filterTemplatesByModel(this.model, this.templates)
            .forEach(function (template) { return _this.bindTemplate(template); });
    };
    DynamicFormControlWithTemplateComponent.prototype.bindTemplate = function (template) {
        if (isString(template.as) && this.templateDirectives.has(template.as)) {
            var property = this.templateDirectives.get(template.as);
            this.viewChild[property] = this.mapTemplate(template);
        }
    };
DynamicFormControlWithTemplateComponent.ɵfac = function DynamicFormControlWithTemplateComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
DynamicFormControlWithTemplateComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicFormControlWithTemplateComponent, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });

    return DynamicFormControlWithTemplateComponent;
}(DynamicFormControlComponent));

var DynamicListDirective = /** @class */ (function () {
    function DynamicListDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    DynamicListDirective.prototype.ngAfterViewInit = function () {
        if (isString(this.listId)) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "list", this.listId);
        }
    };
    DynamicListDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input("dynamicList"),
        __metadata("design:type", String)
    ], DynamicListDirective.prototype, "listId", void 0);
    DynamicListDirective = __decorate([ __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], DynamicListDirective);
DynamicListDirective.ɵfac = function DynamicListDirective_Factory(t) { return new (t || DynamicListDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
DynamicListDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicListDirective, selectors: [["", "dynamicList", ""]], inputs: { listId: ["dynamicList", "listId"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicListDirective, [{
        type: Directive,
        args: [{
                selector: "[dynamicList]"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { listId: [{
            type: Input,
            args: ["dynamicList"]
        }] }); })();
    return DynamicListDirective;
}());

var DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT;
(function (DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT) {
    DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT["Start"] = "START";
    DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT["End"] = "END";
})(DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT || (DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT = {}));
var DynamicTemplateDirective = /** @class */ (function () {
    function DynamicTemplateDirective(templateRef) {
        this.templateRef = templateRef;
        this.align = DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End;
        this.as = null;
    }
    DynamicTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
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
    DynamicTemplateDirective = __decorate([ __metadata("design:paramtypes", [TemplateRef])
    ], DynamicTemplateDirective);
DynamicTemplateDirective.ɵfac = function DynamicTemplateDirective_Factory(t) { return new (t || DynamicTemplateDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
DynamicTemplateDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicTemplateDirective, selectors: [["ng-template", "modelId", ""], ["ng-template", "modelType", ""]], inputs: { align: "align", as: "as", index: "index", modelId: "modelId", modelType: "modelType" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicTemplateDirective, [{
        type: Directive,
        args: [{
                selector: "ng-template[modelId],ng-template[modelType]"
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { align: [{
            type: Input
        }], as: [{
            type: Input
        }], index: [{
            type: Input
        }], modelId: [{
            type: Input
        }], modelType: [{
            type: Input
        }] }); })();
    return DynamicTemplateDirective;
}());

var DynamicDateControlModel = /** @class */ (function (_super) {
    __extends(DynamicDateControlModel, _super);
    function DynamicDateControlModel(config, layout) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, config, layout) || this;
        _this.format = (_a = config.format) !== null && _a !== void 0 ? _a : null;
        _this.max = (_b = config.max) !== null && _b !== void 0 ? _b : null;
        _this.min = (_c = config.min) !== null && _c !== void 0 ? _c : null;
        _this.placeholder = (_d = config.placeholder) !== null && _d !== void 0 ? _d : null;
        return _this;
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
    return DynamicDateControlModel;
}(DynamicFormValueControlModel));

var DynamicFileControlModel = /** @class */ (function (_super) {
    __extends(DynamicFileControlModel, _super);
    function DynamicFileControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFileControlModel.prototype, "multiple", void 0);
    return DynamicFileControlModel;
}(DynamicFormValueControlModel));

var DynamicFormOption = /** @class */ (function () {
    function DynamicFormOption(config) {
        var _a;
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.label = (_a = config.label) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
    }
    Object.defineProperty(DynamicFormOption.prototype, "text", {
        get: function () {
            return this.label;
        },
        set: function (text) {
            this.label = text;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormOption.prototype.toJSON = function () {
        return serialize(this);
    };
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
    return DynamicFormOption;
}());
var DynamicOptionControlModel = /** @class */ (function (_super) {
    __extends(DynamicOptionControlModel, _super);
    function DynamicOptionControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this._options = [];
        _this.options = config.options;
        return _this;
    }
    DynamicOptionControlModel.prototype.updateOptions$ = function () {
        this.options$ = of(this.options);
    };
    Object.defineProperty(DynamicOptionControlModel.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            var _this = this;
            if (Array.isArray(options)) {
                this._options = options.map(function (optionConfig) { return new DynamicFormOption(optionConfig); });
                this.updateOptions$();
            }
            else if (isObservable(options)) {
                this.options$ = options.pipe(map(function (optionsConfig) {
                    _this._options = optionsConfig.map(function (optionConfig) { return new DynamicFormOption(optionConfig); });
                    return _this._options;
                }));
            }
            else {
                this.updateOptions$();
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicOptionControlModel.prototype.add = function (optionConfig) {
        return this.insert(this.options.length, optionConfig);
    };
    DynamicOptionControlModel.prototype.get = function (index) {
        return this.options[index];
    };
    DynamicOptionControlModel.prototype.insert = function (index, optionConfig) {
        var option = new DynamicFormOption(optionConfig);
        this.options.splice(index, 0, option);
        this.updateOptions$();
        return option;
    };
    DynamicOptionControlModel.prototype.remove = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.options.splice(index, 1); });
        this.updateOptions$();
    };
    __decorate([
        serializable("options"),
        __metadata("design:type", Array)
    ], DynamicOptionControlModel.prototype, "_options", void 0);
    return DynamicOptionControlModel;
}(DynamicFormValueControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_GROUP = "GROUP";
var DynamicFormGroupModel = /** @class */ (function (_super) {
    __extends(DynamicFormGroupModel, _super);
    function DynamicFormGroupModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.group = [];
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_GROUP;
        _this.group = Array.isArray(config.group) ? config.group : [];
        _this.legend = (_a = config.legend) !== null && _a !== void 0 ? _a : null;
        return _this;
    }
    DynamicFormGroupModel.prototype.get = function (index) {
        return this.group[index];
    };
    DynamicFormGroupModel.prototype.set = function (index, controlModel) {
        this.group[index] = controlModel;
    };
    DynamicFormGroupModel.prototype.add = function (controlModel) {
        this.group.push(controlModel);
    };
    DynamicFormGroupModel.prototype.insert = function (index, controlModel) {
        this.group.splice(index, 0, controlModel);
    };
    DynamicFormGroupModel.prototype.move = function (index, step) {
        var _a;
        (_a = this.group).splice.apply(_a, __spread([index + step, 0], this.group.splice(index, 1)));
    };
    DynamicFormGroupModel.prototype.remove = function (index) {
        this.group.splice(index, 1);
    };
    DynamicFormGroupModel.prototype.size = function () {
        return this.group.length;
    };
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
    return DynamicFormGroupModel;
}(DynamicFormControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP = "CHECKBOX_GROUP";
var DynamicCheckboxGroupModel = /** @class */ (function (_super) {
    __extends(DynamicCheckboxGroupModel, _super);
    function DynamicCheckboxGroupModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP;
        return _this;
    }
    DynamicCheckboxGroupModel.prototype.check = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.group[index].checked = true; });
    };
    DynamicCheckboxGroupModel.prototype.uncheck = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.group[index].checked = false; });
    };
    DynamicCheckboxGroupModel.prototype.checkAll = function () {
        this.group.forEach(function (model) { return model.checked = true; });
    };
    DynamicCheckboxGroupModel.prototype.uncheckAll = function () {
        this.group.forEach(function (model) { return model.checked = false; });
    };
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicCheckboxGroupModel.prototype, "group", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicCheckboxGroupModel.prototype, "type", void 0);
    return DynamicCheckboxGroupModel;
}(DynamicFormGroupModel));

var DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER = "COLORPICKER";
var DynamicColorPickerModel = /** @class */ (function (_super) {
    __extends(DynamicColorPickerModel, _super);
    function DynamicColorPickerModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER;
        _this.format = isString(config.format) ? config.format : null;
        _this.inline = isBoolean(config.inline) ? config.inline : false;
        return _this;
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
    return DynamicColorPickerModel;
}(DynamicFormValueControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";
var DynamicDatePickerModel = /** @class */ (function (_super) {
    __extends(DynamicDatePickerModel, _super);
    function DynamicDatePickerModel(config, layout) {
        var _a, _b, _c;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER;
        _this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        _this.focusedDate = (_a = config.focusedDate) !== null && _a !== void 0 ? _a : null;
        _this.inline = isBoolean(config.inline) ? config.inline : false;
        _this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        _this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        _this.toggleIcon = isString(config.toggleIcon) ? config.toggleIcon : null;
        _this.toggleLabel = isString(config.toggleLabel) ? config.toggleLabel : null;
        _this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
        return _this;
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
    return DynamicDatePickerModel;
}(DynamicDateControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_EDITOR = "EDITOR";
var DynamicEditorModel = /** @class */ (function (_super) {
    __extends(DynamicEditorModel, _super);
    function DynamicEditorModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_EDITOR;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicEditorModel.prototype, "type", void 0);
    return DynamicEditorModel;
}(DynamicInputControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD = "FILE_UPLOAD";
var DynamicFileUploadModel = /** @class */ (function (_super) {
    __extends(DynamicFileUploadModel, _super);
    function DynamicFileUploadModel(config, layout) {
        var _a, _b;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD;
        _this.accept = Array.isArray(config.accept) ? config.accept : null;
        _this.autoUpload = isBoolean(config.autoUpload) ? config.autoUpload : true;
        _this.maxSize = isNumber(config.maxSize) ? config.maxSize : null;
        _this.minSize = isNumber(config.minSize) ? config.minSize : null;
        _this.removeUrl = (_a = config.removeUrl) !== null && _a !== void 0 ? _a : null;
        _this.showFileList = isBoolean(config.showFileList) ? config.showFileList : true;
        _this.url = (_b = config.url) !== null && _b !== void 0 ? _b : null;
        return _this;
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
    return DynamicFileUploadModel;
}(DynamicFileControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP = "RADIO_GROUP";
var DynamicRadioGroupModel = /** @class */ (function (_super) {
    __extends(DynamicRadioGroupModel, _super);
    function DynamicRadioGroupModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP;
        _this.legend = (_a = config.legend) !== null && _a !== void 0 ? _a : null;
        return _this;
    }
    DynamicRadioGroupModel.prototype.select = function (index) {
        this.value = this.get(index).value;
    };
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicRadioGroupModel.prototype, "legend", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicRadioGroupModel.prototype, "type", void 0);
    return DynamicRadioGroupModel;
}(DynamicOptionControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_RATING = "RATING";
var DynamicRatingModel = /** @class */ (function (_super) {
    __extends(DynamicRatingModel, _super);
    function DynamicRatingModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_RATING;
        _this.max = isNumber(config.max) ? config.max : 10;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicRatingModel.prototype, "max", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicRatingModel.prototype, "type", void 0);
    return DynamicRatingModel;
}(DynamicFormValueControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
var DynamicSelectModel = /** @class */ (function (_super) {
    __extends(DynamicSelectModel, _super);
    function DynamicSelectModel(config, layout) {
        var _a, _b, _c;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        _this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : ɵlooseIdentical;
        _this.filterable = isBoolean(config.filterable) ? config.filterable : false;
        _this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        _this.placeholder = (_a = config.placeholder) !== null && _a !== void 0 ? _a : "";
        _this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        _this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
        return _this;
    }
    DynamicSelectModel.prototype.select = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        this.value = this.multiple ? indices.map(function (index) { return _this.get(index).value; }) : this.get(indices[0]).value;
    };
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
    return DynamicSelectModel;
}(DynamicOptionControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_SLIDER = "SLIDER";
var DynamicSliderModel = /** @class */ (function (_super) {
    __extends(DynamicSliderModel, _super);
    function DynamicSliderModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SLIDER;
        _this.max = isNumber(config.max) ? config.max : 10;
        _this.min = isNumber(config.min) ? config.min : 0;
        _this.step = isNumber(config.step) ? config.step : 1;
        _this.vertical = isBoolean(config.vertical) ? config.vertical : false;
        return _this;
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
    return DynamicSliderModel;
}(DynamicFormValueControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";
var DynamicSwitchModel = /** @class */ (function (_super) {
    __extends(DynamicSwitchModel, _super);
    function DynamicSwitchModel(config, layout) {
        var _a, _b;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SWITCH;
        _this.offLabel = (_a = config.offLabel) !== null && _a !== void 0 ? _a : null;
        _this.onLabel = (_b = config.onLabel) !== null && _b !== void 0 ? _b : null;
        return _this;
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
    return DynamicSwitchModel;
}(DynamicCheckControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA = "TEXTAREA";
var DYNAMIC_FORM_TEXTAREA_WRAP_HARD = "hard";
var DYNAMIC_FORM_TEXTAREA_WRAP_SOFT = "soft";
var DynamicTextAreaModel = /** @class */ (function (_super) {
    __extends(DynamicTextAreaModel, _super);
    function DynamicTextAreaModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA;
        _this.cols = isNumber(config.cols) ? config.cols : 20;
        _this.rows = isNumber(config.rows) ? config.rows : 2;
        _this.wrap = (_a = config.wrap) !== null && _a !== void 0 ? _a : DYNAMIC_FORM_TEXTAREA_WRAP_SOFT;
        return _this;
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
    return DynamicTextAreaModel;
}(DynamicInputControlModel));

var DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER = "TIMEPICKER";
var DynamicTimePickerModel = /** @class */ (function (_super) {
    __extends(DynamicTimePickerModel, _super);
    function DynamicTimePickerModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER;
        _this.meridian = isBoolean(config.meridian) ? config.meridian : false;
        _this.showSeconds = isBoolean(config.showSeconds) ? config.showSeconds : false;
        return _this;
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
    return DynamicTimePickerModel;
}(DynamicDateControlModel));

var DYNAMIC_VALIDATORS = new InjectionToken("DYNAMIC_VALIDATORS");

var DEFAULT_ERROR_STATE_MATCHER = function (control, model, hasFocus) {
    return control.touched && !hasFocus;
};
var CHANGE_ERROR_STATE_MATCHER = function (control, model, hasFocus) {
    return (model.updateOn === DynamicFormHook.Change || model.updateOn === null) ? control.dirty : control.touched && !hasFocus;
};
var DYNAMIC_ERROR_MESSAGES_MATCHER = new InjectionToken("DYNAMIC_ERROR_MESSAGES_MATCHER");

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
    DynamicFormValidationService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormValidationService_Factory() { return new DynamicFormValidationService(ɵɵinject(NG_VALIDATORS, 8), ɵɵinject(NG_ASYNC_VALIDATORS, 8), ɵɵinject(DYNAMIC_VALIDATORS, 8), ɵɵinject(DYNAMIC_ERROR_MESSAGES_MATCHER, 8)); }, token: DynamicFormValidationService, providedIn: "root" });
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

var DYNAMIC_FORM_CONTROL_MAP_FN = new InjectionToken("DYNAMIC_FORM_CONTROL_MAP_FN");
var DynamicFormComponentService = /** @class */ (function () {
    function DynamicFormComponentService(DYNAMIC_FORM_CONTROL_MAP_FN) {
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
        this.forms = [];
        this.formControls = {};
        this.DYNAMIC_FORM_CONTROL_MAP_FN = DYNAMIC_FORM_CONTROL_MAP_FN;
    }
    DynamicFormComponentService.prototype.getForms = function () {
        return this.forms.values();
    };
    DynamicFormComponentService.prototype.registerForm = function (component) {
        this.forms.push(component);
    };
    DynamicFormComponentService.prototype.unregisterForm = function (component) {
        var indexOf = this.forms.indexOf(component);
        if (indexOf !== -1) {
            this.forms.splice(indexOf, 1);
        }
    };
    DynamicFormComponentService.prototype.getFormControlRef = function (modelId, index) {
        var ref = this.formControls[modelId];
        if (isNumber(index)) {
            return Array.isArray(ref) ? ref[index] : undefined;
        }
        else {
            return ref;
        }
    };
    DynamicFormComponentService.prototype.registerFormControl = function (model, ref, index) {
        if (isNumber(index)) { // threat model as array child
            var arrayRef = this.formControls[model.id] || [];
            if (Array.isArray(arrayRef)) {
                arrayRef.splice(index, 0, ref);
                this.formControls[model.id] = arrayRef;
            }
            else {
                console.warn("registerFormControlRef is called with index for a non-array form control: " + model.id);
            }
        }
        else {
            this.formControls[model.id] = ref;
        }
    };
    DynamicFormComponentService.prototype.unregisterFormControl = function (modelId, index) {
        var componentRef = this.formControls[modelId];
        if (isNumber(index)) {
            if (Array.isArray(componentRef) && componentRef[index] !== undefined) {
                componentRef.splice(index, 1);
            }
        }
        else if (componentRef !== undefined) {
            delete this.formControls[modelId];
        }
    };
    DynamicFormComponentService.prototype.getCustomComponentType = function (model) {
        return isFunction(this.DYNAMIC_FORM_CONTROL_MAP_FN) ? this.DYNAMIC_FORM_CONTROL_MAP_FN(model) : null;
    };
    DynamicFormComponentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DYNAMIC_FORM_CONTROL_MAP_FN,] }, { type: Optional }] }
    ]; };
    DynamicFormComponentService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormComponentService_Factory() { return new DynamicFormComponentService(ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); }, token: DynamicFormComponentService, providedIn: "root" });
    DynamicFormComponentService = __decorate([ __param(0, Inject(DYNAMIC_FORM_CONTROL_MAP_FN)), __param(0, Optional()),
        __metadata("design:paramtypes", [Object])
    ], DynamicFormComponentService);
DynamicFormComponentService.ɵfac = function DynamicFormComponentService_Factory(t) { return new (t || DynamicFormComponentService)(ɵngcc0.ɵɵinject(DYNAMIC_FORM_CONTROL_MAP_FN, 8)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormComponentService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DYNAMIC_FORM_CONTROL_MAP_FN]
            }, {
                type: Optional
            }] }]; }, null); })();
    return DynamicFormComponentService;
}());

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
    DynamicFormService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormService_Factory() { return new DynamicFormService(ɵɵinject(DynamicFormComponentService), ɵɵinject(DynamicFormValidationService)); }, token: DynamicFormService, providedIn: "root" });
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

var MATCH_DISABLED = "DISABLED";
var MATCH_ENABLED = "ENABLED";
var MATCH_HIDDEN = "HIDDEN";
var MATCH_OPTIONAL = "OPTIONAL";
var MATCH_REQUIRED = "REQUIRED";
var MATCH_VISIBLE = "VISIBLE";
var AND_OPERATOR = "AND";
var OR_OPERATOR = "OR";
var DYNAMIC_MATCHERS = new InjectionToken("DYNAMIC_MATCHERS");
var DISABLED_MATCHER = {
    match: MATCH_DISABLED,
    opposingMatch: MATCH_ENABLED,
    onChange: function (hasMatch, model) {
        model.disabled = hasMatch;
    }
};
var HIDDEN_MATCHER = {
    match: MATCH_HIDDEN,
    opposingMatch: MATCH_VISIBLE,
    onChange: function (hasMatch, model) {
        model.hidden = hasMatch;
    }
};
var REQUIRED_MATCHER = {
    match: MATCH_REQUIRED,
    opposingMatch: MATCH_OPTIONAL,
    onChange: function (hasMatch, model, control, injector) {
        var validatorsConfig = null;
        if (hasMatch) {
            validatorsConfig = isObject(model.validators) ? __assign(__assign({}, model.validators), { required: null }) : { required: null };
        }
        else {
            if (isObject(model.validators)) {
                delete model.validators.required;
                validatorsConfig = __assign({}, model.validators);
            }
        }
        injector.get(DynamicFormValidationService).updateValidators(validatorsConfig, control, model);
        injector.get(DynamicFormService).detectChanges();
    }
};
var DISABLED_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: DISABLED_MATCHER,
    multi: true
};
var HIDDEN_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: HIDDEN_MATCHER,
    multi: true
};
var REQUIRED_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: REQUIRED_MATCHER,
    multi: true
};
var DYNAMIC_MATCHER_PROVIDERS = [DISABLED_MATCHER_PROVIDER, HIDDEN_MATCHER_PROVIDER, REQUIRED_MATCHER_PROVIDER];

var DynamicFormLayoutService = /** @class */ (function () {
    function DynamicFormLayoutService() {
    }
    DynamicFormLayoutService.prototype.findById = function (id, formLayout) {
        var e_1, _a;
        if (isObject(formLayout)) {
            try {
                for (var _b = __values(Object.keys(formLayout)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    if (key === id) {
                        return formLayout[key];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return null;
    };
    DynamicFormLayoutService.prototype.findByModel = function (model, formLayout) {
        var e_2, _a;
        var controlLayout = null;
        if (isObject(formLayout)) {
            var _loop_1 = function (key) {
                key.split(",").forEach(function (substring) {
                    var selector = substring.trim();
                    if (selector === model.id || selector === model.type) {
                        controlLayout = formLayout[key];
                    }
                });
            };
            try {
                for (var _b = __values(Object.keys(formLayout)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _loop_1(key);
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
        return controlLayout;
    };
    DynamicFormLayoutService.prototype.filterTemplatesByModel = function (model, templates) {
        var filterCallback = function (template) {
            return template.modelId === model.id || template.modelType === model.type;
        };
        if (templates instanceof QueryList) {
            return templates.filter(filterCallback);
        }
        else if (Array.isArray(templates)) {
            return templates.filter(filterCallback);
        }
        return [];
    };
    DynamicFormLayoutService.prototype.getAlignedTemplate = function (model, templates, alignment) {
        return this.filterTemplatesByModel(model, templates)
            .find(function (template) { return template.as === null && template.align === alignment; });
    };
    /*
    getIndexedTemplates(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective[] | undefined {
        return this.filterTemplatesByModel(model, templates).filter(template => template.as === null);
    }
    */
    DynamicFormLayoutService.prototype.getStartTemplate = function (model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.Start);
    };
    DynamicFormLayoutService.prototype.getEndTemplate = function (model, templates) {
        return this.getAlignedTemplate(model, templates, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT.End);
    };
    DynamicFormLayoutService.prototype.getClass = function (layout, context, place) {
        if (isObject(layout) && layout.hasOwnProperty(context)) {
            var config = layout[context];
            if (config.hasOwnProperty(place)) {
                return config[place];
            }
        }
        return "";
    };
    DynamicFormLayoutService.prototype.getHostClass = function (layout) {
        var keys = ["element", "grid"];
        var cls = "";
        if (isObject(layout)) {
            keys.forEach(function (key) {
                if (isObject(layout[key]) && isString(layout[key].host)) {
                    cls = cls + (" " + layout[key].host);
                }
            });
        }
        return cls;
    };
    DynamicFormLayoutService.prototype.getElementId = function (model) {
        var id = model.id;
        var parent = model.parent;
        while (parent !== null) {
            if (parent instanceof DynamicFormArrayGroupModel) {
                id = parent.context.id + "-" + parent.index + "-" + model.id;
                break;
            }
            parent = parent.parent;
        }
        return id;
    };
    DynamicFormLayoutService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormLayoutService_Factory() { return new DynamicFormLayoutService(); }, token: DynamicFormLayoutService, providedIn: "root" });
DynamicFormLayoutService.ɵfac = function DynamicFormLayoutService_Factory(t) { return new (t || DynamicFormLayoutService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormLayoutService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();
    return DynamicFormLayoutService;
}());

var DynamicFormRelationService = /** @class */ (function () {
    function DynamicFormRelationService(MATCHERS, injector) {
        this.MATCHERS = MATCHERS;
        this.injector = injector;
    }
    DynamicFormRelationService.prototype.getRelatedFormControls = function (model, group) {
        var conditionReducer = function (controls, condition) {
            var _a;
            var path = (_a = condition.rootPath) !== null && _a !== void 0 ? _a : condition.id;
            if (!controls.hasOwnProperty(path)) {
                var control = condition.rootPath ? group.root.get(condition.rootPath) : group.get(condition.id);
                control instanceof FormControl ? controls[path] = control : console.warn("No related form control with id " + condition.id + " could be found");
            }
            return controls;
        };
        var relationReducer = function (controls, relation) { return relation.when.reduce(conditionReducer, controls); };
        return model.relations.reduce(relationReducer, {});
    };
    DynamicFormRelationService.prototype.findRelationByMatcher = function (relations, matcher) {
        return relations.find(function (relation) { return [matcher.match, matcher.opposingMatch].includes(relation.match); });
    };
    DynamicFormRelationService.prototype.matchesCondition = function (relation, relatedFormControls, matcher) {
        var _a;
        var operator = (_a = relation.operator) !== null && _a !== void 0 ? _a : OR_OPERATOR;
        return relation.when.reduce(function (hasAlreadyMatched, condition, index) {
            var e_1, _a;
            var _b;
            var path = (_b = condition.rootPath) !== null && _b !== void 0 ? _b : condition.id;
            var relatedFormControl;
            try {
                for (var _c = __values(Object.entries(relatedFormControls)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], control = _e[1];
                    if (key === path) {
                        relatedFormControl = control;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
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
    };
    DynamicFormRelationService.prototype.subscribeRelations = function (model, group, control) {
        var _this = this;
        var relatedFormControls = this.getRelatedFormControls(model, group);
        var subscriptions = [];
        Object.values(relatedFormControls).forEach(function (relatedControl) {
            var valueChanges = relatedControl.valueChanges.pipe(startWith(relatedControl.value));
            var statusChanges = relatedControl.statusChanges.pipe(startWith(relatedControl.status));
            subscriptions.push(merge(valueChanges, statusChanges).subscribe(function () {
                _this.MATCHERS.forEach(function (matcher) {
                    var relation = _this.findRelationByMatcher(model.relations, matcher);
                    if (relation !== undefined) {
                        var hasMatch = _this.matchesCondition(relation, relatedFormControls, matcher);
                        matcher.onChange(hasMatch, model, control, _this.injector);
                    }
                });
            }));
        });
        return subscriptions;
    };
    DynamicFormRelationService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DYNAMIC_MATCHERS,] }] },
        { type: Injector }
    ]; };
    DynamicFormRelationService.ɵprov = ɵɵdefineInjectable({ factory: function DynamicFormRelationService_Factory() { return new DynamicFormRelationService(ɵɵinject(DYNAMIC_MATCHERS, 8), ɵɵinject(INJECTOR)); }, token: DynamicFormRelationService, providedIn: "root" });
    DynamicFormRelationService = __decorate([ __param(0, Optional()), __param(0, Inject(DYNAMIC_MATCHERS)),
        __metadata("design:paramtypes", [Array, Injector])
    ], DynamicFormRelationService);
DynamicFormRelationService.ɵfac = function DynamicFormRelationService_Factory(t) { return new (t || DynamicFormRelationService)(ɵngcc0.ɵɵinject(DYNAMIC_MATCHERS, 8), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormRelationService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DYNAMIC_MATCHERS]
            }] }, { type: ɵngcc0.Injector }]; }, null); })();
    return DynamicFormRelationService;
}());

var AUTOCOMPLETE_OFF = "off";
var AUTOCOMPLETE_ON = "on";
var AUTOFILL_TOKEN_BILLING = "billing";
var AUTOFILL_TOKEN_SHIPPING = "shipping";
var AUTOFILL_TOKENS_ADDRESS = [AUTOFILL_TOKEN_BILLING, AUTOFILL_TOKEN_SHIPPING];
var AUTOFILL_TOKEN_HOME = "home";
var AUTOFILL_TOKEN_WORK = "work";
var AUTOFILL_TOKEN_MOBILE = "mobile";
var AUTOFILL_TOKEN_FAX = "fax";
var AUTOFILL_TOKEN_PAGER = "pager";
var AUTOFILL_TOKENS_CONTACT = [
    AUTOFILL_TOKEN_FAX, AUTOFILL_TOKEN_HOME, AUTOFILL_TOKEN_MOBILE, AUTOFILL_TOKEN_PAGER, AUTOFILL_TOKEN_WORK
];
var AUTOFILL_FIELD_STREET_ADDRESS = "street-address";
var AUTOFILL_FIELD_ADDRESS_LINE_1 = "address-line1";
var AUTOFILL_FIELD_ADDRESS_LINE_2 = "address-line2";
var AUTOFILL_FIELD_ADDRESS_LINE_3 = "address-line3";
var AUTOFILL_FIELD_ADDRESS_LEVEL_4 = "address-level4";
var AUTOFILL_FIELD_ADDRESS_LEVEL_3 = "address-level3";
var AUTOFILL_FIELD_ADDRESS_LEVEL_2 = "address-level2";
var AUTOFILL_FIELD_ADDRESS_LEVEL_1 = "address-level1";
var AUTOFILL_FIELD_NAME = "name";
var AUTOFILL_FIELD_HONORIFIC_PREFIX = "honorific-prefix";
var AUTOFILL_FIELD_GIVEN_NAME = "given-name";
var AUTOFILL_FIELD_ADDITIONAL_NAME = "additional-name";
var AUTOFILL_FIELD_FAMILY_NAME = "family-name";
var AUTOFILL_FIELD_HONORIFIC_SUFFIX = "honorific-suffix";
var AUTOFILL_FIELD_NICKNAME = "nickname";
var AUTOFILL_FIELD_USERNAME = "username";
var AUTOFILL_FIELD_NEW_PASSWORD = "new-password";
var AUTOFILL_FIELD_CURRENT_PASSWORD = "current-password";
var AUTOFILL_FIELD_ORGANIZATION_TITLE = "organization-title";
var AUTOFILL_FIELD_ORGANIZATION = "organization";
var AUTOFILL_FIELD_COUNTRY = "country";
var AUTOFILL_FIELD_COUNTRY_NAME = "country-name";
var AUTOFILL_FIELD_POSTAL_CODE = "postal-code";
var AUTOFILL_FIELD_CC_NAME = "cc-name";
var AUTOFILL_FIELD_CC_GIVEN_NAME = "cc-given-name";
var AUTOFILL_FIELD_CC_ADDITIONAL_NAME = "cc-additional-name";
var AUTOFILL_FIELD_CC_FAMILY_NAME = "cc-family-name";
var AUTOFILL_FIELD_CC_NUMBER = "cc-number";
var AUTOFILL_FIELD_CC_EXP = "cc-exp";
var AUTOFILL_FIELD_CC_EXP_MONTH = "cc-exp-month";
var AUTOFILL_FIELD_CC_EXP_YEAR = "cc-exp-year";
var AUTOFILL_FIELD_CC_CSC = "cc-csc";
var AUTOFILL_FIELD_CC_TYPE = "cc-type";
var AUTOFILL_FIELD_TRANSACTION_CURRENCY = "transaction-currency";
var AUTOFILL_FIELD_TRANSACTION_AMOUNT = "transaction-amount";
var AUTOFILL_FIELD_LANGUAGE = "language";
var AUTOFILL_FIELD_BDAY = "bday";
var AUTOFILL_FIELD_BDAY_DAY = "bday-day";
var AUTOFILL_FIELD_BDAY_MONTH = "bday-month";
var AUTOFILL_FIELD_BDAY_YEAR = "bday-year";
var AUTOFILL_FIELD_SEX = "sex";
var AUTOFILL_FIELD_URL = "url";
var AUTOFILL_FIELD_PHOTO = "photo";
var AUTOFILL_FIELDS = [
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
var AUTOFILL_FIELD_TEL = "tel";
var AUTOFILL_FIELD_TEL_COUNTRY_CODE = "tel-country-code";
var AUTOFILL_FIELD_TEL_NATIONAL = "tel-national";
var AUTOFILL_FIELD_TEL_AREA_CODE = "tel-area-code";
var AUTOFILL_FIELD_TEL_LOCAL = "tel-local";
var AUTOFILL_FIELD_TEL_LOCAL_PREFIX = "tel-local-prefix";
var AUTOFILL_FIELD_TEL_LOCAL_SUFFIX = "tel-local-suffix";
var AUTOFILL_FIELD_TEL_LOCAL_EXTENSION = "tel-extension";
var AUTOFILL_FIELD_EMAIL = "email";
var AUTOFILL_FIELD_IMPP = "impp";
var AUTOFILL_FIELDS_CONTACT = [
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
    var toExpression = function (total, currentValue) { return total + "|" + currentValue; };
    var tokensAddress = AUTOFILL_TOKENS_ADDRESS.reduce(toExpression);
    var tokensContact = AUTOFILL_TOKENS_CONTACT.reduce(toExpression);
    var fields = AUTOFILL_FIELDS.reduce(toExpression);
    var fieldsContact = AUTOFILL_FIELDS_CONTACT.reduce(toExpression);
    var regex = new RegExp("^(section-\\w+\\s{1})?((" + tokensAddress + "){1}\\s)?((" + fields + "){1}|((" + tokensContact + "){1}\\s{1}(" + fieldsContact + ")))$");
    return regex.test(tokens);
}

var DynamicFormsCoreModule = /** @class */ (function () {
    function DynamicFormsCoreModule() {
    }
    DynamicFormsCoreModule_1 = DynamicFormsCoreModule;
    /*@deprecated*/
    DynamicFormsCoreModule.forRoot = function () {
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
    };
    var DynamicFormsCoreModule_1;
DynamicFormsCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DynamicFormsCoreModule });
DynamicFormsCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DynamicFormsCoreModule_Factory(t) { return new (t || DynamicFormsCoreModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DynamicFormsCoreModule, { declarations: function () { return [DynamicListDirective, DynamicTemplateDirective]; }, imports: function () { return [CommonModule,
        ReactiveFormsModule]; }, exports: function () { return [DynamicListDirective, DynamicTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormsCoreModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return []; }, null); })();
    return DynamicFormsCoreModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { AND_OPERATOR, AUTOCOMPLETE_OFF, AUTOCOMPLETE_ON, AUTOFILL_FIELDS, AUTOFILL_FIELDS_CONTACT, AUTOFILL_FIELD_ADDITIONAL_NAME, AUTOFILL_FIELD_ADDRESS_LEVEL_1, AUTOFILL_FIELD_ADDRESS_LEVEL_2, AUTOFILL_FIELD_ADDRESS_LEVEL_3, AUTOFILL_FIELD_ADDRESS_LEVEL_4, AUTOFILL_FIELD_ADDRESS_LINE_1, AUTOFILL_FIELD_ADDRESS_LINE_2, AUTOFILL_FIELD_ADDRESS_LINE_3, AUTOFILL_FIELD_BDAY, AUTOFILL_FIELD_BDAY_DAY, AUTOFILL_FIELD_BDAY_MONTH, AUTOFILL_FIELD_BDAY_YEAR, AUTOFILL_FIELD_CC_ADDITIONAL_NAME, AUTOFILL_FIELD_CC_CSC, AUTOFILL_FIELD_CC_EXP, AUTOFILL_FIELD_CC_EXP_MONTH, AUTOFILL_FIELD_CC_EXP_YEAR, AUTOFILL_FIELD_CC_FAMILY_NAME, AUTOFILL_FIELD_CC_GIVEN_NAME, AUTOFILL_FIELD_CC_NAME, AUTOFILL_FIELD_CC_NUMBER, AUTOFILL_FIELD_CC_TYPE, AUTOFILL_FIELD_COUNTRY, AUTOFILL_FIELD_COUNTRY_NAME, AUTOFILL_FIELD_CURRENT_PASSWORD, AUTOFILL_FIELD_EMAIL, AUTOFILL_FIELD_FAMILY_NAME, AUTOFILL_FIELD_GIVEN_NAME, AUTOFILL_FIELD_HONORIFIC_PREFIX, AUTOFILL_FIELD_HONORIFIC_SUFFIX, AUTOFILL_FIELD_IMPP, AUTOFILL_FIELD_LANGUAGE, AUTOFILL_FIELD_NAME, AUTOFILL_FIELD_NEW_PASSWORD, AUTOFILL_FIELD_NICKNAME, AUTOFILL_FIELD_ORGANIZATION, AUTOFILL_FIELD_ORGANIZATION_TITLE, AUTOFILL_FIELD_PHOTO, AUTOFILL_FIELD_POSTAL_CODE, AUTOFILL_FIELD_SEX, AUTOFILL_FIELD_STREET_ADDRESS, AUTOFILL_FIELD_TEL, AUTOFILL_FIELD_TEL_AREA_CODE, AUTOFILL_FIELD_TEL_COUNTRY_CODE, AUTOFILL_FIELD_TEL_LOCAL, AUTOFILL_FIELD_TEL_LOCAL_EXTENSION, AUTOFILL_FIELD_TEL_LOCAL_PREFIX, AUTOFILL_FIELD_TEL_LOCAL_SUFFIX, AUTOFILL_FIELD_TEL_NATIONAL, AUTOFILL_FIELD_TRANSACTION_AMOUNT, AUTOFILL_FIELD_TRANSACTION_CURRENCY, AUTOFILL_FIELD_URL, AUTOFILL_FIELD_USERNAME, AUTOFILL_TOKENS_ADDRESS, AUTOFILL_TOKENS_CONTACT, AUTOFILL_TOKEN_BILLING, AUTOFILL_TOKEN_FAX, AUTOFILL_TOKEN_HOME, AUTOFILL_TOKEN_MOBILE, AUTOFILL_TOKEN_PAGER, AUTOFILL_TOKEN_SHIPPING, AUTOFILL_TOKEN_WORK, CHANGE_ERROR_STATE_MATCHER, DEFAULT_ERROR_STATE_MATCHER, DISABLED_MATCHER, DISABLED_MATCHER_PROVIDER, DYNAMIC_ERROR_MESSAGES_MATCHER, DYNAMIC_FORM_CONTROL_INPUT_TYPE_COLOR, DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_DATETIME_LOCAL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_MONTH, DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, DYNAMIC_FORM_CONTROL_INPUT_TYPE_PASSWORD, DYNAMIC_FORM_CONTROL_INPUT_TYPE_RANGE, DYNAMIC_FORM_CONTROL_INPUT_TYPE_SEARCH, DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT, DYNAMIC_FORM_CONTROL_INPUT_TYPE_TIME, DYNAMIC_FORM_CONTROL_INPUT_TYPE_URL, DYNAMIC_FORM_CONTROL_INPUT_TYPE_WEEK, DYNAMIC_FORM_CONTROL_MAP_FN, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_EDITOR, DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_RATING, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DYNAMIC_FORM_TEXTAREA_WRAP_HARD, DYNAMIC_FORM_TEXTAREA_WRAP_SOFT, DYNAMIC_MATCHERS, DYNAMIC_MATCHER_PROVIDERS, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT, DYNAMIC_VALIDATORS, DynamicCheckControlModel, DynamicCheckboxGroupModel, DynamicCheckboxModel, DynamicColorPickerModel, DynamicDateControlModel, DynamicDatePickerModel, DynamicEditorModel, DynamicFileControlModel, DynamicFileUploadModel, DynamicFormArrayComponent, DynamicFormArrayGroupModel, DynamicFormArrayModel, DynamicFormComponent, DynamicFormComponentService, DynamicFormControlComponent, DynamicFormControlContainerComponent, DynamicFormControlEventType, DynamicFormControlModel, DynamicFormControlWithTemplateComponent, DynamicFormGroupComponent, DynamicFormGroupModel, DynamicFormHook, DynamicFormLayoutService, DynamicFormOption, DynamicFormRelationService, DynamicFormService, DynamicFormValidationService, DynamicFormValueControlModel, DynamicFormsCoreModule, DynamicInputControlModel, DynamicInputModel, DynamicListDirective, DynamicOptionControlModel, DynamicRadioGroupModel, DynamicRatingModel, DynamicSelectModel, DynamicSliderModel, DynamicSwitchModel, DynamicTemplateDirective, DynamicTextAreaModel, DynamicTimePickerModel, HIDDEN_MATCHER, HIDDEN_MATCHER_PROVIDER, MATCH_DISABLED, MATCH_ENABLED, MATCH_HIDDEN, MATCH_OPTIONAL, MATCH_REQUIRED, MATCH_VISIBLE, METADATA_KEY_SERIALIZABLE, OR_OPERATOR, REQUIRED_MATCHER, REQUIRED_MATCHER_PROVIDER, getSerializables, isAddressToken, isBoolean, isContactField, isContactToken, isDynamicFormControlEvent, isField, isFunction, isNumber, isObject, isSectionToken, isString, maskFromString, maskToString, parseReviver, serializable, serialize, validate };

//# sourceMappingURL=core.js.map