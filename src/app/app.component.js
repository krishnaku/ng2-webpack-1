"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('../../public/css/styles.css');
var Renderer = require('./chart-renderer');
var ChartDirective = (function () {
    function ChartDirective(el) {
        console.log("Constructing Directive");
        console.log(el.nativeElement);
        this.root = el.nativeElement;
    }
    ChartDirective = __decorate([
        core_1.Directive({ selector: 'chart' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChartDirective);
    return ChartDirective;
}());
exports.ChartDirective = ChartDirective;
var AppComponent = (function () {
    function AppComponent(el) {
        this.el = el;
        console.log("Constructing component");
        console.log(el.nativeElement);
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("building chart..");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        Renderer.basic_chart(this.chart_root.root);
    };
    __decorate([
        core_1.ViewChild(ChartDirective), 
        __metadata('design:type', ChartDirective)
    ], AppComponent.prototype, "chart_root", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map