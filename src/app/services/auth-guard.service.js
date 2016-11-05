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
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log("AuthGuard#canActivate Called");
        var url = state.url;
        return this.checkLogin(url, route, state);
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.authService.isLoggedIn;
    };
    AuthGuard.prototype.checkLogin = function (url, route, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            var auth_code = route.queryParams['auth_code'];
            if (auth_code && this.authService.verify_auth_code(auth_code)) {
                var url_1 = this.router.parseUrl(state.url);
                delete url_1.queryParams['auth_code'];
                this.router.navigate([url_1.toString()]);
                return true;
            }
            else {
                this.authService.redirectUrl = url;
                var sessionId = 1234567;
                var navigationExtras = {
                    queryParams: { session_id: sessionId },
                    fragment: 'anchor'
                };
                this.router.navigate(['/login'], navigationExtras);
                return false;
            }
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map