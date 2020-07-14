import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_SLIDER = "SLIDER";
var DynamicSliderModel = /** @class */ (function (_super) {
    __extends(DynamicSliderModel, _super);
    function DynamicSliderModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SLIDER;
        _this.max = isNumber(config.max) ? config.max : 10;
        _this.min = isNumber(config.min) ? config.min : 0;
        _this.step = isNumber(config.step) ? config.step : 1;
        _this.vertical = isBoolean(config.vertical) ? config.vertical : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicSliderModel.prototype, "max", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicSliderModel.prototype, "min", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicSliderModel.prototype, "step", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicSliderModel.prototype, "vertical", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSliderModel.prototype, "type", void 0);
    return DynamicSliderModel;
}(DynamicFormValueControlModel));
export { DynamicSliderModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zbGlkZXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3NsaWRlci9keW5hbWljLXNsaWRlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFzQyw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHLFFBQVEsQ0FBQztBQVV6RDtJQUF3QyxzQ0FBb0M7SUFTeEUsNEJBQVksTUFBZ0MsRUFBRSxNQUFpQztRQUEvRSxZQUVJLGtCQUFNLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FNeEI7UUFWd0IsVUFBSSxHQUFXLGdDQUFnQyxDQUFDO1FBTXJFLEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xELEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztJQUN6RSxDQUFDO0lBZmU7UUFBZixZQUFZLEVBQUU7O21EQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7bURBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOztvREFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7O3dEQUFtQjtJQUVsQjtRQUFmLFlBQVksRUFBRTs7b0RBQTBEO0lBVzdFLHlCQUFDO0NBQUEsQUFsQkQsQ0FBd0MsNEJBQTRCLEdBa0JuRTtTQWxCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsQ29uZmlnLCBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL2R5bmFtaWMtZm9ybS12YWx1ZS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuaW1wb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciB9IGZyb20gXCIuLi8uLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NMSURFUiA9IFwiU0xJREVSXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY1NsaWRlck1vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxudW1iZXI+IHtcblxuICAgIG1heD86IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgc3RlcD86IG51bWJlcjtcbiAgICB2ZXJ0aWNhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljU2xpZGVyTW9kZWwgZXh0ZW5kcyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsPG51bWJlcj4ge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIG1heDogbnVtYmVyIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgbWluOiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBzdGVwOiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSB2ZXJ0aWNhbDogYm9vbGVhbjtcblxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NMSURFUjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY1NsaWRlck1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5tYXggPSBpc051bWJlcihjb25maWcubWF4KSA/IGNvbmZpZy5tYXggOiAxMDtcbiAgICAgICAgdGhpcy5taW4gPSBpc051bWJlcihjb25maWcubWluKSA/IGNvbmZpZy5taW4gOiAwO1xuICAgICAgICB0aGlzLnN0ZXAgPSBpc051bWJlcihjb25maWcuc3RlcCkgPyBjb25maWcuc3RlcCA6IDE7XG4gICAgICAgIHRoaXMudmVydGljYWwgPSBpc0Jvb2xlYW4oY29uZmlnLnZlcnRpY2FsKSA/IGNvbmZpZy52ZXJ0aWNhbCA6IGZhbHNlO1xuICAgIH1cbn0iXX0=