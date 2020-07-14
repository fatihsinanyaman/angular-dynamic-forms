import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
var DynamicDateControlModel = /** @class */ (function (_super) {
    __extends(DynamicDateControlModel, _super);
    function DynamicDateControlModel(config, layout) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, config, layout) || this;
        _this.format = (_a = config.format) !== null && _a !== void 0 ? _a : null;
        _this.max = (_b = config.max) !== null && _b !== void 0 ? _b : null;
        _this.min = (_c = config.min) !== null && _c !== void 0 ? _c : null;
        _this.placeholder = (_d = config.placeholder) !== null && _d !== void 0 ? _d : null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicDateControlModel.prototype, "format", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDateControlModel.prototype, "max", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicDateControlModel.prototype, "min", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicDateControlModel.prototype, "placeholder", void 0);
    return DynamicDateControlModel;
}(DynamicFormValueControlModel));
export { DynamicDateControlModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1kYXRlLWNvbnRyb2wubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2R5bmFtaWMtZGF0ZS1jb250cm9sLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNDLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBWW5FO0lBQXNELDJDQUFxRDtJQU92RyxpQ0FBc0IsTUFBcUMsRUFBRSxNQUFpQzs7UUFBOUYsWUFFSSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBTXhCO1FBSkcsS0FBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7UUFDcEMsS0FBSSxDQUFDLEdBQUcsU0FBRyxNQUFNLENBQUMsR0FBRyxtQ0FBSSxJQUFJLENBQUM7UUFDOUIsS0FBSSxDQUFDLEdBQUcsU0FBRyxNQUFNLENBQUMsR0FBRyxtQ0FBSSxJQUFJLENBQUM7UUFDOUIsS0FBSSxDQUFDLFdBQVcsU0FBRyxNQUFNLENBQUMsV0FBVyxtQ0FBSSxJQUFJLENBQUM7O0lBQ2xELENBQUM7SUFiZTtRQUFmLFlBQVksRUFBRTs7MkRBQXVCO0lBQ3RCO1FBQWYsWUFBWSxFQUFFOzt3REFBcUM7SUFDcEM7UUFBZixZQUFZLEVBQUU7O3dEQUFxQztJQUNwQztRQUFmLFlBQVksRUFBRTs7Z0VBQTRCO0lBVy9DLDhCQUFDO0NBQUEsQUFoQkQsQ0FBc0QsNEJBQTRCLEdBZ0JqRjtTQWhCcUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZywgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbCB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS12YWx1ZS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNEYXRlQ29udHJvbFZhbHVlID0gc3RyaW5nIHwgb2JqZWN0IHwgRGF0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRGF0ZUNvbnRyb2xNb2RlbENvbmZpZyBleHRlbmRzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWxDb25maWc8RHluYW1pY0RhdGVDb250cm9sVmFsdWU+IHtcblxuICAgIGZvcm1hdD86IHN0cmluZztcbiAgICBtYXg/OiBEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZTtcbiAgICBtaW4/OiBEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZTtcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER5bmFtaWNEYXRlQ29udHJvbE1vZGVsIGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZT4ge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIGZvcm1hdDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgbWF4OiBEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZSB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIG1pbjogRHluYW1pY0RhdGVDb250cm9sVmFsdWUgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBwbGFjZWhvbGRlcjogc3RyaW5nIHwgbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNEYXRlQ29udHJvbE1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5mb3JtYXQgPSBjb25maWcuZm9ybWF0ID8/IG51bGw7XG4gICAgICAgIHRoaXMubWF4ID0gY29uZmlnLm1heCA/PyBudWxsO1xuICAgICAgICB0aGlzLm1pbiA9IGNvbmZpZy5taW4gPz8gbnVsbDtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciA/PyBudWxsO1xuICAgIH1cbn1cbiJdfQ==