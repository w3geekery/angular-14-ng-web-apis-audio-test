import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebAudioModule } from '@ng-web-apis/audio';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebAudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
