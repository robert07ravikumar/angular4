import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { SampleDirectiveComponent } from './sample-directive/sample-directive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlueColoredDirective } from './blue-colored.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';

const appRoutes: Routes = [{
  path:'testroute/:userName',
  component : TestRouteComponent
},{
  path : 'sampledirective',
  component : SampleDirectiveComponent
},{
  path : 'hostlistener',
  component : HostListenerComponent
},{
  path : '**',
  component : PageNotFoundComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ServerComponent,
    ServersComponent,
    TestRouteComponent,
    SampleDirectiveComponent,
    PageNotFoundComponent,
    BlueColoredDirective,
    HostListenerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
