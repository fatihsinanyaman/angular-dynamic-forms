import { __decorate, __extends, __metadata } from "tslib";
import { DynamicFileControlModel } from "../dynamic-file-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../../utils/core.utils";
export var DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD = "FILE_UPLOAD";
var DynamicFileUploadModel = /** @class */ (function (_super) {
    __extends(DynamicFileUploadModel, _super);
    function DynamicFileUploadModel(config, layout) {
        var _a, _b;
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD;
        _this.accept = Array.isArray(config.accept) ? config.accept : null;
        _this.autoUpload = isBoolean(config.autoUpload) ? config.autoUpload : true;
        _this.maxSize = isNumber(config.maxSize) ? config.maxSize : null;
        _this.minSize = isNumber(config.minSize) ? config.minSize : null;
        _this.removeUrl = (_a = config.removeUrl) !== null && _a !== void 0 ? _a : null;
        _this.showFileList = isBoolean(config.showFileList) ? config.showFileList : true;
        _this.url = (_b = config.url) !== null && _b !== void 0 ? _b : null;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicFileUploadModel.prototype, "accept", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFileUploadModel.prototype, "autoUpload", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicFileUploadModel.prototype, "maxSize", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicFileUploadModel.prototype, "minSize", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFileUploadModel.prototype, "removeUrl", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Boolean)
    ], DynamicFileUploadModel.prototype, "showFileList", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFileUploadModel.prototype, "url", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicFileUploadModel.prototype, "type", void 0);
    return DynamicFileUploadModel;
}(DynamicFileControlModel));
export { DynamicFileUploadModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWxlLXVwbG9hZC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvZmlsZS11cGxvYWQvZHluYW1pYy1maWxlLXVwbG9hZC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQyx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE1BQU0sQ0FBQyxJQUFNLHFDQUFxQyxHQUFHLGFBQWEsQ0FBQztBQWFuRTtJQUE0QywwQ0FBdUI7SUFZL0QsZ0NBQVksTUFBb0MsRUFBRSxNQUFpQzs7UUFBbkYsWUFFSSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBU3hCO1FBYndCLFVBQUksR0FBVyxxQ0FBcUMsQ0FBQztRQU0xRSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEUsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEUsS0FBSSxDQUFDLFNBQVMsU0FBRyxNQUFNLENBQUMsU0FBUyxtQ0FBSSxJQUFJLENBQUM7UUFDMUMsS0FBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEYsS0FBSSxDQUFDLEdBQUcsU0FBRyxNQUFNLENBQUMsR0FBRyxtQ0FBSSxJQUFJLENBQUM7O0lBQ2xDLENBQUM7SUFyQmU7UUFBZixZQUFZLEVBQUU7OzBEQUF5QjtJQUN4QjtRQUFmLFlBQVksRUFBRTs7OERBQXFCO0lBQ3BCO1FBQWYsWUFBWSxFQUFFOzsyREFBd0I7SUFDdkI7UUFBZixZQUFZLEVBQUU7OzJEQUF3QjtJQUN2QjtRQUFmLFlBQVksRUFBRTs7NkRBQTBCO0lBQ3pCO1FBQWYsWUFBWSxFQUFFOztnRUFBdUI7SUFDdEI7UUFBZixZQUFZLEVBQUU7O3VEQUFvQjtJQUVuQjtRQUFmLFlBQVksRUFBRTs7d0RBQStEO0lBY2xGLDZCQUFDO0NBQUEsQUF4QkQsQ0FBNEMsdUJBQXVCLEdBd0JsRTtTQXhCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljRmlsZUNvbnRyb2xNb2RlbENvbmZpZywgRHluYW1pY0ZpbGVDb250cm9sTW9kZWwgfSBmcm9tIFwiLi4vZHluYW1pYy1maWxlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRklMRV9VUExPQUQgPSBcIkZJTEVfVVBMT0FEXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0ZpbGVVcGxvYWRNb2RlbENvbmZpZyBleHRlbmRzIER5bmFtaWNGaWxlQ29udHJvbE1vZGVsQ29uZmlnIHtcblxuICAgIGFjY2VwdD86IHN0cmluZ1tdO1xuICAgIGF1dG9VcGxvYWQ/OiBib29sZWFuO1xuICAgIG1heFNpemU/OiBudW1iZXI7XG4gICAgbWluU2l6ZT86IG51bWJlcjtcbiAgICByZW1vdmVVcmw/OiBzdHJpbmc7XG4gICAgc2hvd0ZpbGVMaXN0PzogYm9vbGVhbjtcbiAgICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljRmlsZVVwbG9hZE1vZGVsIGV4dGVuZHMgRHluYW1pY0ZpbGVDb250cm9sTW9kZWwge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIGFjY2VwdDogc3RyaW5nW10gfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBhdXRvVXBsb2FkOiBib29sZWFuO1xuICAgIEBzZXJpYWxpemFibGUoKSBtYXhTaXplOiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBtaW5TaXplOiBudW1iZXIgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSByZW1vdmVVcmw6IHN0cmluZyB8IG51bGw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIHNob3dGaWxlTGlzdDogYm9vbGVhbjtcbiAgICBAc2VyaWFsaXphYmxlKCkgdXJsOiBzdHJpbmcgfCBudWxsO1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRvbmx5IHR5cGU6IHN0cmluZyA9IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRklMRV9VUExPQUQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNGaWxlVXBsb2FkTW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLmFjY2VwdCA9IEFycmF5LmlzQXJyYXkoY29uZmlnLmFjY2VwdCkgPyBjb25maWcuYWNjZXB0IDogbnVsbDtcbiAgICAgICAgdGhpcy5hdXRvVXBsb2FkID0gaXNCb29sZWFuKGNvbmZpZy5hdXRvVXBsb2FkKSA/IGNvbmZpZy5hdXRvVXBsb2FkIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXhTaXplID0gaXNOdW1iZXIoY29uZmlnLm1heFNpemUpID8gY29uZmlnLm1heFNpemUgOiBudWxsO1xuICAgICAgICB0aGlzLm1pblNpemUgPSBpc051bWJlcihjb25maWcubWluU2l6ZSkgPyBjb25maWcubWluU2l6ZSA6IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlVXJsID0gY29uZmlnLnJlbW92ZVVybCA/PyBudWxsO1xuICAgICAgICB0aGlzLnNob3dGaWxlTGlzdCA9IGlzQm9vbGVhbihjb25maWcuc2hvd0ZpbGVMaXN0KSA/IGNvbmZpZy5zaG93RmlsZUxpc3QgOiB0cnVlO1xuICAgICAgICB0aGlzLnVybCA9IGNvbmZpZy51cmwgPz8gbnVsbDtcbiAgICB9XG59XG4iXX0=