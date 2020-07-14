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
DynamicFormsCoreModule = DynamicFormsCoreModule_1 = __decorate([
    NgModule({
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
    })
], DynamicFormsCoreModule);
export { DynamicFormsCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBZ0JyRixJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBc0I7SUFFL0IsZUFBZTtJQUNmLE1BQU0sQ0FBQyxPQUFPO1FBRVYsT0FBTztZQUNILFFBQVEsRUFBRSx3QkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNQLGtCQUFrQjtnQkFDbEIsd0JBQXdCO2dCQUN4Qiw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2FBQzdCO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBaEJZLHNCQUFzQjtJQWRsQyxRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFO1lBQ1Ysb0JBQW9CO1lBQ3BCLHdCQUF3QjtTQUMzQjtRQUNELE9BQU8sRUFBRTtZQUNMLG9CQUFvQjtZQUNwQix3QkFBd0I7U0FDM0I7S0FDSixDQUFDO0dBQ1csc0JBQXNCLENBZ0JsQztTQWhCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEeW5hbWljTGlzdERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9keW5hbWljLWxpc3QuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLWxheW91dC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1jb21wb25lbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1SZWxhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1yZWxhdGlvbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEeW5hbWljTGlzdERpcmVjdGl2ZSxcbiAgICAgICAgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIER5bmFtaWNMaXN0RGlyZWN0aXZlLFxuICAgICAgICBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3Jtc0NvcmVNb2R1bGUge1xuXG4gICAgLypAZGVwcmVjYXRlZCovXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEeW5hbWljRm9ybXNDb3JlTW9kdWxlPiB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEeW5hbWljRm9ybXNDb3JlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgRHluYW1pY0Zvcm1TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybVJlbGF0aW9uU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==