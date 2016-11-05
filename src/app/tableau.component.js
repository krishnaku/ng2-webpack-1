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
var core_1 = require("@angular/core");
var TableauComponent = (function () {
    function TableauComponent() {
    }
    TableauComponent = __decorate([
        core_1.Component({
            template: "\n        <div class='tableauPlaceholder' style='width: 1567px; height: 792px;'>\n            <object class='tableauViz' width='1567' height='792' style='display:none;'>\n                <param name='host_url' value='https%3A%2F%2F10az.online.tableau.com%2F'/>\n                <param name='site_root' value='&#47;t&#47;exathinkdev'/>\n                <param name='name' value='discourse-public&#47;CommitGantt'/>\n                <param name='tabs' value='false'/>\n                <param name='toolbar' value='false'/>\n                <param name='showShareOptions' value='false'/>\n            </object>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TableauComponent);
    return TableauComponent;
}());
exports.TableauComponent = TableauComponent;
//# sourceMappingURL=tableau.component.js.map