import { __decorate, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { serializable } from "../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../utils/core.utils";
export class DynamicInputControlModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        var _a, _b, _c, _d;
        super(config, layout);
        this.autoComplete = (_a = config.autoComplete) !== null && _a !== void 0 ? _a : "on";
        this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
        this.maxLength = isNumber(config.maxLength) ? config.maxLength : null;
        this.minLength = isNumber(config.minLength) ? config.minLength : null;
        this.placeholder = (_b = config.placeholder) !== null && _b !== void 0 ? _b : "";
        this.prefix = (_c = config.prefix) !== null && _c !== void 0 ? _c : null;
        this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
        this.spellCheck = isBoolean(config.spellCheck) ? config.spellCheck : false;
        this.suffix = (_d = config.suffix) !== null && _d !== void 0 ? _d : null;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1pbnB1dC1jb250cm9sLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9keW5hbWljLWlucHV0LWNvbnRyb2wubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSw0QkFBNEIsRUFBc0MsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWUxRCxNQUFNLE9BQWdCLHdCQUE0QixTQUFRLDRCQUErQjtJQVlyRixZQUFzQixNQUF5QyxFQUFFLE1BQWlDOztRQUU5RixLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxZQUFZLFNBQUcsTUFBTSxDQUFDLFlBQVksbUNBQUksSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLFNBQUcsTUFBTSxDQUFDLFdBQVcsbUNBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLFNBQUcsTUFBTSxDQUFDLE1BQU0sbUNBQUksSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksQ0FBQyxNQUFNLFNBQUcsTUFBTSxDQUFDLE1BQU0sbUNBQUksSUFBSSxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQXhCbUI7SUFBZixZQUFZLEVBQUU7OzhEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7MkRBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzsyREFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7OzJEQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTs7NkRBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOzt3REFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7OzBEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs7NERBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOzt3REFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsLCBEeW5hbWljRm9ybVZhbHVlQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNJbnB1dENvbnRyb2xNb2RlbENvbmZpZzxUPiBleHRlbmRzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWxDb25maWc8VD4ge1xuXG4gICAgYXV0b0NvbXBsZXRlPzogc3RyaW5nO1xuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW47XG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuICAgIG1pbkxlbmd0aD86IG51bWJlcjtcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICBwcmVmaXg/OiBzdHJpbmc7XG4gICAgcmVhZE9ubHk/OiBib29sZWFuO1xuICAgIHNwZWxsQ2hlY2s/OiBib29sZWFuO1xuICAgIHN1ZmZpeD86IHN0cmluZztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER5bmFtaWNJbnB1dENvbnRyb2xNb2RlbDxUPiBleHRlbmRzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWw8VD4ge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIGF1dG9Db21wbGV0ZTogc3RyaW5nO1xuICAgIEBzZXJpYWxpemFibGUoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIG1heExlbmd0aDogbnVtYmVyIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgbWluTGVuZ3RoOiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBzZXJpYWxpemFibGUoKSBwcmVmaXg6IHN0cmluZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRPbmx5OiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBzcGVsbENoZWNrOiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBzdWZmaXg6IHN0cmluZyB8IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljSW5wdXRDb250cm9sTW9kZWxDb25maWc8VD4sIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IGNvbmZpZy5hdXRvQ29tcGxldGUgPz8gXCJvblwiO1xuICAgICAgICB0aGlzLmF1dG9Gb2N1cyA9IGlzQm9vbGVhbihjb25maWcuYXV0b0ZvY3VzKSA/IGNvbmZpZy5hdXRvRm9jdXMgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGggPSBpc051bWJlcihjb25maWcubWF4TGVuZ3RoKSA/IGNvbmZpZy5tYXhMZW5ndGggOiBudWxsO1xuICAgICAgICB0aGlzLm1pbkxlbmd0aCA9IGlzTnVtYmVyKGNvbmZpZy5taW5MZW5ndGgpID8gY29uZmlnLm1pbkxlbmd0aCA6IG51bGw7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2Vob2xkZXIgPz8gXCJcIjtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBjb25maWcucHJlZml4ID8/IG51bGw7XG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBpc0Jvb2xlYW4oY29uZmlnLnJlYWRPbmx5KSA/IGNvbmZpZy5yZWFkT25seSA6IGZhbHNlO1xuICAgICAgICB0aGlzLnNwZWxsQ2hlY2sgPSBpc0Jvb2xlYW4oY29uZmlnLnNwZWxsQ2hlY2spID8gY29uZmlnLnNwZWxsQ2hlY2sgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBjb25maWcuc3VmZml4ID8/IG51bGw7XG4gICAgfVxufVxuIl19