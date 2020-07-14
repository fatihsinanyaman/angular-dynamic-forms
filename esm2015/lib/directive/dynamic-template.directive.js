import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef } from "@angular/core";
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
DynamicTemplateDirective = __decorate([
    Directive({
        selector: "ng-template[modelId],ng-template[modelType]"
    }),
    __metadata("design:paramtypes", [TemplateRef])
], DynamicTemplateDirective);
export { DynamicTemplateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9keW5hbWljLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE1BQU0sQ0FBTixJQUFZLG9DQUdYO0FBSEQsV0FBWSxvQ0FBb0M7SUFDNUMsdURBQWUsQ0FBQTtJQUNmLG1EQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsb0NBQW9DLEtBQXBDLG9DQUFvQyxRQUcvQztBQUtELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBUWpDLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQU52QyxVQUFLLEdBQVcsb0NBQW9DLENBQUMsR0FBRyxDQUFDO1FBQ3pELE9BQUUsR0FBa0IsSUFBSSxDQUFDO0lBTWxDLENBQUM7Q0FDSixDQUFBOztZQUZtQyxXQUFXOztBQU5sQztJQUFSLEtBQUssRUFBRTs7dURBQTBEO0FBQ3pEO0lBQVIsS0FBSyxFQUFFOztvREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7O3VEQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTs7eURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzsyREFBbUI7QUFObEIsd0JBQXdCO0lBSHBDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2Q0FBNkM7S0FDMUQsQ0FBQztxQ0FTa0MsV0FBVztHQVJsQyx3QkFBd0IsQ0FVcEM7U0FWWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBlbnVtIERZTkFNSUNfVEVNUExBVEVfRElSRUNUSVZFX0FMSUdOTUVOVCB7XG4gICAgU3RhcnQgPSBcIlNUQVJUXCIsXG4gICAgRW5kID0gXCJFTkRcIlxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJuZy10ZW1wbGF0ZVttb2RlbElkXSxuZy10ZW1wbGF0ZVttb2RlbFR5cGVdXCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgpIGFsaWduOiBzdHJpbmcgPSBEWU5BTUlDX1RFTVBMQVRFX0RJUkVDVElWRV9BTElHTk1FTlQuRW5kO1xuICAgIEBJbnB1dCgpIGFzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIG1vZGVsSWQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBtb2RlbFR5cGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIH1cbn1cbiJdfQ==