import { Component, AfterViewInit }   from '@angular/core';
import {Router, NavigationExtras}      from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {ConfigurationService} from "../../services/configuration.service";

@Component({
    template: `
      <form id='login-form' action="{{ authServiceUrl }}/?sso" method="post">
          <input type="hidden" name="resource" value="{{targetResource}}"/>
      </form>
    `
})
export class LoginComponent implements AfterViewInit {
    message: string;
    targetResource: string;
    authServiceUrl: string;

    constructor(public configService: ConfigurationService, public authService: AuthService, public router: Router) {
        this.setMessage();
        this.targetResource = authService.redirectUrl;
        this.authServiceUrl = configService.authentication_service_url;
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }


    ngAfterViewInit(): void {
        let loginForm : HTMLFormElement = document.getElementById('login-form') as HTMLFormElement;
        loginForm.submit();
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
