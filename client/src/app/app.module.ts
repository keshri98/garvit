import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CatererComponent } from './caterer/caterer.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    CatererComponent,
    DecoratorComponent,
    EntertainmentComponent,
    PortfolioComponent,
    ContactComponent,
    ViewComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
