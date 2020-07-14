import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../utils/core.utils";
var DynamicInputControlModel = /** @class */ (function (_super) {
    __extends(DynamicInputControlModel, _super);
    function DynamicInputControlModel(config, layout) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, config, layout) || this;
        _this.autoComplete = (_a = config.autoComplete) !== null && _a !== void 0 ? _a : "on";
        _this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        _this.maxLength = isNumber(config.maxLength) ? config.maxLength : null;
        _this.minLength = isNumber(config.minLength) ? config.minLength : null;
        _this.placeholder = (_b = config.placeholder) !== null && _b !== void 0 ? _b : "";
        _this.prefix = (_c = config.prefix) !== null && _c !== void 0 ? _c : null;
        _this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        _this.spellCheck = isBoolean(config.spellCheck) ? config.spellCheck : false;
        _this.suffix = (_d = config.suffix) !== null && _d !== void 0 ? _d : null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicInputControlModel.prototype, "autoComplete", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicInputControlModel.prototype, "autoFocus", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicInputControlModel.prototype, "maxLength", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicInputControlModel.prototype, "minLength", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicInputControlModel.prototype, "placeholder", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicInputControlModel.prototype, "prefix", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicInputControlModel.prototype, "readOnly", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicInputControlModel.prototype, "spellCheck", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicInputControlModel.prototype, "suffix", void 0);
    return DynamicInputControlModel;
}(DynamicFormValueControlModel));
export { DynamicInputControlModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1pbnB1dC1jb250cm9sLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9keW5hbWljLWlucHV0LWNvbnRyb2wubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSw0QkFBNEIsRUFBc0MsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWUxRDtJQUEwRCw0Q0FBK0I7SUFZckYsa0NBQXNCLE1BQXlDLEVBQUUsTUFBaUM7O1FBQWxHLFlBRUksa0JBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQVd4QjtRQVRHLEtBQUksQ0FBQyxZQUFZLFNBQUcsTUFBTSxDQUFDLFlBQVksbUNBQUksSUFBSSxDQUFDO1FBQ2hELEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hFLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLEtBQUksQ0FBQyxXQUFXLFNBQUcsTUFBTSxDQUFDLFdBQVcsbUNBQUksRUFBRSxDQUFDO1FBQzVDLEtBQUksQ0FBQyxNQUFNLFNBQUcsTUFBTSxDQUFDLE1BQU0sbUNBQUksSUFBSSxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JFLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLEtBQUksQ0FBQyxNQUFNLFNBQUcsTUFBTSxDQUFDLE1BQU0sbUNBQUksSUFBSSxDQUFDOztJQUN4QyxDQUFDO0lBdkJlO1FBQWYsWUFBWSxFQUFFOztrRUFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7OytEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7K0RBQTBCO0lBQ3pCO1FBQWYsWUFBWSxFQUFFOzsrREFBMEI7SUFDekI7UUFBZixZQUFZLEVBQUU7O2lFQUFxQjtJQUNwQjtRQUFmLFlBQVksRUFBRTs7NERBQXVCO0lBQ3RCO1FBQWYsWUFBWSxFQUFFOzs4REFBbUI7SUFDbEI7UUFBZixZQUFZLEVBQUU7O2dFQUFxQjtJQUNwQjtRQUFmLFlBQVksRUFBRTs7NERBQXVCO0lBZ0IxQywrQkFBQztDQUFBLEFBMUJELENBQTBELDRCQUE0QixHQTBCckY7U0ExQnFCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWwsIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0tdmFsdWUtY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSB9IGZyb20gXCIuLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuaW1wb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciB9IGZyb20gXCIuLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0lucHV0Q29udHJvbE1vZGVsQ29uZmlnPFQ+IGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxUPiB7XG5cbiAgICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XG4gICAgYXV0b0ZvY3VzPzogYm9vbGVhbjtcbiAgICBtYXhMZW5ndGg/OiBudW1iZXI7XG4gICAgbWluTGVuZ3RoPzogbnVtYmVyO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgICByZWFkT25seT86IGJvb2xlYW47XG4gICAgc3BlbGxDaGVjaz86IGJvb2xlYW47XG4gICAgc3VmZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0lucHV0Q29udHJvbE1vZGVsPFQ+IGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbDxUPiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgYXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgbWF4TGVuZ3RoOiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBtaW5MZW5ndGg6IG51bWJlciB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHByZWZpeDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZE9ubHk6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIHNwZWxsQ2hlY2s6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIHN1ZmZpeDogc3RyaW5nIHwgbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNJbnB1dENvbnRyb2xNb2RlbENvbmZpZzxUPiwgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuXG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlID0gY29uZmlnLmF1dG9Db21wbGV0ZSA/PyBcIm9uXCI7XG4gICAgICAgIHRoaXMuYXV0b0ZvY3VzID0gaXNCb29sZWFuKGNvbmZpZy5hdXRvRm9jdXMpID8gY29uZmlnLmF1dG9Gb2N1cyA6IGZhbHNlO1xuICAgICAgICB0aGlzLm1heExlbmd0aCA9IGlzTnVtYmVyKGNvbmZpZy5tYXhMZW5ndGgpID8gY29uZmlnLm1heExlbmd0aCA6IG51bGw7XG4gICAgICAgIHRoaXMubWluTGVuZ3RoID0gaXNOdW1iZXIoY29uZmlnLm1pbkxlbmd0aCkgPyBjb25maWcubWluTGVuZ3RoIDogbnVsbDtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciA/PyBcIlwiO1xuICAgICAgICB0aGlzLnByZWZpeCA9IGNvbmZpZy5wcmVmaXggPz8gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGlzQm9vbGVhbihjb25maWcucmVhZE9ubHkpID8gY29uZmlnLnJlYWRPbmx5IDogZmFsc2U7XG4gICAgICAgIHRoaXMuc3BlbGxDaGVjayA9IGlzQm9vbGVhbihjb25maWcuc3BlbGxDaGVjaykgPyBjb25maWcuc3BlbGxDaGVjayA6IGZhbHNlO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IGNvbmZpZy5zdWZmaXggPz8gbnVsbDtcbiAgICB9XG59XG4iXX0=