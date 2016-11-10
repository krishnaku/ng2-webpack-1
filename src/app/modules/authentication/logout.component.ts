import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {ConfigurationService} from "../../services/configuration.service";
@Component({
    selector: 'logout',
    template: `
      <form *ngIf="loggedIn" id='logout-form' action="{{authServiceUrl}}/?slo" method="post">
          <input type="hidden" name="resource" value="{{redirectUrl}}"/>
          <input type="submit" value="Logout">
      </form>
      <div *ngIf="!loggedIn">
        <h1>You are logged out</h1>
        <form id='login-form' action="{{authServiceUrl}}/?sso" method="post">
          <input type="hidden" name="resource" value="{{redirectUrl}}"/>
          <input type="submit" value="Login"/>
      </form>
      </div>
    `
})
export class LogoutComponent {

    loggedIn: boolean;
    redirectUrl: string;
    authServiceUrl: string;

    constructor(configService: ConfigurationService, authService: AuthService){
        this.loggedIn = authService.isLoggedIn;
        this.authServiceUrl = configService.authentication_service_url;

        if (authService.isLoggedIn) {
            this.redirectUrl = `${window.location.origin}/logout`;
        } else {
            this.redirectUrl = `${window.location.origin}`;
        }


    }
}