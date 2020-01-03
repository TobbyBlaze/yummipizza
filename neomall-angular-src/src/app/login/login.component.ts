import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string = "Login/Sign-up";
  public isOpen: boolean = true;
  public oneAtatime: boolean = true;
  public registerForm: FormGroup;
  public loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeat_password: ['', [Validators.required]]
    });

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember_me: ['']
    }) 
  }

  get formControl(): any {
    return this.registerForm.controls;
  }

  
  get formControl2() : any {
    return this.loginForm.controls;
  }
  

  onSubmit(): any {
    if(this.registerForm.value.password !== this.registerForm.value.repeat_password){
      return false;
    }

    if(this.registerForm.invalid){
      return false;
    }

    alert(JSON.stringify(this.registerForm.value));

  }

  onLogin(): any {
    if(this.loginForm.invalid){
      return false;
    }

    alert(JSON.stringify(this.loginForm.value));
    
  }

}
