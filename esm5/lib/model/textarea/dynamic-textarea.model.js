import { __decorate, __extends, __metadata } from "tslib";
import { DynamicInputControlModel } from "../dynamic-input-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isNumber } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA = "TEXTAREA";
export var DYNAMIC_FORM_TEXTAREA_WRAP_HARD = "hard";
export var DYNAMIC_FORM_TEXTAREA_WRAP_SOFT = "soft";
var DynamicTextAreaModel = /** @class */ (function (_super) {
    __extends(DynamicTextAreaModel, _super);
    function DynamicTextAreaModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA;
        _this.cols = isNumber(config.cols) ? config.cols : 20;
        _this.rows = isNumber(config.rows) ? config.rows : 2;
        _this.wrap = (_a = config.wrap) !== null && _a !== void 0 ? _a : DYNAMIC_FORM_TEXTAREA_WRAP_SOFT;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicTextAreaModel.prototype, "cols", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicTextAreaModel.prototype, "rows", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicTextAreaModel.prototype, "wrap", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicTextAreaModel.prototype, "type", void 0);
    return DynamicTextAreaModel;
}(DynamicInputControlModel));
export { DynamicTextAreaModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZXh0YXJlYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvdGV4dGFyZWEvZHluYW1pYy10ZXh0YXJlYS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFrQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQsTUFBTSxDQUFDLElBQU0sa0NBQWtDLEdBQUcsVUFBVSxDQUFDO0FBRTdELE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUFHLE1BQU0sQ0FBQztBQUN0RCxNQUFNLENBQUMsSUFBTSwrQkFBK0IsR0FBRyxNQUFNLENBQUM7QUFTdEQ7SUFBMEMsd0NBQWdDO0lBUXRFLDhCQUFZLE1BQWtDLEVBQUUsTUFBaUM7O1FBQWpGLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUt4QjtRQVR3QixVQUFJLEdBQVcsa0NBQWtDLENBQUM7UUFNdkUsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsS0FBSSxDQUFDLElBQUksU0FBRyxNQUFNLENBQUMsSUFBSSxtQ0FBSSwrQkFBK0IsQ0FBQzs7SUFDL0QsQ0FBQztJQWJlO1FBQWYsWUFBWSxFQUFFOztzREFBYztJQUNiO1FBQWYsWUFBWSxFQUFFOztzREFBYztJQUNiO1FBQWYsWUFBWSxFQUFFOztzREFBYztJQUViO1FBQWYsWUFBWSxFQUFFOztzREFBNEQ7SUFVL0UsMkJBQUM7Q0FBQSxBQWhCRCxDQUEwQyx3QkFBd0IsR0FnQmpFO1NBaEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNJbnB1dENvbnRyb2xNb2RlbCwgRHluYW1pY0lucHV0Q29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtaW5wdXQtY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVEVYVEFSRUEgPSBcIlRFWFRBUkVBXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fVEVYVEFSRUFfV1JBUF9IQVJEID0gXCJoYXJkXCI7XG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX1RFWFRBUkVBX1dSQVBfU09GVCA9IFwic29mdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNUZXh0QXJlYU1vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0lucHV0Q29udHJvbE1vZGVsQ29uZmlnPHN0cmluZz4ge1xuXG4gICAgY29scz86IG51bWJlcjtcbiAgICByb3dzPzogbnVtYmVyO1xuICAgIHdyYXA/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljVGV4dEFyZWFNb2RlbCBleHRlbmRzIER5bmFtaWNJbnB1dENvbnRyb2xNb2RlbDxzdHJpbmc+IHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBjb2xzOiBudW1iZXI7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHJvd3M6IG51bWJlcjtcbiAgICBAc2VyaWFsaXphYmxlKCkgd3JhcDogc3RyaW5nO1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRvbmx5IHR5cGU6IHN0cmluZyA9IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfVEVYVEFSRUE7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNUZXh0QXJlYU1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5jb2xzID0gaXNOdW1iZXIoY29uZmlnLmNvbHMpID8gY29uZmlnLmNvbHMgOiAyMDtcbiAgICAgICAgdGhpcy5yb3dzID0gaXNOdW1iZXIoY29uZmlnLnJvd3MpID8gY29uZmlnLnJvd3MgOiAyO1xuICAgICAgICB0aGlzLndyYXAgPSBjb25maWcud3JhcCA/PyBEWU5BTUlDX0ZPUk1fVEVYVEFSRUFfV1JBUF9TT0ZUO1xuICAgIH1cbn1cbiJdfQ==