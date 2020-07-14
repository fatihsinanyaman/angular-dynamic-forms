import { __decorate, __metadata } from "tslib";
import { DynamicCheckControlModel } from "../dynamic-check-control.model";
import { serializable } from "../../decorator/serializable.decorator";
export const DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";
export class DynamicSwitchModel extends DynamicCheckControlModel {
    constructor(config, layout) {
        var _a, _b;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SWITCH;
        this.offLabel = (_a = config.offLabel) !== null && _a !== void 0 ? _a : null;
        this.onLabel = (_b = config.onLabel) !== null && _b !== void 0 ? _b : null;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zd2l0Y2gubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3N3aXRjaC9keW5hbWljLXN3aXRjaC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFrQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRyxRQUFRLENBQUM7QUFRekQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHdCQUF3QjtJQU81RCxZQUFZLE1BQWdDLEVBQUUsTUFBaUM7O1FBRTNFLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFKRCxTQUFJLEdBQVcsZ0NBQWdDLENBQUM7UUFNckUsSUFBSSxDQUFDLFFBQVEsU0FBRyxNQUFNLENBQUMsUUFBUSxtQ0FBSSxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sU0FBRyxNQUFNLENBQUMsT0FBTyxtQ0FBSSxJQUFJLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBWm1CO0lBQWYsWUFBWSxFQUFFOztvREFBeUI7QUFDeEI7SUFBZixZQUFZLEVBQUU7O21EQUF3QjtBQUV2QjtJQUFmLFlBQVksRUFBRTs7Z0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsLCBEeW5hbWljQ2hlY2tDb250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi4vZHluYW1pYy1jaGVjay1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TV0lUQ0ggPSBcIlNXSVRDSFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNTd2l0Y2hNb2RlbENvbmZpZyBleHRlbmRzIER5bmFtaWNDaGVja0NvbnRyb2xNb2RlbENvbmZpZyB7XG5cbiAgICBvZmZMYWJlbD86IHN0cmluZztcbiAgICBvbkxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY1N3aXRjaE1vZGVsIGV4dGVuZHMgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBvZmZMYWJlbDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgb25MYWJlbDogc3RyaW5nIHwgbnVsbDtcblxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NXSVRDSDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY1N3aXRjaE1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5vZmZMYWJlbCA9IGNvbmZpZy5vZmZMYWJlbCA/PyBudWxsO1xuICAgICAgICB0aGlzLm9uTGFiZWwgPSBjb25maWcub25MYWJlbCA/PyBudWxsO1xuICAgIH1cbn1cbiJdfQ==