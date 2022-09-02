import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from './modules/carousel/carousel.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
