import { __decorate, __metadata } from "tslib";
import { BehaviorSubject } from "rxjs";
import { DynamicFormHook } from "./misc/dynamic-form-control-validation.model";
import { serializable, serialize } from "../decorator/serializable.decorator";
import { isBoolean, isObject, isString } from "../utils/core.utils";
var DynamicFormControlModel = /** @class */ (function () {
    function DynamicFormControlModel(config, layout) {
        var _this = this;
        if (layout === void 0) { layout = null; }
        var _a, _b, _c, _d, _e, _f, _g;
        this.parent = null;
        this.asyncValidators = (_a = config.asyncValidators) !== null && _a !== void 0 ? _a : null;
        this.errorMessages = (_b = config.errorMessages) !== null && _b !== void 0 ? _b : null;
        this.hidden = isBoolean(config.hidden) ? config.hidden : false;
        this.id = config.id;
        this.label = (_c = config.label) !== null && _c !== void 0 ? _c : null;
        this.labelTooltip = (_d = config.labelTooltip) !== null && _d !== void 0 ? _d : null;
        this.controlTooltip = (_e = config.controlTooltip) !== null && _e !== void 0 ? _e : null;
        this.layout = layout;
        this.name = (_f = config.name) !== null && _f !== void 0 ? _f : config.id;
        this.relations = Array.isArray(config.relations) ? config.relations : [];
        this.updateOn = isString(config.updateOn) ? config.updateOn : null;
        this.validators = (_g = config.validators) !== null && _g !== void 0 ? _g : null;
        this.disabled$ = new BehaviorSubject(isBoolean(config.disabled) ? config.disabled : false);
        this.disabled$.subscribe(function (disabled) { return _this._disabled = disabled; });
        this.disabledChanges = this.disabled$.asObservable();
    }
    Object.defineProperty(DynamicFormControlModel.prototype, "disabled", {
        get: function () {
            return this.disabled$.getValue();
        },
        set: function (disabled) {
            this.disabled$.next(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlModel.prototype, "hasErrorMessages", {
        get: function () {
            return isObject(this.errorMessages);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormControlModel.prototype.toJSON = function () {
        return serialize(this);
    };
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormControlModel.prototype, "asyncValidators", void 0);
    __decorate([
        serializable("disabled"),
        __metadata("design:type", Boolean)
    ], DynamicFormControlModel.prototype, "_disabled", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormControlModel.prototype, "errorMessages", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFormControlModel.prototype, "hidden", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormControlModel.prototype, "id", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormControlModel.prototype, "label", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormControlModel.prototype, "labelTooltip", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormControlModel.prototype, "controlTooltip", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormControlModel.prototype, "layout", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormControlModel.prototype, "name", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicFormControlModel.prototype, "relations", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormControlModel.prototype, "updateOn", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormControlModel.prototype, "validators", void 0);
    return DynamicFormControlModel;
}());
export { DynamicFormControlModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxlQUFlLEVBQTJCLE1BQU0sOENBQThDLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWtCcEU7SUF1QkksaUNBQXNCLE1BQXFDLEVBQUUsTUFBOEM7UUFBM0csaUJBa0JDO1FBbEI0RCx1QkFBQSxFQUFBLGFBQThDOztRQVgzRyxXQUFNLEdBQTJCLElBQUksQ0FBQztRQWFsQyxJQUFJLENBQUMsZUFBZSxTQUFHLE1BQU0sQ0FBQyxlQUFlLG1DQUFJLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxTQUFHLE1BQU0sQ0FBQyxhQUFhLG1DQUFJLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssU0FBRyxNQUFNLENBQUMsS0FBSyxtQ0FBSSxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksU0FBRyxNQUFNLENBQUMsWUFBWSxtQ0FBSSxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsU0FBRyxNQUFNLENBQUMsY0FBYyxtQ0FBSSxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksU0FBRyxNQUFNLENBQUMsSUFBSSxtQ0FBSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxTQUFHLE1BQU0sQ0FBQyxVQUFVLG1DQUFJLElBQUksQ0FBQztRQUU1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELHNCQUFJLDZDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsQ0FBQzthQUVELFVBQWEsUUFBaUI7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxREFBZ0I7YUFBcEI7WUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBTSxHQUFOO1FBQ0ksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXZEZTtRQUFmLFlBQVksRUFBRTs7b0VBQWlEO0lBQ3RDO1FBQXpCLFlBQVksQ0FBQyxVQUFVLENBQUM7OzhEQUFvQjtJQUM3QjtRQUFmLFlBQVksRUFBRTs7a0VBQStDO0lBQzlDO1FBQWYsWUFBWSxFQUFFOzsyREFBaUI7SUFDaEI7UUFBZixZQUFZLEVBQUU7O3VEQUFZO0lBQ1g7UUFBZixZQUFZLEVBQUU7OzBEQUFzQjtJQUNyQjtRQUFmLFlBQVksRUFBRTs7aUVBQTZCO0lBQzVCO1FBQWYsWUFBWSxFQUFFOzttRUFBK0I7SUFDOUI7UUFBZixZQUFZLEVBQUU7OzJEQUF5QztJQUN4QztRQUFmLFlBQVksRUFBRTs7eURBQWM7SUFFYjtRQUFmLFlBQVksRUFBRTs7OERBQXlDO0lBQ3hDO1FBQWYsWUFBWSxFQUFFOzs2REFBa0M7SUFDakM7UUFBZixZQUFZLEVBQUU7OytEQUE0QztJQTJDL0QsOEJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQTFEcUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljUGF0aGFibGUgfSBmcm9tIFwiLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLXBhdGgubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbFJlbGF0aW9uIH0gZnJvbSBcIi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1yZWxhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Ib29rLCBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB9IGZyb20gXCIuL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtdmFsaWRhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlLCBzZXJpYWxpemUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbENvbmZpZyB7XG5cbiAgICBhc3luY1ZhbGlkYXRvcnM/OiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZztcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgZXJyb3JNZXNzYWdlcz86IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnO1xuICAgIGhpZGRlbj86IGJvb2xlYW47XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBsYWJlbFRvb2x0aXA/OiBzdHJpbmc7XG4gICAgY29udHJvbFRvb2x0aXA/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWxhdGlvbnM/OiBEeW5hbWljRm9ybUNvbnRyb2xSZWxhdGlvbltdO1xuICAgIHVwZGF0ZU9uPzogRHluYW1pY0Zvcm1Ib29rO1xuICAgIHZhbGlkYXRvcnM/OiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIGltcGxlbWVudHMgRHluYW1pY1BhdGhhYmxlIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBhc3luY1ZhbGlkYXRvcnM6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKFwiZGlzYWJsZWRcIikgX2Rpc2FibGVkOiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBlcnJvck1lc3NhZ2VzOiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGhpZGRlbjogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgaWQ6IHN0cmluZztcbiAgICBAc2VyaWFsaXphYmxlKCkgbGFiZWw6IHN0cmluZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGxhYmVsVG9vbHRpcDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgY29udHJvbFRvb2x0aXA6IHN0cmluZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGxheW91dDogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgbmFtZTogc3RyaW5nO1xuICAgIHBhcmVudDogRHluYW1pY1BhdGhhYmxlIHwgbnVsbCA9IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlbGF0aW9uczogRHluYW1pY0Zvcm1Db250cm9sUmVsYXRpb25bXTtcbiAgICBAc2VyaWFsaXphYmxlKCkgdXBkYXRlT246IER5bmFtaWNGb3JtSG9vayB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHZhbGlkYXRvcnM6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlzYWJsZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgICByZWFkb25seSBkaXNhYmxlZENoYW5nZXM6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICBhYnN0cmFjdCByZWFkb25seSB0eXBlOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbENvbmZpZywgbGF5b3V0OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfCBudWxsID0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMuYXN5bmNWYWxpZGF0b3JzID0gY29uZmlnLmFzeW5jVmFsaWRhdG9ycyA/PyBudWxsO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBjb25maWcuZXJyb3JNZXNzYWdlcyA/PyBudWxsO1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGlzQm9vbGVhbihjb25maWcuaGlkZGVuKSA/IGNvbmZpZy5oaWRkZW4gOiBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGNvbmZpZy5pZDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbCA/PyBudWxsO1xuICAgICAgICB0aGlzLmxhYmVsVG9vbHRpcCA9IGNvbmZpZy5sYWJlbFRvb2x0aXAgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5jb250cm9sVG9vbHRpcCA9IGNvbmZpZy5jb250cm9sVG9vbHRpcCA/PyBudWxsO1xuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dDtcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgPz8gY29uZmlnLmlkO1xuICAgICAgICB0aGlzLnJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkoY29uZmlnLnJlbGF0aW9ucykgPyBjb25maWcucmVsYXRpb25zIDogW107XG4gICAgICAgIHRoaXMudXBkYXRlT24gPSBpc1N0cmluZyhjb25maWcudXBkYXRlT24pID8gY29uZmlnLnVwZGF0ZU9uIDogbnVsbDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gY29uZmlnLnZhbGlkYXRvcnMgPz8gbnVsbDtcblxuICAgICAgICB0aGlzLmRpc2FibGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoaXNCb29sZWFuKGNvbmZpZy5kaXNhYmxlZCkgPyBjb25maWcuZGlzYWJsZWQgOiBmYWxzZSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQkLnN1YnNjcmliZShkaXNhYmxlZCA9PiB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZXMgPSB0aGlzLmRpc2FibGVkJC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkJC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkJC5uZXh0KGRpc2FibGVkKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzRXJyb3JNZXNzYWdlcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplKHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==