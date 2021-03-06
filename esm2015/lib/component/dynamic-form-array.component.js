import { QueryList } from "@angular/core";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
export class DynamicFormArrayComponent extends DynamicFormControlComponent {
    get array() {
        return this.control;
    }
    get startTemplate() {
        return this.layoutService.getStartTemplate(this.model, this.templates);
    }
    get endTemplate() {
        return this.layoutService.getEndTemplate(this.model, this.templates);
    }
    markForCheck() {
        if (this.components instanceof QueryList) {
            this.components.forEach(component => component.markForCheck());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWFycmF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2R5bmFtaWMtZm9ybS1hcnJheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUsvRSxNQUFNLE9BQWdCLHlCQUEwQixTQUFRLDJCQUEyQjtJQU0vRSxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFvQixDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLFlBQVksU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tY29udHJvbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmUvZHluYW1pYy10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQXJyYXlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9mb3JtLWFycmF5L2R5bmFtaWMtZm9ybS1hcnJheS5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1BcnJheUNvbXBvbmVudCBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnRzOiBRdWVyeUxpc3Q8RHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgICBtb2RlbDogRHluYW1pY0Zvcm1BcnJheU1vZGVsO1xuICAgIHRlbXBsYXRlczogUXVlcnlMaXN0PER5bmFtaWNUZW1wbGF0ZURpcmVjdGl2ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBnZXQgYXJyYXkoKTogRm9ybUFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCBhcyBGb3JtQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXJ0VGVtcGxhdGUoKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0U2VydmljZS5nZXRTdGFydFRlbXBsYXRlKHRoaXMubW9kZWwsIHRoaXMudGVtcGxhdGVzKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kVGVtcGxhdGUoKTogRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0U2VydmljZS5nZXRFbmRUZW1wbGF0ZSh0aGlzLm1vZGVsLCB0aGlzLnRlbXBsYXRlcyk7XG4gICAgfVxuXG4gICAgbWFya0ZvckNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzIGluc3RhbmNlb2YgUXVlcnlMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==