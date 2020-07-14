import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from "@angular/core";
import { isString } from "../utils/core.utils";
var DynamicListDirective = /** @class */ (function () {
    function DynamicListDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    DynamicListDirective.prototype.ngAfterViewInit = function () {
        if (isString(this.listId)) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "list", this.listId);
        }
    };
    DynamicListDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input("dynamicList"),
        __metadata("design:type", String)
    ], DynamicListDirective.prototype, "listId", void 0);
    DynamicListDirective = __decorate([
        Directive({
            selector: "[dynamicList]"
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], DynamicListDirective);
    return DynamicListDirective;
}());
export { DynamicListDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2R5bmFtaWMtbGlzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUsvQztJQUlJLDhCQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQUUzRSw4Q0FBZSxHQUFmO1FBRUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1NBQzVGO0lBQ0wsQ0FBQzs7Z0JBUCtCLFVBQVU7Z0JBQW9CLFNBQVM7O0lBRmpEO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O3dEQUF1QjtJQUZuQyxvQkFBb0I7UUFIaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7U0FDNUIsQ0FBQzt5Q0FLa0MsVUFBVSxFQUFvQixTQUFTO09BSjlELG9CQUFvQixDQVloQztJQUFELDJCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2R5bmFtaWNMaXN0XVwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNMaXN0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoXCJkeW5hbWljTGlzdFwiKSBsaXN0SWQ6IHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5saXN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJsaXN0XCIsIHRoaXMubGlzdElkIGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG59Il19