import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MoveobjComponent } from './moveobj/moveobj.component';
import { VisualRegionComponent } from './visual-region/visual-region.component';
import { PortsComponent } from './ports/ports.component';
import { ConnectionsComponent } from './connections/connections.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeroesComponent,
                HeroDetailComponent,
                MoveobjComponent,
                VisualRegionComponent,
                PortsComponent,
                ConnectionsComponent
            ],
            imports: [
                BrowserModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map