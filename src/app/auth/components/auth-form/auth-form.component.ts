import { Component, Input, Output, EventEmitter , OnInit} from '@angular/core';
import { FormGroup, FormBuilder , Validators,FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit{
 
  @Input('title') title!: string;
  @Input('elementInputsNames') elementInputsNames!: any ;
  @Input('elementInputs') elementInputs!:FormControl<string | null>[] ;

  @Output() onSubmitEvent = new EventEmitter<FormGroup>();
  
  errorMessage: string = ''
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder){}
 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control(
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/)
        ]
      ),
      userInputs: this.formBuilder.array(this.elementInputs || [])
    })
  }

  elementInputsNamesLabels(index: number): string{
    return Object.keys(this.elementInputsNames)[index]
  }

  getElementInputDataByIndex(index: number): any{
    return (<any> Object.values(this.elementInputsNames)[index])
  }

  getElementInputTypeByIndex(index: number): any{
    return this.getElementInputDataByIndex(index).divType
  }

  get userInputs(): FormArray{
    return this.form.get('userInputs') as FormArray
  }

  onInput() {
    if (this.form.get('password')?.touched && !this.form.get('password')?.valid)
      this.errorMessage = "password invalid. must be minimum 8 digits ,1special char, 1big latter"
    else this.errorMessage = ''
  }

  onSubmit() {
    console.log("submit authForm")
    this.onSubmitEvent.emit(this.form)
  }

}

