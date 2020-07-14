import { isString } from "../utils/core.utils";
var DynamicFormControlComponent = /** @class */ (function () {
    function DynamicFormControlComponent(layoutService, validationService) {
        this.layoutService = layoutService;
        this.validationService = validationService;
        this._hasFocus = false;
    }
    Object.defineProperty(DynamicFormControlComponent.prototype, "control", {
        get: function () {
            var control = this.group.get(this.model.id);
            if (control === null) {
                throw new Error("form group does not contain an abstract control with id " + this.model.id);
            }
            return control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "id", {
        get: function () {
            return this.layoutService.getElementId(this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "hasFocus", {
        get: function () {
            return this._hasFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "isInvalid", {
        get: function () {
            return this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "isValid", {
        get: function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "errorMessages", {
        get: function () {
            return this.validationService.createErrorMessages(this.control, this.model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "showErrorMessages", {
        get: function () {
            return this.validationService.showErrorMessages(this.control, this.model, this.hasFocus);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormControlComponent.prototype.getClass = function (context, place, model) {
        if (model === void 0) { model = this.model; }
        var _a;
        var controlLayout = model === this.model ? this.layout : (_a = this.layoutService.findByModel(model, this.formLayout)) !== null && _a !== void 0 ? _a : model.layout;
        return this.layoutService.getClass(controlLayout, context, place);
    };
    DynamicFormControlComponent.prototype.onBlur = function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = false;
        this.blur.emit($event);
    };
    DynamicFormControlComponent.prototype.onChange = function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.change.emit($event);
    };
    DynamicFormControlComponent.prototype.onCustomEvent = function ($event, type, bypass) {
        if (type === void 0) { type = null; }
        if (bypass === void 0) { bypass = false; }
        if (bypass) {
            this.customEvent.emit($event);
        }
        else if (isString(type)) {
            this.customEvent.emit({ customEvent: $event, customEventType: type });
        }
    };
    DynamicFormControlComponent.prototype.onFocus = function ($event) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this._hasFocus = true;
        this.focus.emit($event);
    };
    return DynamicFormControlComponent;
}());
export { DynamicFormControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZHluYW1pYy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0M7SUFlSSxxQ0FBZ0MsYUFBdUMsRUFDdkMsaUJBQStDO1FBRC9DLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO1FBZHZFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFlMUIsQ0FBQztJQUVELHNCQUFJLGdEQUFPO2FBQVg7WUFFSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTlDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBMkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFJLENBQUMsQ0FBQzthQUMvRjtZQUVELE9BQU8sT0FBMEIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0RBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBEQUFpQjthQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0YsQ0FBQzs7O09BQUE7SUFFRCw4Q0FBUSxHQUFSLFVBQVMsT0FBd0MsRUFBRSxLQUFvQyxFQUM5RSxLQUEyQztRQUEzQyxzQkFBQSxFQUFBLFFBQWlDLElBQUksQ0FBQyxLQUFLOztRQUVoRCxJQUFNLGFBQWEsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1DQUFJLEtBQUssQ0FBQyxNQUFrQyxDQUFDO1FBRXZHLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsNENBQU0sR0FBTixVQUFPLE1BQVc7UUFFZCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDekIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDhDQUFRLEdBQVIsVUFBUyxNQUFXO1FBRWhCLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUN6QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsbURBQWEsR0FBYixVQUFjLE1BQVcsRUFBRSxJQUEwQixFQUFFLE1BQXVCO1FBQW5ELHFCQUFBLEVBQUEsV0FBMEI7UUFBRSx1QkFBQSxFQUFBLGNBQXVCO1FBRTFFLElBQUksTUFBTSxFQUFFO1lBRVIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FFakM7YUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUV2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRUQsNkNBQU8sR0FBUCxVQUFRLE1BQVc7UUFFZixJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDekIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQXZHRCxJQXVHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLWNvbnRyb2wtaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xDdXN0b21FdmVudCB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS1jb250cm9sLWV2ZW50XCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9keW5hbWljLWZvcm0tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgICBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQsXG4gICAgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0Q29udGV4dCxcbiAgICBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRQbGFjZVxufSBmcm9tIFwiLi4vbW9kZWwvbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9keW5hbWljLWZvcm0tdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICAgIER5bmFtaWNGb3JtTGF5b3V0LFxuICAgIER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSxcbiAgICBEeW5hbWljRm9ybUNvbnRyb2xUZW1wbGF0ZXNcbn0gZnJvbSBcIi4uL3NlcnZpY2UvZHluYW1pYy1mb3JtLWxheW91dC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeW5hbWljRm9ybUNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBEeW5hbWljRm9ybUNvbnRyb2wge1xuXG4gICAgcHJpdmF0ZSBfaGFzRm9jdXMgPSBmYWxzZTtcblxuICAgIGZvcm1MYXlvdXQ6IER5bmFtaWNGb3JtTGF5b3V0O1xuICAgIGdyb3VwOiBGb3JtR3JvdXA7XG4gICAgbGF5b3V0OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQ7XG4gICAgbW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsO1xuICAgIHRlbXBsYXRlczogRHluYW1pY0Zvcm1Db250cm9sVGVtcGxhdGVzO1xuXG4gICAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjdXN0b21FdmVudDogRXZlbnRFbWl0dGVyPER5bmFtaWNGb3JtQ29udHJvbEN1c3RvbUV2ZW50PjtcbiAgICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGxheW91dFNlcnZpY2U6IER5bmFtaWNGb3JtTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25TZXJ2aWNlOiBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHwgbmV2ZXIge1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdyb3VwLmdldCh0aGlzLm1vZGVsLmlkKTtcblxuICAgICAgICBpZiAoY29udHJvbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmb3JtIGdyb3VwIGRvZXMgbm90IGNvbnRhaW4gYW4gYWJzdHJhY3QgY29udHJvbCB3aXRoIGlkICR7dGhpcy5tb2RlbC5pZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250cm9sIGFzIEFic3RyYWN0Q29udHJvbDtcbiAgICB9XG5cbiAgICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0U2VydmljZS5nZXRFbGVtZW50SWQodGhpcy5tb2RlbCk7XG4gICAgfVxuXG4gICAgZ2V0IGhhc0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzRm9jdXM7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW52YWxpZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC5pbnZhbGlkO1xuICAgIH1cblxuICAgIGdldCBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkO1xuICAgIH1cblxuICAgIGdldCBlcnJvck1lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuY3JlYXRlRXJyb3JNZXNzYWdlcyh0aGlzLmNvbnRyb2wsIHRoaXMubW9kZWwpO1xuICAgIH1cblxuICAgIGdldCBzaG93RXJyb3JNZXNzYWdlcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2Uuc2hvd0Vycm9yTWVzc2FnZXModGhpcy5jb250cm9sLCB0aGlzLm1vZGVsLCB0aGlzLmhhc0ZvY3VzKTtcbiAgICB9XG5cbiAgICBnZXRDbGFzcyhjb250ZXh0OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXRDb250ZXh0LCBwbGFjZTogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0UGxhY2UsXG4gICAgICAgICAgICAgbW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsID0gdGhpcy5tb2RlbCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3QgY29udHJvbExheW91dCA9IG1vZGVsID09PSB0aGlzLm1vZGVsID8gdGhpcy5sYXlvdXQgOlxuICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmZpbmRCeU1vZGVsKG1vZGVsLCB0aGlzLmZvcm1MYXlvdXQpID8/IG1vZGVsLmxheW91dCBhcyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0U2VydmljZS5nZXRDbGFzcyhjb250cm9sTGF5b3V0LCBjb250ZXh0LCBwbGFjZSk7XG4gICAgfVxuXG4gICAgb25CbHVyKCRldmVudDogYW55KSB7XG5cbiAgICAgICAgaWYgKCRldmVudCBpbnN0YW5jZW9mIEV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJsdXIuZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCRldmVudDogYW55KSB7XG5cbiAgICAgICAgaWYgKCRldmVudCBpbnN0YW5jZW9mIEV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgb25DdXN0b21FdmVudCgkZXZlbnQ6IGFueSwgdHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGwsIGJ5cGFzczogYm9vbGVhbiA9IGZhbHNlKSB7XG5cbiAgICAgICAgaWYgKGJ5cGFzcykge1xuXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUV2ZW50LmVtaXQoJGV2ZW50KTtcblxuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHR5cGUpKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRXZlbnQuZW1pdCh7Y3VzdG9tRXZlbnQ6ICRldmVudCwgY3VzdG9tRXZlbnRUeXBlOiB0eXBlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzKCRldmVudDogYW55KSB7XG5cbiAgICAgICAgaWYgKCRldmVudCBpbnN0YW5jZW9mIEV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9jdXMuZW1pdCgkZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==