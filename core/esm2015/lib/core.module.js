import * as ɵngcc0 from '@angular/core';
var DynamicFormsCoreModule_1;
import { __decorate } from "tslib";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicListDirective } from "./directive/dynamic-list.directive";
import { DynamicTemplateDirective } from "./directive/dynamic-template.directive";
import { DynamicFormService } from "./service/dynamic-form.service";
import { DynamicFormLayoutService } from "./service/dynamic-form-layout.service";
import { DynamicFormValidationService } from "./service/dynamic-form-validation.service";
import { DynamicFormComponentService } from "./service/dynamic-form-component.service";
import { DynamicFormRelationService } from "./service/dynamic-form-relation.service";
let DynamicFormsCoreModule = DynamicFormsCoreModule_1 = class DynamicFormsCoreModule {
    /*@deprecated*/
    static forRoot() {
        return {
            ngModule: DynamicFormsCoreModule_1,
            providers: [
                DynamicFormService,
                DynamicFormLayoutService,
                DynamicFormValidationService,
                DynamicFormComponentService,
                DynamicFormRelationService
            ]
        };
    }
};
DynamicFormsCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DynamicFormsCoreModule });
DynamicFormsCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DynamicFormsCoreModule_Factory(t) { return new (t || DynamicFormsCoreModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DynamicFormsCoreModule, { declarations: function () { return [DynamicListDirective,
        DynamicTemplateDirective]; }, imports: function () { return [CommonModule,
        ReactiveFormsModule]; }, exports: function () { return [DynamicListDirective,
        DynamicTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicFormsCoreModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    DynamicListDirective,
                    DynamicTemplateDirective
                ],
                exports: [
                    DynamicListDirective,
                    DynamicTemplateDirective
                ]
            }]
    }], null, null); })();
export { DynamicFormsCoreModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFnQnJGLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUFzQjtJQUUvQixlQUFlO0lBQ2YsTUFBTSxDQUFDLE9BQU87UUFFVixPQUFPO1lBQ0gsUUFBUSxFQUFFLHdCQUFzQjtZQUNoQyxTQUFTLEVBQUU7Z0JBQ1Asa0JBQWtCO2dCQUNsQix3QkFBd0I7Z0JBQ3hCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQiwwQkFBMEI7YUFDN0I7U0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKOzs7OztFQUFBLENBaEJZO1VBQXNCLCtDQWRsQyxRQUFRLENBQUMsVUFDTixPQUFPLEVBQUUsY0FDTCxZQUFZLGNBQ1osbUJBQW1CLFVBQ3RCLFVBQ0Q7QUFBWSxFQUFFLGNBQ1Ysb0JBQW9CLGNBQ3BCLHdCQUF3QjtDQUMzQixVQUNELE9BQU8sRUFBRSxjQUNMLG9CQUFvQixjQUNwQjtNQUF3QixVQUMzQixNQUNKLENBQUMsSUFDVztFQUFzQixDQWdCbEM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0Q7U0FqQmEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRHluYW1pY0xpc3REaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvZHluYW1pYy1saXN0LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlL2R5bmFtaWMtdGVtcGxhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUxheW91dFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1sYXlvdXQuc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1WYWxpZGF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9keW5hbWljLWZvcm0tY29tcG9uZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtUmVsYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9keW5hbWljLWZvcm0tcmVsYXRpb24uc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRHluYW1pY0xpc3REaXJlY3RpdmUsXG4gICAgICAgIER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBEeW5hbWljTGlzdERpcmVjdGl2ZSxcbiAgICAgICAgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybXNDb3JlTW9kdWxlIHtcblxuICAgIC8qQGRlcHJlY2F0ZWQqL1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RHluYW1pY0Zvcm1zQ29yZU1vZHVsZT4ge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogRHluYW1pY0Zvcm1zQ29yZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtU2VydmljZSxcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybUxheW91dFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRHluYW1pY0Zvcm1WYWxpZGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRHluYW1pY0Zvcm1SZWxhdGlvblNlcnZpY2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=