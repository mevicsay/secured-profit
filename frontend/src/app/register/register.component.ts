import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    cmail: new FormControl(null, [Validators.email, Validators.required])
  })
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit() {
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value) || (this.registerForm.controls.email.value != this.registerForm.controls.cmail.value)) {
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
    //console.log(JSON.stringify(this.registerForm.value));
  }
  clearForm(){
    this.registerForm.reset();
  }
}
