import { __decorate, __extends, __metadata } from "tslib";
import { isObservable, of } from "rxjs";
import { map } from "rxjs/operators";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable, serialize } from "../decorator/serializable.decorator";
import { isBoolean } from "../utils/core.utils";
var DynamicFormOption = /** @class */ (function () {
    function DynamicFormOption(config) {
        var _a;
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.label = (_a = config.label) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
    }
    Object.defineProperty(DynamicFormOption.prototype, "text", {
        get: function () {
            return this.label;
        },
        set: function (text) {
            this.label = text;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormOption.prototype.toJSON = function () {
        return serialize(this);
    };
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFormOption.prototype, "disabled", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormOption.prototype, "label", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormOption.prototype, "value", void 0);
    return DynamicFormOption;
}());
export { DynamicFormOption };
var DynamicOptionControlModel = /** @class */ (function (_super) {
    __extends(DynamicOptionControlModel, _super);
    function DynamicOptionControlModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this._options = [];
        _this.options = config.options;
        return _this;
    }
    DynamicOptionControlModel.prototype.updateOptions$ = function () {
        this.options$ = of(this.options);
    };
    Object.defineProperty(DynamicOptionControlModel.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            var _this = this;
            if (Array.isArray(options)) {
                this._options = options.map(function (optionConfig) { return new DynamicFormOption(optionConfig); });
                this.updateOptions$();
            }
            else if (isObservable(options)) {
                this.options$ = options.pipe(map(function (optionsConfig) {
                    _this._options = optionsConfig.map(function (optionConfig) { return new DynamicFormOption(optionConfig); });
                    return _this._options;
                }));
            }
            else {
                this.updateOptions$();
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicOptionControlModel.prototype.add = function (optionConfig) {
        return this.insert(this.options.length, optionConfig);
    };
    DynamicOptionControlModel.prototype.get = function (index) {
        return this.options[index];
    };
    DynamicOptionControlModel.prototype.insert = function (index, optionConfig) {
        var option = new DynamicFormOption(optionConfig);
        this.options.splice(index, 0, option);
        this.updateOptions$();
        return option;
    };
    DynamicOptionControlModel.prototype.remove = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        indices.forEach(function (index) { return _this.options.splice(index, 1); });
        this.updateOptions$();
    };
    __decorate([
        serializable("options"),
        __metadata("design:type", Array)
    ], DynamicOptionControlModel.prototype, "_options", void 0);
    return DynamicOptionControlModel;
}(DynamicFormValueControlModel));
export { DynamicOptionControlModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1vcHRpb24tY29udHJvbC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvZHluYW1pYy1vcHRpb24tY29udHJvbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSw0QkFBNEIsRUFBc0MsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVNoRDtJQU1JLDJCQUFZLE1BQWtDOztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxJQUFJLENBQUMsS0FBSyxTQUFHLE1BQU0sQ0FBQyxLQUFLLG1DQUFJLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsSUFBbUI7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQzs7O09BSkE7SUFNRCxrQ0FBTSxHQUFOO1FBQ0ksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXJCZTtRQUFmLFlBQVksRUFBRTs7dURBQW1CO0lBQ2xCO1FBQWYsWUFB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aXNPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWwsIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tdmFsdWUtY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSwgc2VyaWFsaXplIH0gZnJvbSBcIi4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNGb3JtT3B0aW9uQ29uZmlnPFQ+IHtcblxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB2YWx1ZTogVDtcbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtT3B0aW9uPFQ+IHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgbGFiZWw6IHN0cmluZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHZhbHVlOiBUO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljRm9ybU9wdGlvbkNvbmZpZzxUPikge1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Jvb2xlYW4oY29uZmlnLmRpc2FibGVkKSA/IGNvbmZpZy5kaXNhYmxlZCA6IGZhbHNlO1xuICAgICAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsID8/IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICAgIH1cblxuICAgIHNldCB0ZXh0KHRleHQ6IHN0cmluZyB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRleHQ7XG4gICAgfVxuXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsQ29uZmlnPFQ+IGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxUIHwgVFtdPiB7XG5cbiAgICBvcHRpb25zPzogRHluYW1pY0Zvcm1PcHRpb25Db25maWc8VD5bXSB8IE9ic2VydmFibGU8RHluYW1pY0Zvcm1PcHRpb25Db25maWc8VD5bXT47XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsPFQ+IGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxUIHwgVFtdPiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKFwib3B0aW9uc1wiKSBwcml2YXRlIF9vcHRpb25zOiBEeW5hbWljRm9ybU9wdGlvbjxUPltdID0gW107XG4gICAgb3B0aW9ucyQ6IE9ic2VydmFibGU8RHluYW1pY0Zvcm1PcHRpb248VD5bXT47XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsQ29uZmlnPFQ+LCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVPcHRpb25zJCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zJCA9IG9mKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc2V0IG9wdGlvbnMob3B0aW9uczogYW55KSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyA9IChvcHRpb25zIGFzIER5bmFtaWNGb3JtT3B0aW9uQ29uZmlnPFQ+W10pLm1hcChvcHRpb25Db25maWcgPT4gbmV3IER5bmFtaWNGb3JtT3B0aW9uPFQ+KG9wdGlvbkNvbmZpZykpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMkKCk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUob3B0aW9ucykpIHtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zJCA9IChvcHRpb25zIGFzIE9ic2VydmFibGU8RHluYW1pY0Zvcm1PcHRpb25Db25maWc8VD5bXT4pLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKG9wdGlvbnNDb25maWcgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zQ29uZmlnLm1hcChvcHRpb25Db25maWcgPT4gbmV3IER5bmFtaWNGb3JtT3B0aW9uPFQ+KG9wdGlvbkNvbmZpZykpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgb3B0aW9ucygpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBhZGQob3B0aW9uQ29uZmlnOiBEeW5hbWljRm9ybU9wdGlvbkNvbmZpZzxUPik6IER5bmFtaWNGb3JtT3B0aW9uPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0KHRoaXMub3B0aW9ucy5sZW5ndGgsIG9wdGlvbkNvbmZpZyk7XG4gICAgfVxuXG4gICAgZ2V0KGluZGV4OiBudW1iZXIpOiBEeW5hbWljRm9ybU9wdGlvbjxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbaW5kZXhdO1xuICAgIH1cblxuICAgIGluc2VydChpbmRleDogbnVtYmVyLCBvcHRpb25Db25maWc6IER5bmFtaWNGb3JtT3B0aW9uQ29uZmlnPFQ+KTogRHluYW1pY0Zvcm1PcHRpb248VD4ge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBEeW5hbWljRm9ybU9wdGlvbihvcHRpb25Db25maWcpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5zcGxpY2UoaW5kZXgsIDAsIG9wdGlvbik7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyQoKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIHJlbW92ZSguLi5pbmRpY2VzOiBudW1iZXJbXSk6IHZvaWQge1xuXG4gICAgICAgIGluZGljZXMuZm9yRWFjaChpbmRleCA9PiB0aGlzLm9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyQoKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBzZWxlY3QoLi4uaW5kaWNlczogbnVtYmVyW10pOiB2b2lkO1xufVxuIl19