import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { fromEvent } from "rxjs";
import { tap } from 'rxjs/internal/operators';
import { mergeMap, startWith, takeUntil, take } from 'rxjs/operators';
var MoveobjComponent = /** @class */ (function () {
    function MoveobjComponent() {
        this.offset = { x: 0, y: 0 };
        this.cursorPt = { x: 55, y: 50 };
    }
    MoveobjComponent.prototype.ngOnInit = function () {
    };
    MoveobjComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.pt = this.MoveBackground.createSVGPoint();
        var down = fromEvent(this.Moveobj.nativeElement, 'mousedown')
            .pipe(tap(function (md) { return md.preventDefault(); }));
        var move = fromEvent(document, 'mousemove')
            .pipe(tap(function (mm) { return mm.preventDefault(); }));
        var up = fromEvent(document, 'mouseup')
            .pipe(tap(function (mu) { return mu.preventDefault(); }));
        var drag = down.pipe(mergeMap(function (md) {
            return move.pipe(startWith(md), takeUntil(up.pipe(take(1))));
        }));
        this.handle2 = down
            .subscribe(function (md) {
            _this.pt.x = md.clientX;
            _this.pt.y = md.clientY;
            _this.offset.x = _this.pt.matrixTransform(_this.MoveBackground.getScreenCTM().inverse()).x - _this.cursorPt.x;
            _this.offset.y = _this.pt.matrixTransform(_this.MoveBackground.getScreenCTM().inverse()).y - _this.cursorPt.y;
        });
        this.handle = drag
            .subscribe(function (md) {
            _this.pt.x = md.clientX;
            _this.pt.y = md.clientY;
            _this.cursorPt.x = _this.pt.matrixTransform(_this.MoveBackground.getScreenCTM().inverse()).x - _this.offset.x;
            _this.cursorPt.y = _this.pt.matrixTransform(_this.MoveBackground.getScreenCTM().inverse()).y - _this.offset.y;
        });
    };
    MoveobjComponent.prototype.ngOnDestroy = function () {
        this.handle.unsubscribe();
        this.handle2.unsubscribe();
    };
    tslib_1.__decorate([
        ViewChild('Moveobj'),
        tslib_1.__metadata("design:type", ElementRef)
    ], MoveobjComponent.prototype, "Moveobj", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MoveobjComponent.prototype, "MoveBackground", void 0);
    MoveobjComponent = tslib_1.__decorate([
        Component({
            selector: '[app-moveobj]',
            templateUrl: './moveobj.component.html',
            styleUrls: ['./moveobj.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MoveobjComponent);
    return MoveobjComponent;
}());
export { MoveobjComponent };
//# sourceMappingURL=moveobj.component.js.map