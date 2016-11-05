import {Injectable} from "@angular/core";
import {
  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,
  NavigationExtras, CanLoad, Route, UrlTree
} from "@angular/router";
import {AuthService} from "./auth.service";



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("AuthGuard#canActivate Called");
    let url: string = state.url;

    return this.checkLogin(url, route, state);
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }


  canLoad(route: Route): boolean {
    return this.authService.isLoggedIn;
  }

  checkLogin(url: string, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      let auth_code = route.queryParams['auth_code'];
      if (auth_code && this.authService.verify_auth_code(auth_code)) {
        let url: UrlTree = this.router.parseUrl(state.url);
        delete url.queryParams['auth_code'];
        this.router.navigate([url.toString()]);
        return true;
      } else {
        this.authService.redirectUrl = url;

        let sessionId = 1234567;

        let navigationExtras: NavigationExtras = {
          queryParams: {session_id: sessionId},
          fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);
        return false;
      }
    }
  }
}
