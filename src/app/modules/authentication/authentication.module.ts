import {NgModule} from "@angular/core";
import {LoginComponent} from './login.component';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LogoutComponent} from "./logout.component";
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    exports: [
        LogoutComponent,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationModule{}
