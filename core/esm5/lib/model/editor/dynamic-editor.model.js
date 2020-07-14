import { __decorate, __extends, __metadata } from "tslib";
import { DynamicInputControlModel } from "../dynamic-input-control.model";
import { serializable } from "../../decorator/serializable.decorator";
export var DYNAMIC_FORM_CONTROL_TYPE_EDITOR = "EDITOR";
var DynamicEditorModel = /** @class */ (function (_super) {
    __extends(DynamicEditorModel, _super);
    function DynamicEditorModel(config, layout) {
        var _this = _super.call(this, config, layout) || this;
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_EDITOR;
        return _this;
    }
    __decorate([
        serializable(),
        __metadata("design:type", String)
    ], DynamicEditorModel.prototype, "type", void 0);
    return DynamicEditorModel;
}(DynamicInputControlModel));
export { DynamicEditorModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1lZGl0b3IubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2VkaXRvci9keW5hbWljLWVkaXRvci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFrQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsSUFBTSxnQ0FBZ0MsR0FBRyxRQUFRLENBQUM7QUFLekQ7SUFBd0Msc0NBQWdDO0lBSXBFLDRCQUFZLE1BQWdDLEVBQUUsTUFBaUM7UUFBL0UsWUFFSSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQ3hCO1FBTHdCLFVBQUksR0FBVyxnQ0FBZ0MsQ0FBQzs7SUFLekUsQ0FBQztJQUxlO1FBQWYsWUFBWSxFQUFFOztvREFBMEQ7SUFNN0UseUJBQUM7Q0FBQSxBQVJELENBQXdDLHdCQUF3QixHQVEvRDtTQVJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNJbnB1dENvbnRyb2xNb2RlbCwgRHluYW1pY0lucHV0Q29udHJvbE1vZGVsQ29uZmlnIH0gZnJvbSBcIi4uL2R5bmFtaWMtaW5wdXQtY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0IH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtbGF5b3V0Lm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfRURJVE9SID0gXCJFRElUT1JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRWRpdG9yTW9kZWxDb25maWcgZXh0ZW5kcyBEeW5hbWljSW5wdXRDb250cm9sTW9kZWxDb25maWc8c3RyaW5nPiB7XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljRWRpdG9yTW9kZWwgZXh0ZW5kcyBEeW5hbWljSW5wdXRDb250cm9sTW9kZWw8c3RyaW5nPiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgdHlwZTogc3RyaW5nID0gRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9FRElUT1I7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNFZGl0b3JNb2RlbENvbmZpZywgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuICAgIH1cbn0iXX0=