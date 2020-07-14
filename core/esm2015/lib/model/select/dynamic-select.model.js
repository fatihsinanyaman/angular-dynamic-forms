import { __decorate, __metadata } from "tslib";
import { ɵlooseIdentical as looseIdentical } from "@angular/core";
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isFunction } from "../../utils/core.utils";
export const DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
export class DynamicSelectModel extends DynamicOptionControlModel {
    constructor(config, layout) {
        var _a, _b, _c;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : looseIdentical;
        this.filterable = isBoolean(config.filterable) ? config.filterable : false;
        this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        this.placeholder = (_a = config.placeholder) !== null && _a !== void 0 ? _a : "";
        this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
    }
    select(...indices) {
        this.value = this.multiple ? indices.map(index => this.get(index).value) : this.get(indices[0]).value;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSelectModel.prototype, "filterable", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Boolean)
], DynamicSelectModel.prototype, "multiple", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "placeholder", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "prefix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "suffix", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicSelectModel.prototype, "type", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWxlY3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3NlbGVjdC9keW5hbWljLXNlbGVjdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFtQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFHLFFBQVEsQ0FBQztBQVl6RCxNQUFNLE9BQU8sa0JBQXNCLFNBQVEseUJBQTRCO0lBV25FLFlBQVksTUFBbUMsRUFBRSxNQUFpQzs7UUFFOUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUpELFNBQUksR0FBVyxnQ0FBZ0MsQ0FBQztRQU1yRSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUM5RixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxTQUFHLE1BQU0sQ0FBQyxXQUFXLG1DQUFJLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxNQUFNLG1DQUFJLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxNQUFNLG1DQUFJLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsT0FBaUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUcsQ0FBQztDQUNKO0FBdkJtQjtJQUFmLFlBQVksRUFBRTs7c0RBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOztvREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7O3VEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7a0RBQXVCO0FBQ3RCO0lBQWYsWUFBWSxFQUFFOztrREFBdUI7QUFFdEI7SUFBZixZQUFZLEVBQUU7O2dEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IMm1bG9vc2VJZGVudGljYWwgYXMgbG9vc2VJZGVudGljYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHluYW1pY09wdGlvbkNvbnRyb2xNb2RlbCwgRHluYW1pY09wdGlvbkNvbnRyb2xNb2RlbENvbmZpZyB9IGZyb20gXCIuLi9keW5hbWljLW9wdGlvbi1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IHNlcmlhbGl6YWJsZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuaW1wb3J0IHsgaXNCb29sZWFuLCBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU0VMRUNUID0gXCJTRUxFQ1RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljU2VsZWN0TW9kZWxDb25maWc8VD4gZXh0ZW5kcyBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsQ29uZmlnPFQ+IHtcblxuICAgIGNvbXBhcmVXaXRoRm4/OiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcbiAgICBmaWx0ZXJhYmxlPzogYm9vbGVhbjtcbiAgICBtdWx0aXBsZT86IGJvb2xlYW47XG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgcHJlZml4Pzogc3RyaW5nO1xuICAgIHN1ZmZpeD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNTZWxlY3RNb2RlbDxUPiBleHRlbmRzIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWw8VD4ge1xuXG4gICAgY29tcGFyZVdpdGhGbjogKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSkgPT4gYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgZmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHByZWZpeDogc3RyaW5nIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgc3VmZml4OiBzdHJpbmcgfCBudWxsO1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRvbmx5IHR5cGU6IHN0cmluZyA9IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfU0VMRUNUO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljU2VsZWN0TW9kZWxDb25maWc8VD4sIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoRm4gPSBpc0Z1bmN0aW9uKGNvbmZpZy5jb21wYXJlV2l0aEZuKSA/IGNvbmZpZy5jb21wYXJlV2l0aEZuIDogbG9vc2VJZGVudGljYWw7XG4gICAgICAgIHRoaXMuZmlsdGVyYWJsZSA9IGlzQm9vbGVhbihjb25maWcuZmlsdGVyYWJsZSkgPyBjb25maWcuZmlsdGVyYWJsZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gaXNCb29sZWFuKGNvbmZpZy5tdWx0aXBsZSkgPyBjb25maWcubXVsdGlwbGUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciA/PyBcIlwiO1xuICAgICAgICB0aGlzLnByZWZpeCA9IGNvbmZpZy5wcmVmaXggPz8gbnVsbDtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBjb25maWcuc3VmZml4ID8/IG51bGw7XG4gICAgfVxuXG4gICAgc2VsZWN0KC4uLmluZGljZXM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm11bHRpcGxlID8gaW5kaWNlcy5tYXAoaW5kZXggPT4gdGhpcy5nZXQoaW5kZXgpLnZhbHVlKSA6IHRoaXMuZ2V0KGluZGljZXNbMF0pLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==