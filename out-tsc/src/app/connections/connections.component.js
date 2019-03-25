import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ConnectionsComponent = /** @class */ (function () {
    function ConnectionsComponent() {
        this.isPatching = false;
    }
    ConnectionsComponent.prototype.ngAfterViewInit = function () {
        this.pt = this.MoveBackground.createSVGPoint();
    };
    ConnectionsComponent.prototype.startPatch = function (el, e) {
        this.pt.x = e.clientX;
        this.pt.y = e.clientY;
        this.startX = this.pt.matrixTransform(this.MoveBackground.getScreenCTM().inverse()).x;
        this.startY = this.pt.matrixTransform(this.MoveBackground.getScreenCTM().inverse()).y;
        this.moveX = this.startX;
        this.moveY = this.startY;
        this.isPatching = true;
    };
    ConnectionsComponent.prototype.movePatch = function (mm) {
        this.pt.x = mm.clientX;
        this.pt.y = mm.clientY;
        this.moveX = this.pt.matrixTransform(this.MoveBackground.getScreenCTM().inverse()).x;
        this.moveY = this.pt.matrixTransform(this.MoveBackground.getScreenCTM().inverse()).y;
    };
    ConnectionsComponent.prototype.endPatch = function () {
        this.isPatching = false;
    };
    Object.defineProperty(ConnectionsComponent.prototype, "cX1", {
        get: function () {
            return this.startX; // - window.scrollX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionsComponent.prototype, "cY1", {
        get: function () {
            return this.startY; // - window.scrollY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionsComponent.prototype, "cX2", {
        get: function () {
            return this.moveX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionsComponent.prototype, "cY2", {
        get: function () {
            return this.moveY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionsComponent.prototype, "path", {
        get: function () {
            var x1 = this.startX; // - window.scrollX;
            var y1 = this.startY; // - window.scrollY;
            var pX = (y1 < this.moveY) ? x1 : this.moveX;
            var pY = (y1 < this.moveY) ? this.moveY : y1;
            return "M " + x1 + " " + y1 + " Q " + pX + " " + pY + ", " + this.moveX + " " + this.moveY;
        },
        enumerable: true,
        configurable: true
    });
    ConnectionsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ConnectionsComponent.prototype, "MoveBackground", void 0);
    ConnectionsComponent = tslib_1.__decorate([
        Component({
            selector: '[app-connections]',
            templateUrl: './connections.component.html',
            styleUrls: ['./connections.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());
export { ConnectionsComponent };
//# sourceMappingURL=connections.component.js.map