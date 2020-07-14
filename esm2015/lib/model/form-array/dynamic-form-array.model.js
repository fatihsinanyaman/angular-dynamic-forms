import { __decorate, __metadata } from "tslib";
import { DynamicFormControlModel } from "../dynamic-form-control.model";
import { serializable, serialize } from "../../decorator/serializable.decorator";
import { isFunction, isNumber } from "../../utils/core.utils";
export class DynamicFormArrayGroupModel {
    constructor(context, group = [], index = -1) {
        this.$implicit = this;
        this.context = context;
        this.group = group;
        this.index = index;
    }
    get parent() {
        return this.context;
    }
    get(index) {
        return this.group[index];
    }
    toJSON() {
        return serialize(this);
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayGroupModel.prototype, "group", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormArrayGroupModel.prototype, "index", void 0);
export const DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
export class DynamicFormArrayModel extends DynamicFormControlModel {
    constructor(config, layout) {
        var _a, _b;
        super(config, layout);
        this.groups = [];
        this.type = DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
        if (isFunction(config.groupFactory)) {
            this.groupFactory = config.groupFactory;
        }
        else {
            throw new Error("group factory function must be specified for DynamicFormArrayModel");
        }
        this.groupAsyncValidators = (_a = config.groupAsyncValidators) !== null && _a !== void 0 ? _a : null;
        this.groupPrototype = this.groupFactory();
        this.groupValidators = (_b = config.groupValidators) !== null && _b !== void 0 ? _b : null;
        this.initialCount = isNumber(config.initialCount) ? config.initialCount : 1;
        if (Array.isArray(config.groups)) {
            config.groups.forEach((arrayGroup, index) => {
                var _a;
                this.groups.push(new DynamicFormArrayGroupModel(this, arrayGroup.group, (_a = arrayGroup.index) !== null && _a !== void 0 ? _a : index));
            });
        }
        else {
            for (let index = 0; index < this.initialCount; index++) {
                this.addGroup();
            }
        }
    }
    updateGroupIndex() {
        this.groups.forEach((group, index) => group.index = index);
    }
    get size() {
        return this.groups.length;
    }
    get(index) {
        return this.groups[index];
    }
    addGroup() {
        return this.insertGroup(this.groups.length);
    }
    insertGroup(index) {
        let group = new DynamicFormArrayGroupModel(this, this.groupFactory());
        this.groups.splice(index, 0, group);
        this.updateGroupIndex();
        return group;
    }
    moveGroup(index, step) {
        this.groups.splice(index + step, 0, ...this.groups.splice(index, 1));
        this.updateGroupIndex();
    }
    removeGroup(index) {
        this.groups.splice(index, 1);
        this.updateGroupIndex();
    }
    clear() {
        this.groups.splice(0);
        this.updateGroupIndex();
    }
}
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormArrayModel.prototype, "groupAsyncValidators", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Object)
], DynamicFormArrayModel.prototype, "groupValidators", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayModel.prototype, "groups", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Number)
], DynamicFormArrayModel.prototype, "initialCount", void 0);
__decorate([
    serializable(),
    __metadata("design:type", Array)
], DynamicFormArrayModel.prototype, "groupPrototype", void 0);
__decorate([
    serializable(),
    __metadata("design:type", String)
], DynamicFormArrayModel.prototype, "type", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWFycmF5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9mb3JtLWFycmF5L2R5bmFtaWMtZm9ybS1hcnJheS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFpQyxNQUFNLCtCQUErQixDQUFDO0FBS3ZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxNQUFNLE9BQU8sMEJBQTBCO0lBT25DLFlBQVksT0FBOEIsRUFBRSxRQUEwQixFQUFFLEVBQUUsUUFBZ0IsQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBdEJtQjtJQUFmLFlBQVksRUFBRTs7eURBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFOzt5REFBZTtBQXVCbEMsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQUcsT0FBTyxDQUFDO0FBV3ZELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx1QkFBdUI7SUFXOUQs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QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBaEZtQjtJQUFmLFlBQVksRUFBRTs7bUVBQXNEO0FBRXJEO0lBQWYsWUFBWSxFQUFFOzs4REFBaUQ7QUFDaEQ7SUFBZixZQUFZLEVBQUU7O3FEQUEyQztBQUMxQztJQUFmLFlBQVksRUFBRTs7MkRBQXNCO0FBRXJCO0lBQWYsWUFBWSxFQUFFOzs2REFBMkM7QUFDMUM7SUFBZixZQUFZLEVBQUU7O21EQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsLCBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbENvbmZpZyB9IGZyb20gXCIuLi9keW5hbWljLWZvcm0tY29udHJvbC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Nb2RlbCB9IGZyb20gXCIuLi9keW5hbWljLWZvcm0ubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbExheW91dCB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLWxheW91dC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY1BhdGhhYmxlIH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtcGF0aC5tb2RlbFwiO1xuaW1wb3J0IHsgRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC12YWxpZGF0aW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBzZXJpYWxpemFibGUsIHNlcmlhbGl6ZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3Ivc2VyaWFsaXphYmxlLmRlY29yYXRvclwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNOdW1iZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwgaW1wbGVtZW50cyBEeW5hbWljUGF0aGFibGUge1xuXG4gICAgJGltcGxpY2l0OiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbDtcbiAgICBjb250ZXh0OiBEeW5hbWljRm9ybUFycmF5TW9kZWw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGdyb3VwOiBEeW5hbWljRm9ybU1vZGVsO1xuICAgIEBzZXJpYWxpemFibGUoKSBpbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogRHluYW1pY0Zvcm1BcnJheU1vZGVsLCBncm91cDogRHluYW1pY0Zvcm1Nb2RlbCA9IFtdLCBpbmRleDogbnVtYmVyID0gLTEpIHtcblxuICAgICAgICB0aGlzLiRpbXBsaWNpdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIGdldCBwYXJlbnQoKTogRHluYW1pY0Zvcm1BcnJheU1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICB9XG5cbiAgICBnZXQoaW5kZXg6IG51bWJlcik6IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBbaW5kZXhdO1xuICAgIH1cblxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZSh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZID0gXCJBUlJBWVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNGb3JtQXJyYXlNb2RlbENvbmZpZyBleHRlbmRzIER5bmFtaWNGb3JtQ29udHJvbE1vZGVsQ29uZmlnIHtcblxuICAgIGdyb3VwQXN5bmNWYWxpZGF0b3JzPzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWc7XG4gICAgZ3JvdXBGYWN0b3J5PzogKCkgPT4gRHluYW1pY0Zvcm1Nb2RlbDtcbiAgICBncm91cFZhbGlkYXRvcnM/OiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZztcbiAgICBncm91cHM/OiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbFtdIHwgbnVsbDtcbiAgICBpbml0aWFsQ291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUFycmF5TW9kZWwgZXh0ZW5kcyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgZ3JvdXBBc3luY1ZhbGlkYXRvcnM6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbDtcbiAgICBncm91cEZhY3Rvcnk6ICgpID0+IER5bmFtaWNGb3JtTW9kZWw7XG4gICAgQHNlcmlhbGl6YWJsZSgpIGdyb3VwVmFsaWRhdG9yczogRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfCBudWxsO1xuICAgIEBzZXJpYWxpemFibGUoKSBncm91cHM6IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsW10gPSBbXTtcbiAgICBAc2VyaWFsaXphYmxlKCkgaW5pdGlhbENvdW50OiBudW1iZXI7XG5cbiAgICBAc2VyaWFsaXphYmxlKCkgcmVhZG9ubHkgZ3JvdXBQcm90b3R5cGU6IER5bmFtaWNGb3JtTW9kZWw7IC8vIG9ubHkgdG8gcmVjcmVhdGUgbW9kZWwgZnJvbSBKU09OXG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRvbmx5IHR5cGU6IHN0cmluZyA9IERZTkFNSUNfRk9STV9DT05UUk9MX1RZUEVfQVJSQVk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IER5bmFtaWNGb3JtQXJyYXlNb2RlbENvbmZpZywgbGF5b3V0PzogRHluYW1pY0Zvcm1Db250cm9sTGF5b3V0KSB7XG5cbiAgICAgICAgc3VwZXIoY29uZmlnLCBsYXlvdXQpO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGNvbmZpZy5ncm91cEZhY3RvcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwRmFjdG9yeSA9IGNvbmZpZy5ncm91cEZhY3Rvcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJncm91cCBmYWN0b3J5IGZ1bmN0aW9uIG11c3QgYmUgc3BlY2lmaWVkIGZvciBEeW5hbWljRm9ybUFycmF5TW9kZWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyb3VwQXN5bmNWYWxpZGF0b3JzID0gY29uZmlnLmdyb3VwQXN5bmNWYWxpZGF0b3JzID8/IG51bGw7XG4gICAgICAgIHRoaXMuZ3JvdXBQcm90b3R5cGUgPSB0aGlzLmdyb3VwRmFjdG9yeSgpO1xuICAgICAgICB0aGlzLmdyb3VwVmFsaWRhdG9ycyA9IGNvbmZpZy5ncm91cFZhbGlkYXRvcnMgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0aWFsQ291bnQgPSBpc051bWJlcihjb25maWcuaW5pdGlhbENvdW50KSA/IGNvbmZpZy5pbml0aWFsQ291bnQgOiAxO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5ncm91cHMpKSB7XG5cbiAgICAgICAgICAgIGNvbmZpZy5ncm91cHMuZm9yRWFjaCgoYXJyYXlHcm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKG5ldyBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCh0aGlzLCBhcnJheUdyb3VwLmdyb3VwLCBhcnJheUdyb3VwLmluZGV4ID8/IGluZGV4KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbml0aWFsQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEdyb3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUdyb3VwSW5kZXgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwLCBpbmRleCkgPT4gZ3JvdXAuaW5kZXggPSBpbmRleCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQoaW5kZXg6IG51bWJlcik6IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzW2luZGV4XTtcbiAgICB9XG5cbiAgICBhZGRHcm91cCgpOiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEdyb3VwKHRoaXMuZ3JvdXBzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgaW5zZXJ0R3JvdXAoaW5kZXg6IG51bWJlcik6IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsIHtcblxuICAgICAgICBsZXQgZ3JvdXAgPSBuZXcgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwodGhpcywgdGhpcy5ncm91cEZhY3RvcnkoKSk7XG5cbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAwLCBncm91cCk7XG4gICAgICAgIHRoaXMudXBkYXRlR3JvdXBJbmRleCgpO1xuXG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICBtb3ZlR3JvdXAoaW5kZXg6IG51bWJlciwgc3RlcDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4ICsgc3RlcCwgMCwgLi4udGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlR3JvdXBJbmRleCgpO1xuICAgIH1cblxuICAgIHJlbW92ZUdyb3VwKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyb3VwSW5kZXgoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyb3VwSW5kZXgoKTtcbiAgICB9XG59XG4iXX0=