import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { ServerComponent } from './server/server.component';
import { Servers } from './servers/servers';
import { WarningAlertComponent } from './warning-alert/warning-alert';
import { SuccessAlertComponent } from './success-alert/success-alert';

@NgModule({
  declarations: [
    App,
    ServerComponent,
    Servers,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
