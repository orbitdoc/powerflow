import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { mergeMap, startWith, take, combineLatest, skipUntil } from 'rxjs/operators';
import { fromEvent } from "rxjs";
import { tap } from 'rxjs/internal/operators';
import { ConnectionsComponent } from "../connections/connections.component";
var PortsComponent = /** @class */ (function () {
    function PortsComponent() {
    }
    PortsComponent.prototype.ngOnInit = function () {
    };
    PortsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var down = fromEvent(this.porticon.nativeElement, 'mousedown')
            .pipe(tap(function (e) { return e.preventDefault(); }), tap(function (e) { return _this.connections.startPatch(_this.porticon, e); }));
        var up = fromEvent(document, 'mouseup')
            .pipe(tap(function (e) { return e.preventDefault(); }));
        var mouseMove = fromEvent(document, 'mousemove')
            .pipe(tap(function (e) { return e.stopPropagation(); }));
        var scrollWindow = fromEvent(document, 'scroll')
            .pipe(startWith({}));
        var move = combineLatest(mouseMove, scrollWindow);
        var drag = down.pipe(mergeMap(function (md) {
            return mouseMove.
                // // map(([mm, s]) => mm),
                pipe(tap(function (mm) {
                _this.connections.movePatch(mm);
                // // ,this.patches.resetSelection(),
                // // const target = this.patches.locateTarget(mm),
                // // if (target) {
                // // target.isSelected = true;
                // //}
            }), skipUntil(up.pipe(take(1), tap(function () { return _this.connections.endPatch(); }))), take(1));
        }));
        this.draggable = drag.subscribe(function (e) {
            // const target = this.patches.locateTarget(e);
            // if (target && this.patches.notConnected(this, target)) {
            // this.patches.connect(this, target);
            // this.signal.connect(target.signal);
            // }
            // this.patches.resetSelection();
        });
    };
    ;
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PortsComponent.prototype, "offset", void 0);
    tslib_1.__decorate([
        ViewChild('porticon'),
        tslib_1.__metadata("design:type", ElementRef)
    ], PortsComponent.prototype, "porticon", void 0);
    tslib_1.__decorate([
        ViewChild('connections'),
        tslib_1.__metadata("design:type", ConnectionsComponent)
    ], PortsComponent.prototype, "connections", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PortsComponent.prototype, "MoveBackground", void 0);
    PortsComponent = tslib_1.__decorate([
        Component({
            selector: '[app-ports]',
            templateUrl: './ports.component.html',
            styleUrls: ['./ports.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PortsComponent);
    return PortsComponent;
}());
export { PortsComponent };
//# sourceMappingURL=ports.component.js.map