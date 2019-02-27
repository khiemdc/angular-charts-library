import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TbgChartsModule } from 'charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TbgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
