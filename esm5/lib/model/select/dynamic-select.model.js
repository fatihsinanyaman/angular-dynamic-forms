import { __decorate, __extends, __metadata } from "tslib";
import { DynamicOptionControlModel } from "../dynamic-option-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isFunction } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
var DynamicSelectModel = /** @class */ (function (_super) {
    __extends(DynamicSelectModel, _super);
    function DynamicSelectModel(config, layout) {
        var _a, _b, _c;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_SELECT;
        _this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : Object.is;
        _this.filterable = isBoolean(config.filterable) ? config.filterable : false;
        _this.multiple = isBoolean(config.multiple) ? config.multiple : false;
        _this.placeholder = (_a = config.placeholder) !== null && _a !== void 0 ? _a : "";
        _this.prefix = (_b = config.prefix) !== null && _b !== void 0 ? _b : null;
        _this.suffix = (_c = config.suffix) !== null && _c !== void 0 ? _c : null;
        return _this;
    }
    DynamicSelectModel.prototype.select = function () {
        var _this = this;
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        this.value = this.multiple ? indices.map(function (index) { return _this.get(index).value; }) : this.get(indices[0]).value;
    };
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
    return DynamicSelectModel;
}(DynamicOptionControlModel));
export { DynamicSelectModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWxlY3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3NlbGVjdC9keW5hbWljLXNlbGVjdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFtQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHLFFBQVEsQ0FBQztBQVl6RDtJQUEyQyxzQ0FBNEI7SUFXbkUsNEJBQVksTUFBbUMsRUFBRSxNQUFpQzs7UUFBbEYsWUFFSSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBUXhCO1FBWndCLFVBQUksR0FBVyxnQ0FBZ0MsQ0FBQztRQU1yRSxLQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekYsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0UsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsS0FBSSxDQUFDLFdBQVcsU0FBRyxNQUFNLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUM7UUFDNUMsS0FBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7UUFDcEMsS0FBSSxDQUFDLE1BQU0sU0FBRyxNQUFNLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7O0lBQ3hDLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQUEsaUJBRUM7UUFGTSxpQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLDRCQUFvQjs7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUcsQ0FBQztJQXRCZTtRQUFmLFlBQVksRUFBRTs7MERBQXFCO0lBQ3BCO1FBQWYsWUFBWSxFQUFFOzt3REFBbUI7SUFDbEI7UUFBZixZQUFZLEVBQUU7OzJEQUFxQjtJQUNwQjtRQUFmLFlBQVksRUFBRTs7c0RBQXVCO0lBQ3RCO1FBQWYsWUFBWSxFQUFFOztzREFBdUI7SUFFdEI7UUFBZixZQUFZLEVBQUU7O29EQUEwRDtJQWlCN0UseUJBQUM7Q0FBQSxBQTFCRCxDQUEyQyx5QkFBeUIsR0EwQm5FO1NBMUJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNPcHRpb25Db250cm9sTW9kZWwsIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi4vZHluYW1pYy1vcHRpb24tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzQm9vbGVhbiwgaXNGdW5jdGlvbiB9IGZyb20gXCIuLi8uLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NFTEVDVCA9IFwiU0VMRUNUXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY1NlbGVjdE1vZGVsQ29uZmlnPFQ+IGV4dGVuZHMgRHluYW1pY09wdGlvbkNvbnRyb2xNb2RlbENvbmZpZzxUPiB7XG5cbiAgICBjb21wYXJlV2l0aEZuPzogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG4gICAgZmlsdGVyYWJsZT86IGJvb2xlYW47XG4gICAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgICBzdWZmaXg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljU2VsZWN0TW9kZWw8VD4gZXh0ZW5kcyBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsPFQ+IHtcblxuICAgIGNvbXBhcmVXaXRoRm46ICh2YWx1ZTE6IGFueSwgdmFsdWUyOiBhbnkpID0+IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgQHNlcmlhbGl6YWJsZSgpIG11bHRpcGxlOiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBzZXJpYWxpemFibGUoKSBwcmVmaXg6IHN0cmluZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHN1ZmZpeDogc3RyaW5nIHwgbnVsbDtcblxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1NFTEVDVDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRHluYW1pY1NlbGVjdE1vZGVsQ29uZmlnPFQ+LCBsYXlvdXQ/OiBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQpIHtcblxuICAgICAgICBzdXBlcihjb25maWcsIGxheW91dCk7XG5cbiAgICAgICAgdGhpcy5jb21wYXJlV2l0aEZuID0gaXNGdW5jdGlvbihjb25maWcuY29tcGFyZVdpdGhGbikgPyBjb25maWcuY29tcGFyZVdpdGhGbiA6IE9iamVjdC5pcztcbiAgICAgICAgdGhpcy5maWx0ZXJhYmxlID0gaXNCb29sZWFuKGNvbmZpZy5maWx0ZXJhYmxlKSA/IGNvbmZpZy5maWx0ZXJhYmxlIDogZmFsc2U7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBpc0Jvb2xlYW4oY29uZmlnLm11bHRpcGxlKSA/IGNvbmZpZy5tdWx0aXBsZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyID8/IFwiXCI7XG4gICAgICAgIHRoaXMucHJlZml4ID0gY29uZmlnLnByZWZpeCA/PyBudWxsO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IGNvbmZpZy5zdWZmaXggPz8gbnVsbDtcbiAgICB9XG5cbiAgICBzZWxlY3QoLi4uaW5kaWNlczogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubXVsdGlwbGUgPyBpbmRpY2VzLm1hcChpbmRleCA9PiB0aGlzLmdldChpbmRleCkudmFsdWUpIDogdGhpcy5nZXQoaW5kaWNlc1swXSkudmFsdWU7XG4gICAgfVxufVxuIl19