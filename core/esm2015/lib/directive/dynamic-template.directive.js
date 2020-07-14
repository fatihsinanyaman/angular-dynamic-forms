import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export var DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT;
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
DynamicTemplateDirective.ɵfac = function DynamicTemplateDirective_Factory(t) { return new (t || DynamicTemplateDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
DynamicTemplateDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicTemplateDirective, selectors: [["ng-template", "modelId", ""], ["ng-template", "modelType", ""]], inputs: { align: "align", as: "as", index: "index", modelId: "modelId", modelType: "modelType" } });
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
DynamicTemplateDirective = __decorate([ __metadata("design:paramtypes", [TemplateRef])
], DynamicTemplateDirective);
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
export { DynamicTemplateDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFOUQsTUFBTSxDQUFOLElBQVksb0NBR1g7QUFIRCxXQUFZLG9DQUFvQztJQUM1Qyx1REFBZSxDQUFBO0lBQ2YsbURBQVcsQ0FBQTtBQUNmLENBQUMsRUFIVyxvQ0FBb0MsS0FBcEMsb0NBQW9DLFFBRy9DO0FBS0QsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFRakMsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBTnZDLFVBQUssR0FBVyxvQ0FBb0MsQ0FBQyxHQUFHLENBQUM7UUFDekQsT0FBRSxHQUFrQixJQUFJLENBQUM7SUFNbEMsQ0FBQztDQUNKOzs4UUFBQTs7WUFGbUMsV0FBVzs7QUFObEM7SUFBUixLQUFLLEVBQUU7O3VEQUEwRDtBQUN6RDtJQUFSLEtBQUssRUFBRTs7b0RBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOzt1REFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7O3lEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7MkRBQW1CO0FBTmxCLHdCQUF3QixlQUUxQixLQUxWLFNBQVMsQ0FBQyxVQUNQLFFBQVEsRUFBRSxuQ0FFVixrQ0FRZ0MsV0FBVztHQVJsQyx3QkFBd0IsQ0FVcEM7RUFaMEQsTUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O29CQVlGO1NBWGEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgZW51bSBEWU5BTUlDX1RFTVBMQVRFX0RJUkVDVElWRV9BTElHTk1FTlQge1xuICAgIFN0YXJ0ID0gXCJTVEFSVFwiLFxuICAgIEVuZCA9IFwiRU5EXCJcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwibmctdGVtcGxhdGVbbW9kZWxJZF0sbmctdGVtcGxhdGVbbW9kZWxUeXBlXVwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoKSBhbGlnbjogc3RyaW5nID0gRFlOQU1JQ19URU1QTEFURV9ESVJFQ1RJVkVfQUxJR05NRU5ULkVuZDtcbiAgICBASW5wdXQoKSBhczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBtb2RlbElkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbW9kZWxUeXBlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB9XG59XG4iXX0=