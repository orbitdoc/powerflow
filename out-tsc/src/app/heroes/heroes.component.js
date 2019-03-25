import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.heroes = HEROES;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map