import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isString } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER = "COLORPICKER";
var DynamicColorPickerModel = /** @class */ (function (_super) {
    __extends(DynamicColorPickerModel, _super);
    function DynamicColorPickerModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER;
        _this.format = isString(config.format) ? config.format : null;
        _this.inline = isBoolean(config.inline) ? config.inline : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicColorPickerModel.prototype, "format", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicColorPickerModel.prototype, "inline", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicColorPickerModel.prototype, "type", void 0);
    return DynamicColorPickerModel;
}(DynamicFormValueControlModel));
export { DynamicColorPickerModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb2xvcnBpY2tlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvY29sb3JwaWNrZXIvZHluYW1pYy1jb2xvcnBpY2tlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFzQyw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE1BQU0sQ0FBQyxJQUFNLHFDQUFxQyxHQUFHLGFBQWEsQ0FBQztBQVFuRTtJQUE2QywyQ0FBNkM7SUFPdEYsaUNBQVksTUFBcUMsRUFBRSxNQUFpQztRQUFwRixZQUVJLGtCQUFNLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FJeEI7UUFSd0IsVUFBSSxHQUFXLHFDQUFxQyxDQUFDO1FBTTFFLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztJQUNuRSxDQUFDO0lBWGU7UUFBZixZQUFZLEVBQUU7OzJEQUF1QjtJQUN0QjtRQUFmLFlBQVksRUFBRTs7MkRBQWlCO0lBRWhCO1FBQWYsWUFBWSxFQUFFOzt5REFBK0Q7SUFTbEYsOEJBQUM7Q0FBQSxBQWRELENBQTZDLDRCQUE0QixHQWN4RTtTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWxDb25maWcsIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWwgfSBmcm9tIFwiLi4vZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4sIGlzU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQ09MT1JQSUNLRVIgPSBcIkNPTE9SUElDS0VSXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0NvbG9yUGlja2VyTW9kZWxDb25maWcgZXh0ZW5kcyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsQ29uZmlnPHN0cmluZyB8IG9iamVjdD4ge1xuXG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIGlubGluZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29sb3JQaWNrZXJNb2RlbCBleHRlbmRzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWw8c3RyaW5nIHwgb2JqZWN0PiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgZm9ybWF0OiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBpbmxpbmU6IGJvb2xlYW47XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DT0xPUlBJQ0tFUjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY0NvbG9yUGlja2VyTW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmZvcm1hdCA9IGlzU3RyaW5nKGNvbmZpZy5mb3JtYXQpID8gY29uZmlnLmZvcm1hdCA6IG51bGw7XG4gICAgICAgIHRoaXMuaW5saW5lID0gaXNCb29sZWFuKGNvbmZpZy5pbmxpbmUpID8gY29uZmlnLmlubGluZSA6IGZhbHNlO1xuICAgIH1cbn0iXX0=