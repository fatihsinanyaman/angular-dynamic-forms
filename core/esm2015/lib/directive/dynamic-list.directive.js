import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from "@angular/core";
import { isString } from "../utils/core.utils";
import * as ɵngcc0 from '@angular/core';
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
DynamicListDirective.ɵfac = function DynamicListDirective_Factory(t) { return new (t || DynamicListDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
DynamicListDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicListDirective, selectors: [["", "dynamicList", ""]], inputs: { listId: ["dynamicList", "listId"] } });
DynamicListDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input("dynamicList"),
    __metadata("design:type", String)
], DynamicListDirective.prototype, "listId", void 0);
DynamicListDirective = __decorate([ __metadata("design:paramtypes", [ElementRef, Renderer2])
], DynamicListDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicListDirective, [{
        type: Directive,
        args: [{
                selector: "[dynamicList]"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { listId: [{
            type: Input,
            args: ["dynamicList"]
        }] }); })();
export { DynamicListDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L0BuZy1keW5hbWljLWZvcm1zL2NvcmUvbGliL2RpcmVjdGl2ZS9keW5hbWljLWxpc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBSy9DLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBSTdCLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDO0lBRTNFLGVBQWU7UUFFWCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFnQixDQUFDLENBQUM7U0FDNUY7SUFDTCxDQUFDO0NBQ0o7OzBLQUFBOztZQVJtQyxVQUFVO1lBQW9CLFNBQVM7O0FBRmpEO0lBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O29EQUF1QjtBQUZuQyxvQkFBb0IsZUFBZSxLQUgvQyxTQUFTLENBQUMsVUFDUCxRQUFRLEVBQUUsZUFBZSxNQUM1QixDQUFDLHpEQUNFLGtDQUlnQyxVQUFVLEVBQW9CLFNBQVM7R0FKOUQsb0JBQW9CLENBWWhDOzs7Ozs7Ozs7b0JBQUM7U0FaVyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbZHluYW1pY0xpc3RdXCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0xpc3REaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dChcImR5bmFtaWNMaXN0XCIpIGxpc3RJZDogc3RyaW5nIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmxpc3RJZCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImxpc3RcIiwgdGhpcy5saXN0SWQgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=