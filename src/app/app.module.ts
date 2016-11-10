import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {AppComponent, ChartDirective} from './app.component';
import {TableauComponent} from "./tableau.component";
import {RootComponent} from "./root.component";
import {AppRoutingModule} from "./app.routing.module";
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {ConfigurationService} from "./services/configuration.service";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthenticationModule
    ],
    declarations: [
        ChartDirective,
        AppComponent,
        TableauComponent,
        RootComponent
    ],
    providers: [
        ConfigurationService
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }