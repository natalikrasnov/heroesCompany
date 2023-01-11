import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  welcomeTitle = "Welcome Back!";

  constructor(private authService: AuthService){}

  onSubmit(form: FormGroup) {
    console.log("submit from login", form)
    const userName = form.get('username')?.value
    const password = form.get('password')?.value
    this.authService.login(userName, password).subscribe({
      error: (error: Error) => {
        console.log(error)
        alert(error)
      }
    })
  }
  
}
