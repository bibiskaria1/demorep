import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { NewregComponent } from './newreg/newreg.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent },
{path:'new',component:NewregComponent},
{path:'display',component:DisplayComponent},
{path:'signup',component:SignupComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
