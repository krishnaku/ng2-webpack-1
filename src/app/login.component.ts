import { Component }   from '@angular/core';
import {Router, NavigationExtras}      from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
    template: `
      <form id='login-form' action="http://192.168.99.100:8000/?sso" method="post">
          <input type="hidden" name="resource" value="{{targetResource}}"/>
          <button type="submit">Login</button>
      </form>
    `
})
export class LoginComponent {
    message: string;
    targetResource: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
        this.targetResource = authService.redirectUrl || router.url;
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }



    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                // Redirect the user
                this.router.navigate([redirect], navigationExtras);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
