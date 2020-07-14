import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from "@angular/core";
import { isString } from "../utils/core.utils";
let DynamicListDirective = class DynamicListDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        if (isString(this.listId)) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "list", this.listId);
        }
    }
};
DynamicListDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { DynamicListDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2R5bmFtaWMtbGlzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUsvQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUk3QixZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQUUzRSxlQUFlO1FBRVgsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1NBQzVGO0lBQ0wsQ0FBQztDQUNKLENBQUE7O1lBUm1DLFVBQVU7WUFBb0IsU0FBUzs7QUFGakQ7SUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7b0RBQXVCO0FBRm5DLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtLQUM1QixDQUFDO3FDQUtrQyxVQUFVLEVBQW9CLFNBQVM7R0FKOUQsb0JBQW9CLENBWWhDO1NBWlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2NvcmUudXRpbHNcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2R5bmFtaWNMaXN0XVwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNMaXN0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoXCJkeW5hbWljTGlzdFwiKSBsaXN0SWQ6IHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5saXN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJsaXN0XCIsIHRoaXMubGlzdElkIGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG59Il19