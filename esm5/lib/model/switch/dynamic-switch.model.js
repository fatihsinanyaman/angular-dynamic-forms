import { __decorate, __extends, __metadata } from "tslib";
import { DynamicCheckControlModel } from "../dynamic-check-control.model";
import { serializable } from "../../decorator/serializable.decorator";
export var DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";
var DynamicSwitchModel = /** @class */ (function (_super) {
    __extends(DynamicSwitchModel, _super);
    function DynamicSwitchModel(config, layout) {
        var _a, _b;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SWITCH;
        _this.offLabel = (_a = config.offLabel) !== null && _a !== void 0 ? _a : null;
        _this.onLabel = (_b = config.onLabel) !== null && _b !== void 0 ? _b : null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSwitchModel.prototype, "offLabel", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSwitchModel.prototype, "onLabel", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicSwitchModel.prototype, "type", void 0);
    return DynamicSwitchModel;
}(DynamicCheckControlModel));
export { DynamicSwitchModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zd2l0Y2gubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3N3aXRjaC9keW5hbWljLXN3aXRjaC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFrQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsSUFBTSxnQ0FBZ0MsR0FBRyxRQUFRLENBQUM7QUFRekQ7SUFBd0Msc0NBQXdCO0lBTzVELDRCQUFZLE1BQWdDLEVBQUUsTUFBaUM7O1FBQS9FLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUl4QjtRQVJ3QixVQUFJLEdBQVcsZ0NBQWdDLENBQUM7UUFNckUsS0FBSSxDQUFDLFFBQVEsU0FBRyxNQUFNLENBQUMsUUFBUSxtQ0FBSSxJQUFJLENBQUM7UUFDeEMsS0FBSSxDQUFDLE9BQU8sU0FBRyxNQUFNLENBQUMsT0FBTyxtQ0FBSSxJQUFJLENBQUM7O0lBQzFDLENBQUM7SUFYZTtRQUFmLFlBQVksRUFBRTs7d0RBQXlCO0lBQ3hCO1FBQWYsWUFBWSxFQUFFOzt1REFBd0I7SUFFdkI7UUFBZixZQUFZLEVBQUU7O29EQUEwRDtJQVM3RSx5QkFBQztDQUFBLEFBZEQsQ0FBd0Msd0JBQXdCLEdBYy9EO1NBZFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsLCBEeW5hbWljQ2hlY2tDb250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi4vZHluYW1pYy1jaGVjay1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TV0lUQ0ggPSBcIlNXSVRDSFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNTd2l0Y2hNb2RlbENvbmZpZyBleHRlbmRzIER5bmFtaWNDaGVja0NvbnRyb2xNb2RlbENvbmZpZyB7XG5cbiAgICBvZmZMYWJlbD86IHN0cmluZztcbiAgICBvbkxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY1N3aXRjaE1vZGVsIGV4dGVuZHMgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBvZmZMYWJlbDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgb25MYWJlbDogc3RyaW5nIHwgbnVsbDtcblxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NXSVRDSDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY1N3aXRjaE1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5vZmZMYWJlbCA9IGNvbmZpZy5vZmZMYWJlbCA/PyBudWxsO1xuICAgICAgICB0aGlzLm9uTGFiZWwgPSBjb25maWcub25MYWJlbCA/PyBudWxsO1xuICAgIH1cbn1cbiJdfQ==