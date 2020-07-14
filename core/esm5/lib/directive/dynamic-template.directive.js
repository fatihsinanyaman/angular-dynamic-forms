import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export var DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT;
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
export { DynamicTemplateDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFOUQsTUFBTSxDQUFOLElBQVksb0NBR1g7QUFIRCxXQUFZLG9DQUFvQztJQUM1Qyx1REFBZSxDQUFBO0lBQ2YsbURBQVcsQ0FBQTtBQUNmLENBQUMsRUFIVyxvQ0FBb0MsS0FBcEMsb0NBQW9DLFFBRy9DO0FBS0Q7SUFRSSxrQ0FBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBTnZDLFVBQUssR0FBVyxvQ0FBb0MsQ0FBQyxHQUFHLENBQUM7UUFDekQsT0FBRSxHQUFrQixJQUFJLENBQUM7SUFNbEMsQ0FBQzs7Z0JBRCtCLFdBQVc7O0lBTmxDO1FBQVIsS0FBSyxFQUFFOzsyREFBMEQ7SUFDekQ7UUFBUixLQUFLLEVBQUU7O3dEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTs7MkRBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzs2REFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7OytEQUFtQjtJQU5sQix3QkFBd0IsZUFFMUIsU0FMVixTQUFTLENBQUMsY0FDUCxRQUFRLEVBQUUsM0NBRU4sa0NBUTRCLFdBQVc7T0FSbEMsd0JBQXdCLENBVXBDO01BWjBELFVBQzFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVlGO0lBREEsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBlbnVtIERZTkFNSUNfVEVNUExBVEVfRElSRUNUSVZFX0FMSUdOTUVOVCB7XG4gICAgU3RhcnQgPSBcIlNUQVJUXCIsXG4gICAgRW5kID0gXCJFTkRcIlxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJuZy10ZW1wbGF0ZVttb2RlbElkXSxuZy10ZW1wbGF0ZVttb2RlbFR5cGVdXCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgpIGFsaWduOiBzdHJpbmcgPSBEWU5BTUlDX1RFTVBMQVRFX0RJUkVDVElWRV9BTElHTk1FTlQuRW5kO1xuICAgIEBJbnB1dCgpIGFzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIG1vZGVsSWQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBtb2RlbFR5cGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIH1cbn1cbiJdfQ==