import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string = "Login";
  public section: string;

  public isOpen: boolean = true;
  public submitted: boolean = false;
  public registerForm: FormGroup;
  public loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param =>{
      if(param.directive !== 'sign_in' && param.directive !== 'sign_up'){
        this.router.navigate(['**']);
        return false;
      }

      this.section = param.directive;
    })

    this.registerForm = this.formbuilder.group({
      status: ['Seller', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeat_password: ['', [Validators.required]]
    });

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember_me: [false]
    }) 

    //DOM Manipulation
    let options = document.querySelector('#options');
    let selected = document.querySelector('#selected');
    let checkbox = document.querySelector('#options-view-button');

    options.addEventListener('click', (event: MouseEvent)=> {
      var element = event.target as HTMLElement;

      if (element.tagName === "INPUT") {
        let value = (<HTMLInputElement><unknown>element).value;
        (<HTMLElement>selected).innerHTML = value.toUpperCase();
        (<HTMLInputElement><unknown>checkbox).checked = false;
        this.isOpen = value == 'Seller' ? true : false;
      }

    });
  }

  get formControl(): any {
    return this.registerForm.controls;
  }

  
  get formControl2() : any {
    return this.loginForm.controls;
  }
  

  onSubmit(): any {
    this.submitted = true;
    if(this.registerForm.value.password !== this.registerForm.value.repeat_password){
      return false;
    }

    if(this.registerForm.invalid){
      return false;
    }

    alert(JSON.stringify(this.registerForm.value)); 

  }

  onLogin(): any {
    this.submitted = true;
    if(this.loginForm.invalid){
      return false;
    }

    this.router.navigateByUrl(this.route.snapshot.queryParams.redirectUrl);

    // alert(JSON.stringify(this.loginForm.value));
    
  }

}
