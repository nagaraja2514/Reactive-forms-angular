import { BrowserModule } from '@angular/platform-browser';
import { Component, ComponentFactory, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ColorsComponent } from './colors/colors.component';

const routes : Routes = [
  {
    path:"home",
    component:HomeComponent

  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"singup",
    component: SingupComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
