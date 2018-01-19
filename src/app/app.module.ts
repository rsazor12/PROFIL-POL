import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap';
import { SliderComponent } from './start/slider/slider.component';
import { JumbotronComponent } from './start/jumbotron/jumbotron.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StartPageInformerComponent } from './start/start-page-informer/start-page-informer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    JumbotronComponent,
    NavbarComponent,
    StartPageInformerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
