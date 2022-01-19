import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { CatsModule } from './features/cats/cats.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';





@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    CoreModule,
    CatsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
