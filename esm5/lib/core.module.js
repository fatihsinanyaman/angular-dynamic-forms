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
    return DynamicFormsCoreModule;
}());
export { DynamicFormsCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFnQnJGO0lBQUE7SUFnQkEsQ0FBQzsrQkFoQlksc0JBQXNCO0lBRS9CLGVBQWU7SUFDUiw4QkFBTyxHQUFkO1FBRUksT0FBTztZQUNILFFBQVEsRUFBRSx3QkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNQLGtCQUFrQjtnQkFDbEIsd0JBQXdCO2dCQUN4Qiw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2FBQzdCO1NBQ0osQ0FBQztJQUNOLENBQUM7O0lBZlEsc0JBQXNCO1FBZGxDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLG1CQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDVixvQkFBb0I7Z0JBQ3BCLHdCQUF3QjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxvQkFBb0I7Z0JBQ3BCLHdCQUF3QjthQUMzQjtTQUNKLENBQUM7T0FDVyxzQkFBc0IsQ0FnQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEeW5hbWljTGlzdERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9keW5hbWljLWxpc3QuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZHluYW1pYy1mb3JtLWxheW91dC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1jb21wb25lbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1SZWxhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1yZWxhdGlvbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEeW5hbWljTGlzdERpcmVjdGl2ZSxcbiAgICAgICAgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIER5bmFtaWNMaXN0RGlyZWN0aXZlLFxuICAgICAgICBEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3Jtc0NvcmVNb2R1bGUge1xuXG4gICAgLypAZGVwcmVjYXRlZCovXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEeW5hbWljRm9ybXNDb3JlTW9kdWxlPiB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEeW5hbWljRm9ybXNDb3JlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgRHluYW1pY0Zvcm1TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBEeW5hbWljRm9ybVJlbGF0aW9uU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==