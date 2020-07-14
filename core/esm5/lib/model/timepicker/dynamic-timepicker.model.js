import { __decorate, __extends, __metadata } from "tslib";
import { DynamicDateControlModel } from "../dynamic-date-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER = "TIMEPICKER";
var DynamicTimePickerModel = /** @class */ (function (_super) {
    __extends(DynamicTimePickerModel, _super);
    function DynamicTimePickerModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER;
        _this.meridian = isBoolean(config.meridian) ? config.meridian : false;
        _this.showSeconds = isBoolean(config.showSeconds) ? config.showSeconds : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicTimePickerModel.prototype, "meridian", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicTimePickerModel.prototype, "showSeconds", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicTimePickerModel.prototype, "type", void 0);
    return DynamicTimePickerModel;
}(DynamicDateControlModel));
export { DynamicTimePickerModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10aW1lcGlja2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC90aW1lcGlja2VyL2R5bmFtaWMtdGltZXBpY2tlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFpQyxNQUFNLCtCQUErQixDQUFDO0FBRXZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsTUFBTSxDQUFDLElBQU0sb0NBQW9DLEdBQUcsWUFBWSxDQUFDO0FBUWpFO0lBQTRDLDBDQUF1QjtJQU8vRCxnQ0FBWSxNQUFvQyxFQUFFLE1BQWlDO1FBQW5GLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUl4QjtRQVJ3QixVQUFJLEdBQVcsb0NBQW9DLENBQUM7UUFNekUsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O0lBQ2xGLENBQUM7SUFYZTtRQUFmLFlBQVksRUFBRTs7NERBQW1CO0lBQ2xCO1FBQWYsWUFBWSxFQUFFOzsrREFBc0I7SUFFckI7UUFBZixZQUFZLEVBQUU7O3dEQUE4RDtJQVNqRiw2QkFBQztDQUFBLEFBZEQsQ0FBNEMsdUJBQXVCLEdBY2xFO1NBZFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1pY0RhdGVDb250cm9sTW9kZWwsIER5bmFtaWNEYXRlQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtZGF0ZS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVElNRVBJQ0tFUiA9IFwiVElNRVBJQ0tFUlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNUaW1lUGlja2VyTW9kZWxDb25maWcgZXh0ZW5kcyBEeW5hbWljRGF0ZUNvbnRyb2xNb2RlbENvbmZpZyB7XG5cbiAgICBtZXJpZGlhbj86IGJvb2xlYW47XG4gICAgc2hvd1NlY29uZHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY1RpbWVQaWNrZXJNb2RlbCBleHRlbmRzIER5bmFtaWNEYXRlQ29udHJvbE1vZGVsIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBtZXJpZGlhbjogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgc2hvd1NlY29uZHM6IGJvb2xlYW47XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9USU1FUElDS0VSO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljVGltZVBpY2tlck1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5tZXJpZGlhbiA9IGlzQm9vbGVhbihjb25maWcubWVyaWRpYW4pID8gY29uZmlnLm1lcmlkaWFuIDogZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1NlY29uZHMgPSBpc0Jvb2xlYW4oY29uZmlnLnNob3dTZWNvbmRzKSA/IGNvbmZpZy5zaG93U2Vjb25kcyA6IGZhbHNlO1xuICAgIH1cbn0iXX0=