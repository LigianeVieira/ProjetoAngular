import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AnimalComponent } from './features/animal/animal.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
