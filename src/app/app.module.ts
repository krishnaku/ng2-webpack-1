import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {AppComponent, ChartDirective} from './app.component';
import {TableauComponent} from "./tableau.component";
import {RootComponent} from "./root.component";
import {LoginRoutingModule} from "./login-routing.module";
import {AppRoutingModule} from "./app.routing.module";
import {LoginComponent} from "./login.component";
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginRoutingModule
    ],
    declarations: [
        ChartDirective,
        AppComponent,
        TableauComponent,
        LoginComponent,
        RootComponent
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }