import { __decorate, __metadata } from "tslib";
import { DynamicDateControlModel } from "../dynamic-date-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isString } from "../../utils/core.utils";
export const DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";
export class DynamicDatePickerModel extends DynamicDateControlModel {
    constructor(config, layout) {
        var _a, _b, _c;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER;
        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.focusedDate = (_a = config.focusedDate) !== null && _a !== void 0 ? _a : null;
        this.inline = isBoolean(config.inline) ? config.inline : false;
        this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.toggleIcon = isString(config.toggleIcon) ? config.toggleIcon : null;
        this.toggleLabel = isString(config.toggleLabel) ? config.toggleLabel : null;
        this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicDatePickerModel.prototype, "autoFocus", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicDatePickerModel.prototype, "focusedDate", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicDatePickerModel.prototype, "inline", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicDatePickerModel.prototype, "readOnly", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "suffix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "toggleIcon", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "toggleLabel", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicDatePickerModel.prototype, "type", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1kYXRlcGlja2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9kYXRlcGlja2VyL2R5bmFtaWMtZGF0ZXBpY2tlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUcxQixNQUFNLCtCQUErQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUFHLFlBQVksQ0FBQztBQWNqRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsdUJBQXVCO0lBYS9ELFlBQVksTUFBb0MsRUFBRSxNQUFpQzs7UUFFL0UsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUpELFNBQUksR0FBVyxvQ0FBb0MsQ0FBQztRQU16RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN4RSxJQUFJLENBQUMsV0FBVyxTQUFHLE1BQU0sQ0FBQyxXQUFXLG1DQUFJLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxNQUFNLG1DQUFJLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxNQUFNLG1DQUFJLElBQUksQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUF4Qm1CO0lBQWYsWUFBWSxFQUFFOzt5REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzJEQUE2QztBQUM1QztJQUFmLFlBQVksRUFBRTs7c0RBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOztzREFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7O3dEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs7c0RBQXVCO0FBQ3RCO0lBQWYsWUFBWSxFQUFFOzswREFBMkI7QUFDMUI7SUFBZixZQUFZLEVBQUU7OzJEQUE0QjtBQUUzQjtJQUFmLFlBQVksRUFBRTs7b0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEeW5hbWljRGF0ZUNvbnRyb2xNb2RlbCxcbiAgICBEeW5hbWljRGF0ZUNvbnRyb2xNb2RlbENvbmZpZyxcbiAgICBEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZVxufSBmcm9tIFwiLi4vZHluYW1pYy1kYXRlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4sIGlzU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfREFURVBJQ0tFUiA9IFwiREFURVBJQ0tFUlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNEYXRlUGlja2VyTW9kZWxDb25maWcgZXh0ZW5kcyBEeW5hbWljRGF0ZUNvbnRyb2xNb2RlbENvbmZpZyB7XG5cbiAgICBhdXRvRm9jdXM/OiBib29sZWFuO1xuICAgIGZvY3VzZWREYXRlPzogRHluYW1pY0RhdGVDb250cm9sVmFsdWU7XG4gICAgaW5saW5lPzogYm9vbGVhbjtcbiAgICBwcmVmaXg/OiBzdHJpbmc7XG4gICAgcmVhZE9ubHk/OiBib29sZWFuO1xuICAgIHN1ZmZpeD86IHN0cmluZztcbiAgICB0b2dnbGVJY29uPzogc3RyaW5nO1xuICAgIHRvZ2dsZUxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGVQaWNrZXJNb2RlbCBleHRlbmRzIER5bmFtaWNEYXRlQ29udHJvbE1vZGVsIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIGZvY3VzZWREYXRlOiBEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZSB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGlubGluZTogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgcHJlZml4OiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSByZWFkT25seTogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgc3VmZml4OiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSB0b2dnbGVJY29uOiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSB0b2dnbGVMYWJlbDogc3RyaW5nIHwgbnVsbDtcblxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0RBVEVQSUNLRVI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNEYXRlUGlja2VyTW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmF1dG9Gb2N1cyA9IGlzQm9vbGVhbihjb25maWcuYXV0b0ZvY3VzKSA/IGNvbmZpZy5hdXRvRm9jdXMgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGF0ZSA9IGNvbmZpZy5mb2N1c2VkRGF0ZSA/PyBudWxsO1xuICAgICAgICB0aGlzLmlubGluZSA9IGlzQm9vbGVhbihjb25maWcuaW5saW5lKSA/IGNvbmZpZy5pbmxpbmUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBjb25maWcucHJlZml4ID8/IG51bGw7XG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBpc0Jvb2xlYW4oY29uZmlnLnJlYWRPbmx5KSA/IGNvbmZpZy5yZWFkT25seSA6IGZhbHNlO1xuICAgICAgICB0aGlzLnRvZ2dsZUljb24gPSBpc1N0cmluZyhjb25maWcudG9nZ2xlSWNvbikgPyBjb25maWcudG9nZ2xlSWNvbiA6IG51bGw7XG4gICAgICAgIHRoaXMudG9nZ2xlTGFiZWwgPSBpc1N0cmluZyhjb25maWcudG9nZ2xlTGFiZWwpID8gY29uZmlnLnRvZ2dsZUxhYmVsIDogbnVsbDtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBjb25maWcuc3VmZml4ID8/IG51bGw7XG4gICAgfVxufVxuIl19