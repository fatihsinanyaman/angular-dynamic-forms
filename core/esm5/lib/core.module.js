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
import * as ɵngcc0 from '@angular/core';
var DynamicFormsCoreModule = /** @class */ (function () {
    function DynamicFormsCoreModule() {
    }
    DynamicFormsCoreModule_1 = DynamicFormsCoreModule;
    /*@deprecated*/
    DynamicFormsCoreModule.forRoot = function () {
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
    };
    var DynamicFormsCoreModule_1;
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
    }], function () { return []; }, null); })();
    return DynamicFormsCoreModule;
}());
export { DynamicFormsCoreModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9AbmctZHluYW1pYy1mb3Jtcy9jb3JlL2xpYi9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQWdCckY7SUFBQTtJQWdCQSxDQUFDOytCQWhCWSxzQkFBc0I7SUFFL0IsZUFBZTtJQUNSLDhCQUFPLEdBQWQ7UUFFSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLHdCQUFzQjtZQUNoQyxTQUFTLEVBQUU7Z0JBQ1Asa0JBQWtCO2dCQUNsQix3QkFBd0I7Z0JBQ3hCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQiwwQkFBMEI7YUFDN0I7U0FDSixDQUFDO0lBQ04sQ0FBQztpQ0FFMkI7SUFqQm5CLHNCQUFzQixtREFkbEMsUUFBUSxDQUFDO1dBQ04sT0FBTyxFQUFFLGtCQUNMLFlBQVksa0JBQ1osbUJBQW1CLGNBQ3RCLGNBQ0QsWUFBWSxFQUFFLGtCQUNWLG9CQUFvQjtnQkFDcEI7Y0FBd0IsY0FDM0I7VUFDRDtFQUFPLEVBQUUsa0JBQ0wsb0JBQW9CLGtCQUNwQix3QkFBd0IsY0FDM0IsVUFDSixDQUFDLFFBQ1csc0JBQXNCLENBZ0JsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ0Q7SUFEQSw2QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IER5bmFtaWNMaXN0RGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlL2R5bmFtaWMtbGlzdC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9keW5hbWljLXRlbXBsYXRlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9keW5hbWljLWZvcm0uc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1MYXlvdXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9keW5hbWljLWZvcm0tbGF5b3V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS12YWxpZGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLWNvbXBvbmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVJlbGF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLXJlbGF0aW9uLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIER5bmFtaWNMaXN0RGlyZWN0aXZlLFxuICAgICAgICBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRHluYW1pY0xpc3REaXJlY3RpdmUsXG4gICAgICAgIER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1zQ29yZU1vZHVsZSB7XG5cbiAgICAvKkBkZXByZWNhdGVkKi9cbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPER5bmFtaWNGb3Jtc0NvcmVNb2R1bGU+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IER5bmFtaWNGb3Jtc0NvcmVNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRHluYW1pY0Zvcm1MYXlvdXRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRHluYW1pY0Zvcm1Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtUmVsYXRpb25TZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19