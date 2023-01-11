import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthFormComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
