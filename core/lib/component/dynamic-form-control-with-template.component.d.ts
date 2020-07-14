import { AfterViewInit, QueryList, TemplateRef } from "@angular/core";
import { DynamicFormControlWithTemplate } from "./dynamic-form-control-with-template-interface";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { DynamicFormLayoutService } from "../service/dynamic-form-layout.service";
import { DynamicFormValidationService } from "../service/dynamic-form-validation.service";
import * as ɵngcc0 from '@angular/core';
export declare abstract class DynamicFormControlWithTemplateComponent extends DynamicFormControlComponent implements DynamicFormControlWithTemplate, AfterViewInit {
    protected layoutService: DynamicFormLayoutService;
    protected validationService: DynamicFormValidationService;
    readonly templateDirectives: Map<string, string>;
    templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
    protected constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService);
    ngAfterViewInit(): void;
    abstract get viewChild(): any;
    abstract mapTemplate(template: DynamicTemplateDirective): DynamicTemplateDirective | TemplateRef<any>;
    bindTemplate(template: DynamicTemplateDirective): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicFormControlWithTemplateComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DynamicFormControlWithTemplateComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=dynamic-form-control-with-template.component.d.ts.map