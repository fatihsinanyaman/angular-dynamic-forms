import { __decorate, __extends, __metadata } from "tslib";
import { ɵlooseIdentical as looseIdentical } from "@angular/core";
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
        _this.compareWithFn = isFunction(config.compareWithFn) ? config.compareWithFn : looseIdentical;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWxlY3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3NlbGVjdC9keW5hbWljLXNlbGVjdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFtQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHLFFBQVEsQ0FBQztBQVl6RDtJQUEyQyxzQ0FBNEI7SUFXbkUsNEJBQVksTUFBbUMsRUFBRSxNQUFpQzs7UUFBbEYsWUFFSSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBUXhCO1FBWndCLFVBQUksR0FBVyxnQ0FBZ0MsQ0FBQztRQU1yRSxLQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUM5RixLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxLQUFJLENBQUMsV0FBVyxTQUFHLE1BQU0sQ0FBQyxXQUFXLG1DQUFJLEVBQUUsQ0FBQztRQUM1QyxLQUFJLENBQUMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxNQUFNLG1DQUFJLElBQUksQ0FBQztRQUNwQyxLQUFJLENBQUMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxNQUFNLG1DQUFJLElBQUksQ0FBQzs7SUFDeEMsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFBQSxpQkFFQztRQUZNLGlCQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsNEJBQW9COztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxRyxDQUFDO0lBdEJlO1FBQWYsWUFBWSxFQUFFOzswREFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7O3dEQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7MkRBQXFCO0lBQ3BCO1FBQWYsWUFBWSxFQUFFOztzREFBdUI7SUFDdEI7UUFBZixZQUFZLEVBQUU7O3NEQUF1QjtJQUV0QjtRQUFmLFlBQVksRUFBRTs7b0RBQTBEO0lBaUI3RSx5QkFBQztDQUFBLEFBMUJELENBQTJDLHlCQUF5QixHQTBCbkU7U0ExQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgybVsb29zZUlkZW50aWNhbCBhcyBsb29zZUlkZW50aWNhbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsLCBEeW5hbWljT3B0aW9uQ29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtb3B0aW9uLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4sIGlzRnVuY3Rpb24gfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TRUxFQ1QgPSBcIlNFTEVDVFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNTZWxlY3RNb2RlbENvbmZpZzxUPiBleHRlbmRzIER5bmFtaWNPcHRpb25Db250cm9sTW9kZWxDb25maWc8VD4ge1xuXG4gICAgY29tcGFyZVdpdGhGbj86IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU/OiBib29sZWFuO1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICBwcmVmaXg/OiBzdHJpbmc7XG4gICAgc3VmZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY1NlbGVjdE1vZGVsPFQ+IGV4dGVuZHMgRHluYW1pY09wdGlvbkNvbnRyb2xNb2RlbDxUPiB7XG5cbiAgICBjb21wYXJlV2l0aEZuOiAodmFsdWUxOiBhbnksIHZhbHVlMjogYW55KSA9PiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBmaWx0ZXJhYmxlOiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBAc2VyaWFsaXphYmxlKCkgcHJlZml4OiBzdHJpbmcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBzdWZmaXg6IHN0cmluZyB8IG51bGw7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9TRUxFQ1Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNTZWxlY3RNb2RlbENvbmZpZzxUPiwgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGhGbiA9IGlzRnVuY3Rpb24oY29uZmlnLmNvbXBhcmVXaXRoRm4pID8gY29uZmlnLmNvbXBhcmVXaXRoRm4gOiBsb29zZUlkZW50aWNhbDtcbiAgICAgICAgdGhpcy5maWx0ZXJhYmxlID0gaXNCb29sZWFuKGNvbmZpZy5maWx0ZXJhYmxlKSA/IGNvbmZpZy5maWx0ZXJhYmxlIDogZmFsc2U7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBpc0Jvb2xlYW4oY29uZmlnLm11bHRpcGxlKSA/IGNvbmZpZy5tdWx0aXBsZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyID8/IFwiXCI7XG4gICAgICAgIHRoaXMucHJlZml4ID0gY29uZmlnLnByZWZpeCA/PyBudWxsO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IGNvbmZpZy5zdWZmaXggPz8gbnVsbDtcbiAgICB9XG5cbiAgICBzZWxlY3QoLi4uaW5kaWNlczogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubXVsdGlwbGUgPyBpbmRpY2VzLm1hcChpbmRleCA9PiB0aGlzLmdldChpbmRleCkudmFsdWUpIDogdGhpcy5nZXQoaW5kaWNlc1swXSkudmFsdWU7XG4gICAgfVxufVxuIl19