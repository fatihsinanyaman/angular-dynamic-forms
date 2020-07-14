import { QueryList } from "@angular/core";
import { FormArray } from "@angular/forms";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormArrayModel } from "../model/form-array/dynamic-form-array.model";
import { DynamicFormControlContainerComponent } from "./dynamic-form-control-container.component";
export declare abstract class DynamicFormArrayComponent extends DynamicFormControlComponent {
    components: QueryList<DynamicFormControlContainerComponent>;
    model: DynamicFormArrayModel;
    templates: QueryList<DynamicTemplateDirective> | undefined;
    get array(): FormArray;
    get startTemplate(): DynamicTemplateDirective | undefined;
    get endTemplate(): DynamicTemplateDirective | undefined;
    markForCheck(): void;
}
