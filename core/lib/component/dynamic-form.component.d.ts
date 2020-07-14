import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent } from "./dynamic-form-control-container.component";
import { DynamicFormControlEvent } from "./dynamic-form-control-event";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormModel } from "../model/dynamic-form.model";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormLayout } from "../service/dynamic-form-layout.service";
import { DynamicFormComponentService } from "../service/dynamic-form-component.service";
import * as ɵngcc0 from '@angular/core';
export declare abstract class DynamicFormComponent implements OnInit, OnDestroy {
    protected changeDetectorRef: ChangeDetectorRef;
    protected componentService: DynamicFormComponentService;
    group: FormGroup;
    model: DynamicFormModel;
    layout: DynamicFormLayout;
    components: QueryList<DynamicFormControlContainerComponent>;
    templates: QueryList<DynamicTemplateDirective>;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    protected constructor(changeDetectorRef: ChangeDetectorRef, componentService: DynamicFormComponentService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackByFn(_index: number, model: DynamicFormControlModel): string;
    markForCheck(): void;
    detectChanges(): void;
    onBlur($event: DynamicFormControlEvent): void;
    onChange($event: DynamicFormControlEvent): void;
    onFocus($event: DynamicFormControlEvent): void;
    onCustomEvent($event: DynamicFormControlEvent, customEventEmitter: EventEmitter<DynamicFormControlEvent>): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicFormComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DynamicFormComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=dynamic-form.component.d.ts.map