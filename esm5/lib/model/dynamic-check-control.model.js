import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean } from "../utils/core.utils";
var DynamicCheckControlModel = /** @class */ (function (_super) {
    __extends(DynamicCheckControlModel, _super);
    function DynamicCheckControlModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.labelPosition = (_a = config.labelPosition) !== null && _a !== void 0 ? _a : null;
        _this.checked = isBoolean(_this.value) ? _this.value : false;
        return _this;
    }
    Object.defineProperty(DynamicCheckControlModel.prototype, "checked", {
        get: function () {
            return this.value;
        },
        set: function (checked) {
            this.value = checked;
        },
        enumerable: true,
        configurable: true
    });
    DynamicCheckControlModel.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicCheckControlModel.prototype, "labelPosition", void 0);
    return DynamicCheckControlModel;
}(DynamicFormValueControlModel));
export { DynamicCheckControlModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jaGVjay1jb250cm9sLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9keW5hbWljLWNoZWNrLWNvbnRyb2wubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSw0QkFBNEIsRUFBc0MsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT2hEO0lBQXVELDRDQUFxQztJQUl4RixrQ0FBc0IsTUFBc0MsRUFBRSxNQUFpQzs7UUFBL0YsWUFFSSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBSXhCO1FBRkcsS0FBSSxDQUFDLGFBQWEsU0FBRyxNQUFNLENBQUMsYUFBYSxtQ0FBSSxJQUFJLENBQUM7UUFDbEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O0lBQzlELENBQUM7SUFFRCxzQkFBSSw2Q0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFZLE9BQWdCO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQseUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFwQmU7UUFBZixZQUFZLEVBQUU7O21FQUE4QjtJQXFCakQsK0JBQUM7Q0FBQSxBQXZCRCxDQUF1RCw0QkFBNEIsR0F1QmxGO1NBdkJxQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsLCBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzQm9vbGVhbiB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxib29sZWFuPiB7XG5cbiAgICBsYWJlbFBvc2l0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0NoZWNrQ29udHJvbE1vZGVsIGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxib29sZWFuPiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgbGFiZWxQb3NpdGlvbjogc3RyaW5nIHwgbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNDaGVja0NvbnRyb2xNb2RlbENvbmZpZywgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuXG4gICAgICAgIHRoaXMubGFiZWxQb3NpdGlvbiA9IGNvbmZpZy5sYWJlbFBvc2l0aW9uID8/IG51bGw7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGlzQm9vbGVhbih0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gY2hlY2tlZDtcbiAgICB9XG5cbiAgICB0b2dnbGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgfVxufVxuIl19