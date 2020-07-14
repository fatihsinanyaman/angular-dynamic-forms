import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
import { DynamicFormControlModel } from "../dynamic-form-control.model";
import { serializable, serialize } from "../../decorator/serializable.decorator";
import { isFunction, isNumber } from "../../utils/core.utils";
var DynamicFormArrayGroupModel = /** @class */ (function () {
    function DynamicFormArrayGroupModel(context, group, index) {
        if (group === void 0) { group = []; }
        if (index === void 0) { index = -1; }
        this.$implicit = this;
        this.context = context;
        this.group = group;
        this.index = index;
    }
    Object.defineProperty(DynamicFormArrayGroupModel.prototype, "parent", {
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormArrayGroupModel.prototype.get = function (index) {
        return this.group[index];
    };
    DynamicFormArrayGroupModel.prototype.toJSON = function () {
        return serialize(this);
    };
    __decorate([
        serializable(),
        __metadata("design:type", Array)
    ], DynamicFormArrayGroupModel.prototype, "group", void 0);
    __decorate([
        serializable(),
        __metadata("design:type", Number)
    ], DynamicFormArrayGroupModel.prototype, "index", void 0);
    return DynamicFormArrayGroupModel;
}());
export { DynamicFormArrayGroupModel };
export var DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
var DynamicFormArrayModel = /** @class */ (function (_super) {
    __extends(DynamicFormArrayModel, _super);
    function DynamicFormArrayModel(config, layout) {
        var _a, _b;
        var _this = _super.call(this, config, layout) || this;
        _this.groups = [];
        _this.type = DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
        if (isFunction(config.groupFactory)) {
            _this.groupFactory = config.groupFactory;
        }
        else {
            throw new Error("group factory function must be specified for DynamicFormArrayModel");
        }
        _this.groupAsyncValidators = (_a = config.groupAsyncValidators) !== null && _a !== void 0 ? _a : null;
        _this.groupPrototype = _this.groupFactory();
        _this.groupValidators = (_b = config.groupValidators) !== null && _b !== void 0 ? _b : null;
        _this.initialCount = isNumber(config.initialCount) ? config.initialCount : 1;
        if (Array.isArray(config.groups)) {
            config.groups.forEach(function (arrayGroup, index) {
                var _a;
                _this.groups.push(new DynamicFormArrayGroupModel(_this, arrayGroup.group, (_a = arrayGroup.index) !== null && _a !== void 0 ? _a : index));
            });
        }
        else {
            for (var index = 0; index < _this.initialCount; index++) {
                _this.addGroup();
            }
        }
        return _this;
    }
    DynamicFormArrayModel.prototype.updateGroupIndex = function () {
        this.groups.forEach(function (group, index) { return group.index = index; });
    };
    Object.defineProperty(DynamicFormArrayModel.prototype, "size", {
        get: function () {
            return this.groups.length;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormArrayModel.prototype.get = function (index) {
        return this.groups[index];
    };
    DynamicFormArrayModel.prototype.addGroup = function () {
        return this.insertGroup(this.groups.length);
    };
    DynamicFormArrayModel.prototype.insertGroup = function (index) {
        var group = new DynamicFormArrayGroupModel(this, this.groupFactory());
        this.groups.splice(index, 0, group);
        this.updateGroupIndex();
        return group;
    };
    DynamicFormArrayModel.prototype.moveGroup = function (index, step) {
        var _a;
        (_a = this.groups).splice.apply(_a, __spread([index + step, 0], this.groups.splice(index, 1)));
        this.updateGroupIndex();
    };
    DynamicFormArrayModel.prototype.removeGroup = function (index) {
        this.groups.splice(index, 1);
        this.updateGroupIndex();
    };
    DynamicFormArrayModel.prototype.clear = function () {
        this.groups.splice(0);
        this.updateGroupIndex();
    };
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
    return DynamicFormArrayModel;
}(DynamicFormControlModel));
export { DynamicFormArrayModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWFycmF5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9mb3JtLWFycmF5L2R5bmFtaWMtZm9ybS1hcnJheS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFpQyxNQUFNLCtCQUErQixDQUFDO0FBS3ZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RDtJQU9JLG9DQUFZLE9BQThCLEVBQUUsS0FBNEIsRUFBRSxLQUFrQjtRQUFoRCxzQkFBQSxFQUFBLFVBQTRCO1FBQUUsc0JBQUEsRUFBQSxTQUFpQixDQUFDO1FBRXhGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSw4Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsd0NBQUcsR0FBSCxVQUFJLEtBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDJDQUFNLEdBQU47UUFDSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBckJlO1FBQWYsWUFBWSxFQUFFOzs2REFBeUI7SUFDeEI7UUFBZixZQUFZLEVBQUU7OzZEQUFlO0lBcUJsQyxpQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLDBCQUEwQjtBQTRC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Q0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUU7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFhO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUEvRWU7UUFBZixZQUFZLEVBQUU7O3VFQUFzRDtJQUVyRDtRQUFmLFlBQVksRUFBRTs7a0VBQWlEO0lBQ2hEO1FBQWYsWUFBWSxFQUFFOzt5REFBMkM7SUFDMUM7UUFBZixZQUFZLEVBQUU7OytEQUFzQjtJQUVyQjtRQUFmLFlBQVksRUFBRTs7aUVBQTJDO0lBQzFDO1FBQWYsWUFBWSxFQUFFOzt1REFBeUQ7SUF5RTVFLDRCQUFDO0NBQUEsQUFsRkQsQ0FBMkMsdUJBQXVCLEdBa0ZqRTtTQWxGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCwgRHluYW1pY0Zvcm1Db250cm9sTW9kZWxDb25maWcgfSBmcm9tIFwiLi4vZHluYW1pYy1mb3JtLWNvbnRyb2wubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtTW9kZWwgfSBmcm9tIFwiLi4vZHluYW1pYy1mb3JtLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbnRyb2xMYXlvdXQgfSBmcm9tIFwiLi4vbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC1sYXlvdXQubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNQYXRoYWJsZSB9IGZyb20gXCIuLi9taXNjL2R5bmFtaWMtZm9ybS1jb250cm9sLXBhdGgubW9kZWxcIjtcbmltcG9ydCB7IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIH0gZnJvbSBcIi4uL21pc2MvZHluYW1pYy1mb3JtLWNvbnRyb2wtdmFsaWRhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgc2VyaWFsaXphYmxlLCBzZXJpYWxpemUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzTnVtYmVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsIGltcGxlbWVudHMgRHluYW1pY1BhdGhhYmxlIHtcblxuICAgICRpbXBsaWNpdDogRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWw7XG4gICAgY29udGV4dDogRHluYW1pY0Zvcm1BcnJheU1vZGVsO1xuICAgIEBzZXJpYWxpemFibGUoKSBncm91cDogRHluYW1pY0Zvcm1Nb2RlbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgaW5kZXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCwgZ3JvdXA6IER5bmFtaWNGb3JtTW9kZWwgPSBbXSwgaW5kZXg6IG51bWJlciA9IC0xKSB7XG5cbiAgICAgICAgdGhpcy4kaW1wbGljaXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBnZXQgcGFyZW50KCk6IER5bmFtaWNGb3JtQXJyYXlNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgfVxuXG4gICAgZ2V0KGluZGV4OiBudW1iZXIpOiBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwW2luZGV4XTtcbiAgICB9XG5cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemUodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19GT1JNX0NPTlRST0xfVFlQRV9BUlJBWSA9IFwiQVJSQVlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRm9ybUFycmF5TW9kZWxDb25maWcgZXh0ZW5kcyBEeW5hbWljRm9ybUNvbnRyb2xNb2RlbENvbmZpZyB7XG5cbiAgICBncm91cEFzeW5jVmFsaWRhdG9ycz86IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnO1xuICAgIGdyb3VwRmFjdG9yeT86ICgpID0+IER5bmFtaWNGb3JtTW9kZWw7XG4gICAgZ3JvdXBWYWxpZGF0b3JzPzogRHluYW1pY1ZhbGlkYXRvcnNDb25maWc7XG4gICAgZ3JvdXBzPzogRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWxbXSB8IG51bGw7XG4gICAgaW5pdGlhbENvdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1BcnJheU1vZGVsIGV4dGVuZHMgRHluYW1pY0Zvcm1Db250cm9sTW9kZWwge1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIGdyb3VwQXN5bmNWYWxpZGF0b3JzOiBEeW5hbWljVmFsaWRhdG9yc0NvbmZpZyB8IG51bGw7XG4gICAgZ3JvdXBGYWN0b3J5OiAoKSA9PiBEeW5hbWljRm9ybU1vZGVsO1xuICAgIEBzZXJpYWxpemFibGUoKSBncm91cFZhbGlkYXRvcnM6IER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnIHwgbnVsbDtcbiAgICBAc2VyaWFsaXphYmxlKCkgZ3JvdXBzOiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbFtdID0gW107XG4gICAgQHNlcmlhbGl6YWJsZSgpIGluaXRpYWxDb3VudDogbnVtYmVyO1xuXG4gICAgQHNlcmlhbGl6YWJsZSgpIHJlYWRvbmx5IGdyb3VwUHJvdG90eXBlOiBEeW5hbWljRm9ybU1vZGVsOyAvLyBvbmx5IHRvIHJlY3JlYXRlIG1vZGVsIGZyb20gSlNPTlxuICAgIEBzZXJpYWxpemFibGUoKSByZWFkb25seSB0eXBlOiBzdHJpbmcgPSBEWU5BTUlDX0ZPUk1fQ09OVFJPTF9UWVBFX0FSUkFZO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBEeW5hbWljRm9ybUFycmF5TW9kZWxDb25maWcsIGxheW91dD86IER5bmFtaWNGb3JtQ29udHJvbExheW91dCkge1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZywgbGF5b3V0KTtcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbihjb25maWcuZ3JvdXBGYWN0b3J5KSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEZhY3RvcnkgPSBjb25maWcuZ3JvdXBGYWN0b3J5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ3JvdXAgZmFjdG9yeSBmdW5jdGlvbiBtdXN0IGJlIHNwZWNpZmllZCBmb3IgRHluYW1pY0Zvcm1BcnJheU1vZGVsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncm91cEFzeW5jVmFsaWRhdG9ycyA9IGNvbmZpZy5ncm91cEFzeW5jVmFsaWRhdG9ycyA/PyBudWxsO1xuICAgICAgICB0aGlzLmdyb3VwUHJvdG90eXBlID0gdGhpcy5ncm91cEZhY3RvcnkoKTtcbiAgICAgICAgdGhpcy5ncm91cFZhbGlkYXRvcnMgPSBjb25maWcuZ3JvdXBWYWxpZGF0b3JzID8/IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdGlhbENvdW50ID0gaXNOdW1iZXIoY29uZmlnLmluaXRpYWxDb3VudCkgPyBjb25maWcuaW5pdGlhbENvdW50IDogMTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuZ3JvdXBzKSkge1xuXG4gICAgICAgICAgICBjb25maWcuZ3JvdXBzLmZvckVhY2goKGFycmF5R3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cHMucHVzaChuZXcgRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwodGhpcywgYXJyYXlHcm91cC5ncm91cCwgYXJyYXlHcm91cC5pbmRleCA/PyBpbmRleCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5pdGlhbENvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRHcm91cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVHcm91cEluZGV4KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cCwgaW5kZXgpID0+IGdyb3VwLmluZGV4ID0gaW5kZXgpO1xuICAgIH1cblxuICAgIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0KGluZGV4OiBudW1iZXIpOiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwc1tpbmRleF07XG4gICAgfVxuXG4gICAgYWRkR3JvdXAoKTogRHluYW1pY0Zvcm1BcnJheUdyb3VwTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRHcm91cCh0aGlzLmdyb3Vwcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIGluc2VydEdyb3VwKGluZGV4OiBudW1iZXIpOiBEeW5hbWljRm9ybUFycmF5R3JvdXBNb2RlbCB7XG5cbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IER5bmFtaWNGb3JtQXJyYXlHcm91cE1vZGVsKHRoaXMsIHRoaXMuZ3JvdXBGYWN0b3J5KCkpO1xuXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMCwgZ3JvdXApO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyb3VwSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuXG4gICAgbW92ZUdyb3VwKGluZGV4OiBudW1iZXIsIHN0ZXA6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCArIHN0ZXAsIDAsIC4uLnRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyb3VwSW5kZXgoKTtcbiAgICB9XG5cbiAgICByZW1vdmVHcm91cChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcm91cEluZGV4KCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZSgwKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcm91cEluZGV4KCk7XG4gICAgfVxufVxuIl19