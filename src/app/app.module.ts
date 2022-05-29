import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DeploymentComponent} from './Deployment/deployment.component';
import { LoginComponent } from './Login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './Routes/app.routes';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, DeploymentComponent,LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(AppRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
