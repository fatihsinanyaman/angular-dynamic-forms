import { __decorate, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
export class DynamicDateControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        var _a, _b, _c, _d;
        super(config, layout);
        this.format = (_a = config.format) !== null && _a !== void 0 ? _a : null;
        this.max = (_b = config.max) !== null && _b !== void 0 ? _b : null;
        this.min = (_c = config.min) !== null && _c !== void 0 ? _c : null;
        this.placeholder = (_d = config.placeholder) !== null && _d !== void 0 ? _d : null;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1kYXRlLWNvbnRyb2wubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2R5bmFtaWMtZGF0ZS1jb250cm9sLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNDLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBWW5FLE1BQU0sT0FBZ0IsdUJBQXdCLFNBQVEsNEJBQXFEO0lBT3ZHLFlBQXNCLE1BQXFDLEVBQUUsTUFBaUM7O1FBRTFGLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsU0FBRyxNQUFNLENBQUMsR0FBRyxtQ0FBSSxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsU0FBRyxNQUFNLENBQUMsR0FBRyxtQ0FBSSxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsU0FBRyxNQUFNLENBQUMsV0FBVyxtQ0FBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBZG1CO0lBQWYsWUFBWSxFQUFFOzt1REFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7O29EQUFxQztBQUNwQztJQUFmLFlBQVksRUFBRTs7b0RBQXFDO0FBQ3BDO0lBQWYsWUFBWSxFQUFFOzs0REFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsQ29uZmlnLCBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcblxuZXhwb3J0IHR5cGUgRHluYW1pY0RhdGVDb250cm9sVmFsdWUgPSBzdHJpbmcgfCBvYmplY3QgfCBEYXRlO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNEYXRlQ29udHJvbE1vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZT4ge1xuXG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIG1heD86IER5bmFtaWNEYXRlQ29udHJvbFZhbHVlO1xuICAgIG1pbj86IER5bmFtaWNEYXRlQ29udHJvbFZhbHVlO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0RhdGVDb250cm9sTW9kZWwgZXh0ZW5kcyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsPER5bmFtaWNEYXRlQ29udHJvbFZhbHVlPiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgZm9ybWF0OiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBtYXg6IER5bmFtaWNEYXRlQ29udHJvbFZhbHVlIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgbWluOiBEeW5hbWljRGF0ZUNvbnRyb2xWYWx1ZSB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY0RhdGVDb250cm9sTW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmZvcm1hdCA9IGNvbmZpZy5mb3JtYXQgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5tYXggPSBjb25maWcubWF4ID8/IG51bGw7XG4gICAgICAgIHRoaXMubWluID0gY29uZmlnLm1pbiA/PyBudWxsO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyID8/IG51bGw7XG4gICAgfVxufVxuIl19