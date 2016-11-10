import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./services/auth-guard.service";
import {AppComponent} from "./app.component";
import {TableauComponent} from "./tableau.component";



@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'tableau',
            component: TableauComponent
          },
          {
            path: ''
          }
        ]
      },


    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
