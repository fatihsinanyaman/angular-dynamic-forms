import { TemplateRef } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare enum DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT {
    Start = "START",
    End = "END"
}
export declare class DynamicTemplateDirective {
    templateRef: TemplateRef<any>;
    align: string;
    as: string | null;
    index: number | undefined;
    modelId: string;
    modelType: string;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicTemplateDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DynamicTemplateDirective, "ng-template[modelId],ng-template[modelType]", never, { "align": "align"; "as": "as"; "index": "index"; "modelId": "modelId"; "modelType": "modelType"; }, {}, never>;
}

//# sourceMappingURL=dynamic-template.directive.d.ts.map