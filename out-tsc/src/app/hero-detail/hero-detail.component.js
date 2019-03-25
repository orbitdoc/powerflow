import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-hero-detail',
            templateUrl: './hero-detail.component.html',
            styleUrls: ['./hero-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
export { HeroDetailComponent };
//# sourceMappingURL=hero-detail.component.js.map