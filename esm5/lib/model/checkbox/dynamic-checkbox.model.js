import { __decorate, __extends, __metadata } from "tslib";
import { DynamicCheckControlModel } from "../dynamic-check-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX = "CHECKBOX";
var DynamicCheckboxModel = /** @class */ (function (_super) {
    __extends(DynamicCheckboxModel, _super);
    function DynamicCheckboxModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;
        _this.indeterminate = isBoolean(config.indeterminate) ? config.indeterminate : false;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicCheckboxModel.prototype, "indeterminate", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicCheckboxModel.prototype, "type", void 0);
    return DynamicCheckboxModel;
}(DynamicCheckControlModel));
export { DynamicCheckboxModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jaGVja2JveC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvY2hlY2tib3gvZHluYW1pYy1jaGVja2JveC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFrQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsTUFBTSxDQUFDLElBQU0sa0NBQWtDLEdBQUcsVUFBVSxDQUFDO0FBTzdEO0lBQTBDLHdDQUF3QjtJQU05RCw4QkFBWSxNQUFrQyxFQUFFLE1BQWlDO1FBQWpGLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUd4QjtRQVB3QixVQUFJLEdBQVcsa0NBQWtDLENBQUM7UUFNdkUsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O0lBQ3hGLENBQUM7SUFUZTtRQUFmLFlBQVksRUFBRTs7K0RBQXdCO0lBRXZCO1FBQWYsWUFBWSxFQUFFOztzREFBNEQ7SUFRL0UsMkJBQUM7Q0FBQSxBQVpELENBQTBDLHdCQUF3QixHQVlqRTtTQVpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNDaGVja0NvbnRyb2xNb2RlbCwgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtY2hlY2stY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzQm9vbGVhbiB9IGZyb20gXCIuLi8uLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YID0gXCJDSEVDS0JPWFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNDaGVja2JveE1vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsQ29uZmlnIHtcblxuICAgIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0NoZWNrYm94TW9kZWwgZXh0ZW5kcyBEeW5hbWljQ2hlY2tDb250cm9sTW9kZWwge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY0NoZWNrYm94TW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBpc0Jvb2xlYW4oY29uZmlnLmluZGV0ZXJtaW5hdGUpID8gY29uZmlnLmluZGV0ZXJtaW5hdGUgOiBmYWxzZTtcbiAgICB9XG59Il19