import { __decorate, __extends, __metadata } from "tslib";
import { BehaviorSubject } from "rxjs";
import { DynamicFormControlModel } from "./dynamic-form-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean, isObject } from "../utils/core.utils";
var DynamicFormValueControlModel = /** @class */ (function (_super) {
    __extends(DynamicFormValueControlModel, _super);
    function DynamicFormValueControlModel(config, layout) {
        var _a, _b, _c;
        var _this = _super.call(this, config, layout) || this;
        _this.additional = isObject(config.additional) ? config.additional : null;
        _this.hint = (_a = config.hint) !== null && _a !== void 0 ? _a : null;
        _this.required = isBoolean(config.required) ? config.required : false;
        _this.tabIndex = (_b = config.tabIndex) !== null && _b !== void 0 ? _b : null;
        _this.value$ = new BehaviorSubject((_c = config.value) !== null && _c !== void 0 ? _c : null);
        _this.value$.subscribe(function (value) { return _this._value = value; });
        _this.valueChanges = _this.value$.asObservable();
        return _this;
    }
    Object.defineProperty(DynamicFormValueControlModel.prototype, "value", {
        get: function () {
            return this.value$.getValue();
        },
        set: function (value) {
            this.value$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormValueControlModel.prototype.getAdditional = function (key, defaultValue) {
        return this.additional !== null && this.additional.hasOwnProperty(key) ? this.additional[key] : defaultValue;
    };
    __decorate([
        serializable(),
        __metadata("design:type", Object)
    ], DynamicFormValueControlModel.prototype, "additional", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFormValueControlModel.prototype, "hint", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFormValueControlModel.prototype, "required", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicFormValueControlModel.prototype, "tabIndex", void 0);
    __decorate([
        serializable("value"),
        __metadata("design:type", Object)
    ], DynamicFormValueControlModel.prototype, "_value", void 0);
    return DynamicFormValueControlModel;
}(DynamicFormControlModel));
export { DynamicFormValueControlModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2R5bmFtaWMtZm9ybS12YWx1ZS1jb250cm9sLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBaUMsTUFBTSw4QkFBOEIsQ0FBQztBQUV0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVcxRDtJQUE4RCxnREFBdUI7SUFZakYsc0NBQXNCLE1BQTZDLEVBQUUsTUFBaUM7O1FBQXRHLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQVV4QjtRQVJHLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pFLEtBQUksQ0FBQyxJQUFJLFNBQUcsTUFBTSxDQUFDLElBQUksbUNBQUksSUFBSSxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JFLEtBQUksQ0FBQyxRQUFRLFNBQUcsTUFBTSxDQUFDLFFBQVEsbUNBQUksSUFBSSxDQUFDO1FBRXhDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFlLE9BQUMsTUFBTSxDQUFDLEtBQUssbUNBQUksSUFBSSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ3BELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7SUFDbkQsQ0FBQztJQUVELHNCQUFJLCtDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsQ0FBQzthQUVELFVBQVUsS0FBZTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELG9EQUFhLEdBQWIsVUFBYyxHQUFXLEVBQUUsWUFBeUI7UUFDaEQsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ2pILENBQUM7SUFsQ2U7UUFBZixZQUFZLEVBQUU7O29FQUEyQztJQUMxQztRQUFmLFlBQVksRUFBRTs7OERBQXFCO0lBQ3BCO1FBQWYsWUFBWSxFQUFFOztrRUFBbUI7SUFDbEI7UUFBZixZQUFZLEVBQUU7O2tFQUF5QjtJQUNqQjtRQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDOztnRUFBMEI7SUErQnBELG1DQUFDO0NBQUEsQUFyQ0QsQ0FBOEQsdUJBQXVCLEdBcUNwRjtTQXJDcUIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbENvbmZpZyB9IGZyb20gXCIuL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsQ29uZmlnPFQ+IGV4dGVuZHMgRHluYW1pY0Zvcm1Db250cm9sTW9kZWxDb25maWcge1xuXG4gICAgYWRkaXRpb25hbD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgaGludD86IHN0cmluZztcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XG4gICAgdGFiSW5kZXg/OiBudW1iZXI7XG4gICAgdmFsdWU/OiBUO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxUPiBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIHtcblxuICAgIEBzZXJpYWxpemFibGUoKSBhZGRpdGlvbmFsOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgaGludDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIHRhYkluZGV4OiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoXCJ2YWx1ZVwiKSBwcml2YXRlIF92YWx1ZTogVCB8IG51bGw7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PFQ+O1xuXG4gICAgcmVhZG9ubHkgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPFQ+O1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxUPiwgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGlzT2JqZWN0KGNvbmZpZy5hZGRpdGlvbmFsKSA/IGNvbmZpZy5hZGRpdGlvbmFsIDogbnVsbDtcbiAgICAgICAgdGhpcy5oaW50ID0gY29uZmlnLmhpbnQgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGlzQm9vbGVhbihjb25maWcucmVxdWlyZWQpID8gY29uZmlnLnJlcXVpcmVkIDogZmFsc2U7XG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBjb25maWcudGFiSW5kZXggPz8gbnVsbDtcblxuICAgICAgICB0aGlzLnZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoY29uZmlnLnZhbHVlID8/IG51bGwpO1xuICAgICAgICB0aGlzLnZhbHVlJC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5fdmFsdWUgPSB2YWx1ZSk7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VzID0gdGhpcy52YWx1ZSQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUkLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBUIHwgbnVsbCkge1xuICAgICAgICB0aGlzLnZhbHVlJC5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRBZGRpdGlvbmFsKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkgfCBudWxsKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkaXRpb25hbCAhPT0gbnVsbCAmJiB0aGlzLmFkZGl0aW9uYWwuaGFzT3duUHJvcGVydHkoa2V5KSA/IHRoaXMuYWRkaXRpb25hbFtrZXldIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cbn1cbiJdfQ==