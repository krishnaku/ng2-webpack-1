import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AuthGuard }      from '../../services/auth-guard.service';
import { AuthService }    from '../../services/auth.service';
import { LoginComponent } from './login.component';
import {LogoutComponent} from "./logout.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent}
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthenticationRoutingModule {}