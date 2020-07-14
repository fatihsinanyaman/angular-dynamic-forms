import { __extends } from "tslib";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { isString } from "../utils/core.utils";
var DynamicFormControlWithTemplateComponent = /** @class */ (function (_super) {
    __extends(DynamicFormControlWithTemplateComponent, _super);
    function DynamicFormControlWithTemplateComponent(layoutService, validationService) {
        var _this = _super.call(this, layoutService, validationService) || this;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        return _this;
    }
    DynamicFormControlWithTemplateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutService
            .filterTemplatesByModel(this.model, this.templates)
            .forEach(function (template) { return _this.bindTemplate(template); });
    };
    DynamicFormControlWithTemplateComponent.prototype.bindTemplate = function (template) {
        if (isString(template.as) && this.templateDirectives.has(template.as)) {
            var property = this.templateDirectives.get(template.as);
            this.viewChild[property] = this.mapTemplate(template);
        }
    };
    return DynamicFormControlWithTemplateComponent;
}(DynamicFormControlComponent));
export { DynamicFormControlWithTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbnRyb2wtd2l0aC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9keW5hbWljLWZvcm0tY29udHJvbC13aXRoLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSS9DO0lBQXNFLDJEQUEyQjtJQU83RixpREFBZ0MsYUFBdUMsRUFDdkMsaUJBQStDO1FBRC9FLFlBRUksa0JBQU0sYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQzFDO1FBSCtCLG1CQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2Qyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQThCOztJQUUvRSxDQUFDO0lBRUQsaUVBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSEcsSUFBSSxDQUFDLGFBQWE7YUFDYixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFNRCw4REFBWSxHQUFaLFVBQWEsUUFBa0M7UUFFM0MsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBRW5FLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBVyxDQUFDO1lBRXBFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFDTCw4Q0FBQztBQUFELENBQUMsQUFoQ0QsQ0FBc0UsMkJBQTJCLEdBZ0NoRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sV2l0aFRlbXBsYXRlIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtd2l0aC10ZW1wbGF0ZS1pbnRlcmZhY2VcIjtcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS1jb250cm9sLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1MYXlvdXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvZHluYW1pYy1mb3JtLWxheW91dC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1Db250cm9sV2l0aFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRHluYW1pY0Zvcm1Db250cm9sQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBEeW5hbWljRm9ybUNvbnRyb2xXaXRoVGVtcGxhdGUsIEFmdGVyVmlld0luaXQge1xuXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVEaXJlY3RpdmVzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuXG4gICAgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8RHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlPiB8IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYXlvdXRTZXJ2aWNlOiBEeW5hbWljRm9ybUxheW91dFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uU2VydmljZTogRHluYW1pY0Zvcm1WYWxpZGF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihsYXlvdXRTZXJ2aWNlLCB2YWxpZGF0aW9uU2VydmljZSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMubGF5b3V0U2VydmljZVxuICAgICAgICAgICAgLmZpbHRlclRlbXBsYXRlc0J5TW9kZWwodGhpcy5tb2RlbCwgdGhpcy50ZW1wbGF0ZXMpXG4gICAgICAgICAgICAuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB0aGlzLmJpbmRUZW1wbGF0ZSh0ZW1wbGF0ZSkpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldCB2aWV3Q2hpbGQoKTogYW55O1xuXG4gICAgYWJzdHJhY3QgbWFwVGVtcGxhdGUodGVtcGxhdGU6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSk6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBiaW5kVGVtcGxhdGUodGVtcGxhdGU6IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSkge1xuXG4gICAgICAgIGlmIChpc1N0cmluZyh0ZW1wbGF0ZS5hcykgJiYgdGhpcy50ZW1wbGF0ZURpcmVjdGl2ZXMuaGFzKHRlbXBsYXRlLmFzKSkge1xuXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMudGVtcGxhdGVEaXJlY3RpdmVzLmdldCh0ZW1wbGF0ZS5hcykgYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICB0aGlzLnZpZXdDaGlsZFtwcm9wZXJ0eV0gPSB0aGlzLm1hcFRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==