import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  form!: FormControl<string | null>[]

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   
  }
  
  onSubmit(form: FormGroup) {
    console.log(form)
    debugger
    const username = form.get('username')?.value
    const password = form.get('password')?.value
    
    try {
      
      // this.authService.signup(username, password).subscribe({
      //   error: (error: Error) => alert(error.message)
      // })
          
      this.router.navigate(['/heroes'])

    } catch (error) {
      alert("input data is invalid: "+ error)
    }
    
  }      

}
