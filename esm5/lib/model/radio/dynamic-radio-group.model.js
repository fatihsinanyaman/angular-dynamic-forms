import { __decorate, __extends, __metadata } from "tslib";
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
export var DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP = "RADIO_GROUP";
var DynamicRadioGroupModel = /** @class */ (function (_super) {
    __extends(DynamicRadioGroupModel, _super);
    function DynamicRadioGroupModel(config, layout) {
        var _a;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP;
        _this.legend = (_a = config.legend) !== null && _a !== void 0 ? _a : null;
        return _this;
    }
    DynamicRadioGroupModel.prototype.select = function (index) {
        this.value = this.get(index).value;
    };
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicRadioGroupModel.prototype, "legend", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicRadioGroupModel.prototype, "type", void 0);
    return DynamicRadioGroupModel;
}(DynamicOptionControlModel));
export { DynamicRadioGroupModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yYWRpby1ncm91cC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvcmFkaW8vZHluYW1pYy1yYWRpby1ncm91cC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFtQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsSUFBTSxxQ0FBcUMsR0FBRyxhQUFhLENBQUM7QUFPbkU7SUFBK0MsMENBQTRCO0lBTXZFLGdDQUFZLE1BQXVDLEVBQUUsTUFBaUM7O1FBQXRGLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUd4QjtRQVB3QixVQUFJLEdBQVcscUNBQXFDLENBQUM7UUFNMUUsS0FBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7O0lBQ3hDLENBQUM7SUFFRCx1Q0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFiZTtRQUFmLFlBQVksRUFBRTs7MERBQXVCO0lBRXRCO1FBQWYsWUFBWSxFQUFFOzt3REFBK0Q7SUFZbEYsNkJBQUM7Q0FBQSxBQWhCRCxDQUErQyx5QkFBeUIsR0FnQnZFO1NBaEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNPcHRpb25Db250cm9sTW9kZWwsIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi4vZHluYW1pYy1vcHRpb24tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfUkFESU9fR1JPVVAgPSBcIlJBRElPX0dST1VQXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY1JhZGlvR3JvdXBNb2RlbENvbmZpZzxUPiBleHRlbmRzIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWxDb25maWc8VD4ge1xuXG4gICAgbGVnZW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY1JhZGlvR3JvdXBNb2RlbDxUPiBleHRlbmRzIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWw8VD4ge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIGxlZ2VuZDogc3RyaW5nIHwgbnVsbDtcblxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1JBRElPX0dST1VQO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljUmFkaW9Hcm91cE1vZGVsQ29uZmlnPFQ+LCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5sZWdlbmQgPSBjb25maWcubGVnZW5kID8/IG51bGw7XG4gICAgfVxuXG4gICAgc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KGluZGV4KS52YWx1ZTtcbiAgICB9XG59XG4iXX0=