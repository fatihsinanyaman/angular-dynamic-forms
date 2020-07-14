import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFormGroupModel } from "../form-group/dynamic-form-group.model";
import { serializable } from "../../decorator/serializable.decorator";
export var DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP = "CHECKBOX_GROUP";
var DynamicCheckboxGroupModel = /** @class */ (function (_super) {
    __extends(DynamicCheckboxGroupModel, _super);
    function DynamicCheckboxGroupModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP;
        return _this;
    }
    DynamicCheckboxGroupModel.prototype.check = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.group[index].checked = true; });
    };
    DynamicCheckboxGroupModel.prototype.uncheck = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.group[index].checked = false; });
    };
    DynamicCheckboxGroupModel.prototype.checkAll = function () {
        this.group.forEach(function (model) { return model.checked = true; });
    };
    DynamicCheckboxGroupModel.prototype.uncheckAll = function () {
        this.group.forEach(function (model) { return model.checked = false; });
    };
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicCheckboxGroupModel.prototype, "group", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicCheckboxGroupModel.prototype, "type", void 0);
    return DynamicCheckboxGroupModel;
}(DynamicFormGroupModel));
export { DynamicCheckboxGroupModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jaGVja2JveC1ncm91cC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvY2hlY2tib3gvZHluYW1pYy1jaGVja2JveC1ncm91cC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUErQixNQUFNLHdDQUF3QyxDQUFDO0FBRzVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsSUFBTSx3Q0FBd0MsR0FBRyxnQkFBZ0IsQ0FBQztBQUV6RTtJQUErQyw2Q0FBcUI7SUFNaEUsbUNBQVksTUFBbUMsRUFBRSxNQUFpQztRQUFsRixZQUNJLGtCQUFNLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FDeEI7UUFKd0IsVUFBSSxHQUFXLHdDQUF3QyxDQUFDOztJQUlqRixDQUFDO0lBRUQseUNBQUssR0FBTDtRQUFBLGlCQUVDO1FBRkssaUJBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiw0QkFBb0I7O1FBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsMkNBQU8sR0FBUDtRQUFBLGlCQUVDO1FBRk8saUJBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiw0QkFBb0I7O1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOENBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBdEJlO1FBQWYsWUFBWSxFQUFFOzs0REFBK0I7SUFFOUI7UUFBZixZQUFZLEVBQUU7OzJEQUFrRTtJQXFCckYsZ0NBQUM7Q0FBQSxBQXpCRCxDQUErQyxxQkFBcUIsR0F5Qm5FO1NBekJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNGb3JtR3JvdXBNb2RlbCwgRHluYW1pY0Zvcm1Hcm91cE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2Zvcm0tZ3JvdXAvZHluYW1pYy1mb3JtLWdyb3VwLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljQ2hlY2tib3hNb2RlbCB9IGZyb20gXCIuL2R5bmFtaWMtY2hlY2tib3gubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0NIRUNLQk9YX0dST1VQID0gXCJDSEVDS0JPWF9HUk9VUFwiO1xuXG5leHBvcnQgY2xhc3MgRHluYW1pY0NoZWNrYm94R3JvdXBNb2RlbCBleHRlbmRzIER5bmFtaWNGb3JtR3JvdXBNb2RlbCB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgZ3JvdXA6IER5bmFtaWNDaGVja2JveE1vZGVsW107XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9DSEVDS0JPWF9HUk9VUDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY0Zvcm1Hcm91cE1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuICAgIH1cblxuICAgIGNoZWNrKC4uLmluZGljZXM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIGluZGljZXMuZm9yRWFjaChpbmRleCA9PiB0aGlzLmdyb3VwW2luZGV4XS5jaGVja2VkID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgdW5jaGVjayguLi5pbmRpY2VzOiBudW1iZXJbXSk6IHZvaWQge1xuICAgICAgICBpbmRpY2VzLmZvckVhY2goaW5kZXggPT4gdGhpcy5ncm91cFtpbmRleF0uY2hlY2tlZCA9IGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGVja0FsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cC5mb3JFYWNoKG1vZGVsID0+IG1vZGVsLmNoZWNrZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwLmZvckVhY2gobW9kZWwgPT4gbW9kZWwuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICB9XG59XG4iXX0=