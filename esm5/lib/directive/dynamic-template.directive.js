import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef } from "@angular/core";
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
    DynamicTemplateDirective = __decorate([
        Directive({
            selector: "ng-template[modelId],ng-template[modelType]"
        }),
        __metadata("design:paramtypes", [TemplateRef])
    ], DynamicTemplateDirective);
    return DynamicTemplateDirective;
}());
export { DynamicTemplateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9keW5hbWljLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE1BQU0sQ0FBTixJQUFZLG9DQUdYO0FBSEQsV0FBWSxvQ0FBb0M7SUFDNUMsdURBQWUsQ0FBQTtJQUNmLG1EQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsb0NBQW9DLEtBQXBDLG9DQUFvQyxRQUcvQztBQUtEO0lBUUksa0NBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQU52QyxVQUFLLEdBQVcsb0NBQW9DLENBQUMsR0FBRyxDQUFDO1FBQ3pELE9BQUUsR0FBa0IsSUFBSSxDQUFDO0lBTWxDLENBQUM7O2dCQUQrQixXQUFXOztJQU5sQztRQUFSLEtBQUssRUFBRTs7MkRBQTBEO0lBQ3pEO1FBQVIsS0FBSyxFQUFFOzt3REFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7OzJEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTs7NkRBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOzsrREFBbUI7SUFObEIsd0JBQXdCO1FBSHBDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw2Q0FBNkM7U0FDMUQsQ0FBQzt5Q0FTa0MsV0FBVztPQVJsQyx3QkFBd0IsQ0FVcEM7SUFBRCwrQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGVudW0gRFlOQU1JQ19URU1QTEFURV9ESVJFQ1RJVkVfQUxJR05NRU5UIHtcbiAgICBTdGFydCA9IFwiU1RBUlRcIixcbiAgICBFbmQgPSBcIkVORFwiXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIm5nLXRlbXBsYXRlW21vZGVsSWRdLG5nLXRlbXBsYXRlW21vZGVsVHlwZV1cIlxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCkgYWxpZ246IHN0cmluZyA9IERZTkFNSUNfVEVNUExBVEVfRElSRUNUSVZFX0FMSUdOTUVOVC5FbmQ7XG4gICAgQElucHV0KCkgYXM6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgbW9kZWxJZDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1vZGVsVHlwZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgfVxufVxuIl19