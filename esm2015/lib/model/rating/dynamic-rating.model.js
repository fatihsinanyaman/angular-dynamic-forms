import { __decorate, __metadata } from "tslib";
import { DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isNumber } from "../../utils/core.utils";
export const DYNAMIC_FORM_CONTROL_TYPE_RATING = "RATING";
export class DynamicRatingModel extends DynamicFormValueControlModel {
    constructor(config, layout) {
        super(config, layout);
        this.type = DYNAMIC_FORM_CONTROL_TYPE_RATING;
        this.max = isNumber(config.max) ? config.max : 10;
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicRatingModel.prototype, "max", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicRatingModel.prototype, "type", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yYXRpbmcubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctZHluYW1pYy1mb3Jtcy9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3JhdGluZy9keW5hbWljLXJhdGluZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFzQyw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQsTUFBTSxDQUFDLE1BQU0sZ0NBQWdDLEdBQUcsUUFBUSxDQUFDO0FBT3pELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSw0QkFBb0M7SUFNeEUsWUFBWSxNQUFnQyxFQUFFLE1BQWlDO1FBRTNFLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFKRCxTQUFJLEdBQVcsZ0NBQWdDLENBQUM7UUFNckUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBVm1CO0lBQWYsWUFBWSxFQUFFOzsrQ0FBb0I7QUFFbkI7SUFBZixZQUFZLEVBQUU7O2dEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWxDb25maWcsIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWwgfSBmcm9tIFwiLi4vZHluYW1pYy1mb3JtLXZhbHVlLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9zZXJpYWxpemFibGUuZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCIuLi8uLi91dGlscy9jb3JlLnV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX1JBVElORyA9IFwiUkFUSU5HXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY1JhdGluZ01vZGVsQ29uZmlnIGV4dGVuZHMgRHluYW1pY0Zvcm1WYWx1ZUNvbnRyb2xNb2RlbENvbmZpZzxudW1iZXI+IHtcblxuICAgIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNSYXRpbmdNb2RlbCBleHRlbmRzIER5bmFtaWNGb3JtVmFsdWVDb250cm9sTW9kZWw8bnVtYmVyPiB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgbWF4OiBudW1iZXIgfCBudWxsO1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRvbmx5IHR5cGU6IHN0cmluZyA9IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfUkFUSU5HO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljUmF0aW5nTW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICB0aGlzLm1heCA9IGlzTnVtYmVyKGNvbmZpZy5tYXgpID8gY29uZmlnLm1heCA6IDEwO1xuICAgIH1cbn0iXX0=