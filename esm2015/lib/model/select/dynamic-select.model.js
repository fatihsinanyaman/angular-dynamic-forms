import { __decorate, __metadata } from "tslib";
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isFunction } from "../../utils/core.utils";
export const DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
export class DynamicSelectModel extends DynamicOptionControlModel {
    constructor(config, layout) {
        var _a, _b, _c;
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : Object.is;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWxlY3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3NlbGVjdC9keW5hbWljLXNlbGVjdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFtQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFHLFFBQVEsQ0FBQztBQVl6RCxNQUFNLE9BQU8sa0JBQXNCLFNBQVEseUJBQTRCO0lBV25FLFlBQVksTUFBbUMsRUFBRSxNQUFpQzs7UUFFOUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUpELFNBQUksR0FBVyxnQ0FBZ0MsQ0FBQztRQU1yRSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekYsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsU0FBRyxNQUFNLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLE9BQWlCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFHLENBQUM7Q0FDSjtBQXZCbUI7SUFBZixZQUFZLEVBQUU7O3NEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7b0RBQW1CO0FBQ2xCO0lBQWYsWUFBWSxFQUFFOzt1REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7O2tEQUF1QjtBQUN0QjtJQUFmLFlBQVksRUFBRTs7a0RBQXVCO0FBRXRCO0lBQWYsWUFBWSxFQUFFOztnREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsLCBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtb3B0aW9uLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4sIGlzRnVuY3Rpb24gfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TRUxFQ1QgPSBcIlNFTEVDVFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNTZWxlY3RNb2RlbENvbmZpZzxUPiBleHRlbmRzIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWxDb25maWc8VD4ge1xuXG4gICAgY29tcGFyZVdpdGhGbj86IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU/OiBib29sZWFuO1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICBwcmVmaXg/OiBzdHJpbmc7XG4gICAgc3VmZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY1NlbGVjdE1vZGVsPFQ+IGV4dGVuZHMgRHluYW1pY09wdGlvbkNvbnRyb2xNb2RlbDxUPiB7XG5cbiAgICBjb21wYXJlV2l0aEZuOiAodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KSA9PiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBmaWx0ZXJhYmxlOiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBAc2VyaWFsaXphYmxlKCkgcHJlZml4OiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBzdWZmaXg6IHN0cmluZyB8IG51bGw7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TRUxFQ1Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNTZWxlY3RNb2RlbENvbmZpZzxUPiwgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGhGbiA9IGlzRnVuY3Rpb24oY29uZmlnLmNvbXBhcmVXaXRoRm4pID8gY29uZmlnLmNvbXBhcmVXaXRoRm4gOiBPYmplY3QuaXM7XG4gICAgICAgIHRoaXMuZmlsdGVyYWJsZSA9IGlzQm9vbGVhbihjb25maWcuZmlsdGVyYWJsZSkgPyBjb25maWcuZmlsdGVyYWJsZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gaXNCb29sZWFuKGNvbmZpZy5tdWx0aXBsZSkgPyBjb25maWcubXVsdGlwbGUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlciA/PyBcIlwiO1xuICAgICAgICB0aGlzLnByZWZpeCA9IGNvbmZpZy5wcmVmaXggPz8gbnVsbDtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBjb25maWcuc3VmZml4ID8/IG51bGw7XG4gICAgfVxuXG4gICAgc2VsZWN0KC4uLmluZGljZXM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm11bHRpcGxlID8gaW5kaWNlcy5tYXAoaW5kZXggPT4gdGhpcy5nZXQoaW5kZXgpLnZhbHVlKSA6IHRoaXMuZ2V0KGluZGljZXNbMF0pLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==