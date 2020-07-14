import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
import { DynamicFormControlModel } from "../dynamic-form-control.model";
import { serializable } from "../../decorator/serializable.decorator";
export var DYNAMIC_FORM_CONTROL_TYPE_GROUP = "GROUP";
var DynamicFormGroupModel = /** @class */ (function (_super) {
    __extends(DynamicFormGroupModel, _super);
    function DynamicFormGroupModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.group = [];
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_GROUP;
        _this.group = Array.isArray(config.group) ? config.group : [];
        _this.legend = (_a = config.legend) !== null && _a !== void 0 ? _a : null;
        return _this;
    }
    DynamicFormGroupModel.prototype.get = function (index) {
        return this.group[index];
    };
    DynamicFormGroupModel.prototype.set = function (index, controlModel) {
        this.group[index] = controlModel;
    };
    DynamicFormGroupModel.prototype.add = function (controlModel) {
        this.group.push(controlModel);
    };
    DynamicFormGroupModel.prototype.insert = function (index, controlModel) {
        this.group.splice(index, 0, controlModel);
    };
    DynamicFormGroupModel.prototype.move = function (index, step) {
        var _a;
        (_a = this.group).splice.apply(_a, __spread([index + step, 0], this.group.splice(index, 1)));
    };
    DynamicFormGroupModel.prototype.remove = function (index) {
        this.group.splice(index, 1);
    };
    DynamicFormGroupModel.prototype.size = function () {
        return this.group.length;
    };
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicFormGroupModel.prototype, "group", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormGroupModel.prototype, "legend", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormGroupModel.prototype, "type", void 0);
    return DynamicFormGroupModel;
}(DynamicFormControlModel));
export { DynamicFormGroupModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWdyb3VwLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9mb3JtLWdyb3VwL2R5bmFtaWMtZm9ybS1ncm91cC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFpQyxNQUFNLCtCQUErQixDQUFDO0FBR3ZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsSUFBTSwrQkFBK0IsR0FBRyxPQUFPLENBQUM7QUFRdkQ7SUFBMkMseUNBQXVCO0lBTzlELCtCQUFZLE1BQW1DLEVBQUUsTUFBaUM7O1FBQWxGLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUl4QjtRQVhlLFdBQUssR0FBcUIsRUFBRSxDQUFDO1FBR3BCLFVBQUksR0FBVywrQkFBK0IsQ0FBQztRQU1wRSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0QsS0FBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7O0lBQ3hDLENBQUM7SUFFRCxtQ0FBRyxHQUFILFVBQUksS0FBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQUcsR0FBSCxVQUFJLEtBQWEsRUFBRSxZQUFxQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUNBQUcsR0FBSCxVQUFJLFlBQXFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLFlBQXFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELG9DQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsSUFBWTs7UUFDNUIsQ0FBQSxLQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxNQUFNLHFCQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRTtJQUN2RSxDQUFDO0lBRUQsc0NBQU0sR0FBTixVQUFPLEtBQWE7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBdkNlO1FBQWYsWUFBWSxFQUFFOzt3REFBOEI7SUFDN0I7UUFBZixZQUFZLEVBQUU7O3lEQUF1QjtJQUV0QjtRQUFmLFlBQVksRUFBRTs7dURBQXlEO0lBcUM1RSw0QkFBQztDQUFBLEFBMUNELENBQTJDLHVCQUF1QixHQTBDakU7U0ExQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybU1vZGVsIH0gZnJvbSBcIi4uL2R5bmFtaWMtZm9ybS5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfR1JPVVAgPSBcIkdST1VQXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0Zvcm1Hcm91cE1vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0Zvcm1Db250cm9sTW9kZWxDb25maWcge1xuXG4gICAgZ3JvdXA/OiBEeW5hbWljRm9ybU1vZGVsO1xuICAgIGxlZ2VuZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtR3JvdXBNb2RlbCBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBncm91cDogRHluYW1pY0Zvcm1Nb2RlbCA9IFtdO1xuICAgIEBzZXJpYWxpemFibGUoKSBsZWdlbmQ6IHN0cmluZyB8IG51bGw7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9HUk9VUDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY0Zvcm1Hcm91cE1vZGVsQ29uZmlnLCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5ncm91cCA9IEFycmF5LmlzQXJyYXkoY29uZmlnLmdyb3VwKSA/IGNvbmZpZy5ncm91cCA6IFtdO1xuICAgICAgICB0aGlzLmxlZ2VuZCA9IGNvbmZpZy5sZWdlbmQgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQoaW5kZXg6IG51bWJlcik6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBbaW5kZXhdO1xuICAgIH1cblxuICAgIHNldChpbmRleDogbnVtYmVyLCBjb250cm9sTW9kZWw6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwW2luZGV4XSA9IGNvbnRyb2xNb2RlbDtcbiAgICB9XG5cbiAgICBhZGQoY29udHJvbE1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwLnB1c2goY29udHJvbE1vZGVsKTtcbiAgICB9XG5cbiAgICBpbnNlcnQoaW5kZXg6IG51bWJlciwgY29udHJvbE1vZGVsOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwLnNwbGljZShpbmRleCwgMCwgY29udHJvbE1vZGVsKTtcbiAgICB9XG5cbiAgICBtb3ZlKGluZGV4OiBudW1iZXIsIHN0ZXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwLnNwbGljZShpbmRleCArIHN0ZXAsIDAsIC4uLnRoaXMuZ3JvdXAuc3BsaWNlKGluZGV4LCAxKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ncm91cC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAubGVuZ3RoO1xuICAgIH1cbn1cbiJdfQ==