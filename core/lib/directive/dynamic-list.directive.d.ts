import { ElementRef, Renderer2, AfterViewInit } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class DynamicListDirective implements AfterViewInit {
    private elementRef;
    private renderer;
    listId: string | null;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicListDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DynamicListDirective, "[dynamicList]", never, { "listId": "dynamicList"; }, {}, never>;
}

//# sourceMappingURL=dynamic-list.directive.d.ts.map