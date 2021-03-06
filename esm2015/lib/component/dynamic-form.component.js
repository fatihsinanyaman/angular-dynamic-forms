import { QueryList } from "@angular/core";
export class DynamicFormComponent {
    constructor(changeDetectorRef, componentService) {
        this.changeDetectorRef = changeDetectorRef;
        this.componentService = componentService;
    }
    ngOnInit() {
        this.componentService.registerForm(this);
    }
    ngOnDestroy() {
        this.componentService.unregisterForm(this);
    }
    trackByFn(_index, model) {
        return model.id;
    }
    markForCheck() {
        this.changeDetectorRef.markForCheck();
        if (this.components instanceof QueryList) {
            this.components.forEach(component => component.markForCheck());
        }
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    onBlur($event) {
        this.blur.emit($event);
    }
    onChange($event) {
        this.change.emit($event);
    }
    onFocus($event) {
        this.focus.emit($event);
    }
    onCustomEvent($event, customEventEmitter) {
        customEventEmitter.emit($event);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzRCxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVOUYsTUFBTSxPQUFnQixvQkFBb0I7SUFhdEMsWUFBZ0MsaUJBQW9DLEVBQ3BDLGdCQUE2QztRQUQ3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7SUFDN0UsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxLQUE4QjtRQUNwRCxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLFNBQVMsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVELGFBQWE7UUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUErQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQStCO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBK0I7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUErQixFQUFFLGtCQUF5RDtRQUNwRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS1jb250cm9sLWNvbnRhaW5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50IH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtZXZlbnRcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZS9keW5hbWljLXRlbXBsYXRlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1MYXlvdXQgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tbGF5b3V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1jb21wb25lbnQuc2VydmljZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBncm91cDogRm9ybUdyb3VwO1xuICAgIG1vZGVsOiBEeW5hbWljRm9ybU1vZGVsO1xuICAgIGxheW91dDogRHluYW1pY0Zvcm1MYXlvdXQ7XG5cbiAgICBjb21wb25lbnRzOiBRdWVyeUxpc3Q8RHluYW1pY0Zvcm1Db250cm9sQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgICB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxEeW5hbWljVGVtcGxhdGVEaXJlY3RpdmU+O1xuXG4gICAgYmx1cjogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEV2ZW50PjtcbiAgICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxEeW5hbWljRm9ybUNvbnRyb2xFdmVudD47XG4gICAgZm9jdXM6IEV2ZW50RW1pdHRlcjxEeW5hbWljRm9ybUNvbnRyb2xFdmVudD47XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGNvbXBvbmVudFNlcnZpY2U6IER5bmFtaWNGb3JtQ29tcG9uZW50U2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFNlcnZpY2UucmVnaXN0ZXJGb3JtKHRoaXMpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFNlcnZpY2UudW5yZWdpc3RlckZvcm0odGhpcyk7XG4gICAgfVxuXG4gICAgdHJhY2tCeUZuKF9pbmRleDogbnVtYmVyLCBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbW9kZWwuaWQ7XG4gICAgfVxuXG4gICAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMgaW5zdGFuY2VvZiBRdWVyeUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQubWFya0ZvckNoZWNrKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25CbHVyKCRldmVudDogRHluYW1pY0Zvcm1Db250cm9sRXZlbnQpIHtcbiAgICAgICAgdGhpcy5ibHVyLmVtaXQoJGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgkZXZlbnQ6IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCRldmVudDogRHluYW1pY0Zvcm1Db250cm9sRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1cy5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgb25DdXN0b21FdmVudCgkZXZlbnQ6IER5bmFtaWNGb3JtQ29udHJvbEV2ZW50LCBjdXN0b21FdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRm9ybUNvbnRyb2xFdmVudD4pIHtcbiAgICAgICAgY3VzdG9tRXZlbnRFbWl0dGVyLmVtaXQoJGV2ZW50KTtcbiAgICB9XG59XG4iXX0=