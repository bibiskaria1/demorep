import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewregComponent } from './newreg/newreg.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,

    ContactComponent,
    HomeComponent,
    NavigationComponent,
    NewregComponent,
    SignupComponent,
    DisplayComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
