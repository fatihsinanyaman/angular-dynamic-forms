import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChanges, Type, ViewContainerRef } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { DynamicFormControlCustomEvent, DynamicFormControlEvent } from "./dynamic-form-control-event";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
import { DynamicFormControlLayout, DynamicFormControlLayoutContext, DynamicFormControlLayoutPlace } from "../model/misc/dynamic-form-control-layout.model";
import { DynamicFormControl } from "./dynamic-form-control-interface";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormLayout, DynamicFormLayoutService } from "../service/dynamic-form-layout.service";
import { DynamicFormValidationService } from "../service/dynamic-form-validation.service";
import { DynamicFormComponentService } from "../service/dynamic-form-component.service";
import { DynamicFormRelationService } from "../service/dynamic-form-relation.service";
export declare abstract class DynamicFormControlContainerComponent implements OnChanges, OnDestroy {
    protected changeDetectorRef: ChangeDetectorRef;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    protected componentService: DynamicFormComponentService;
    protected relationService: DynamicFormRelationService;
    private _hasFocus;
    context: DynamicFormArrayGroupModel | null;
    control: FormControl;
    group: FormGroup;
    hostClass: string[];
    klass: string;
    layout: DynamicFormLayout;
    model: DynamicFormControlModel;
    contentTemplateList: QueryList<DynamicTemplateDirective> | undefined;
    inputTemplateList: QueryList<DynamicTemplateDirective> | undefined;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    customEvent: EventEmitter<DynamicFormControlEvent> | undefined;
    focus: EventEmitter<DynamicFormControlEvent>;
    componentViewContainerRef: ViewContainerRef;
    protected componentRef: ComponentRef<DynamicFormControl>;
    protected componentSubscriptions: Subscription[];
    protected controlLayout: DynamicFormControlLayout;
    protected subscriptions: Subscription[];
    protected constructor(changeDetectorRef: ChangeDetectorRef, componentFactoryResolver: ComponentFactoryResolver, layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService, componentService: DynamicFormComponentService, relationService: DynamicFormRelationService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    abstract get componentType(): Type<DynamicFormControl> | null;
    get id(): string;
    get hasFocus(): boolean;
    get isInvalid(): boolean;
    get isValid(): boolean;
    get errorMessages(): string[];
    get showErrorMessages(): boolean;
    get hasLabel(): boolean;
    get hasHint(): boolean;
    get hint(): string | null;
    get isCheckbox(): boolean;
    get templates(): QueryList<DynamicTemplateDirective> | undefined;
    get startTemplate(): DynamicTemplateDirective | undefined;
    get endTemplate(): DynamicTemplateDirective | undefined;
    getClass(context: DynamicFormControlLayoutContext, place: DynamicFormControlLayoutPlace): string;
    markForCheck(): void;
    protected createFormControlComponent(): void;
    protected destroyFormControlComponent(): void;
    protected createDynamicFormControlEvent($event: any, type: string): DynamicFormControlEvent;
    unsubscribe(): void;
    onControlValueChanges(value: any): void;
    onModelValueUpdates(value: any): void;
    onModelDisabledUpdates(disabled: boolean): void;
    onLayoutOrModelChange(): void;
    onModelChange(): void;
    onGroupOrModelChange(): void;
    onChange($event: Event | DynamicFormControlEvent | any): void;
    onBlur($event: FocusEvent | DynamicFormControlEvent | any): void;
    onFocus($event: FocusEvent | DynamicFormControlEvent | any): void;
    onCustomEvent($event: DynamicFormControlEvent | DynamicFormControlCustomEvent): void;
    private registerFormControlComponentRef;
    private unregisterFormControlComponentRef;
}
