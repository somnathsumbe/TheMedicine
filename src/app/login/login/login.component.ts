import {
  Component,
  OnInit
} from "@angular/core";

import {
  LoginService
} from "src/app/services/login.service";
import {
  NgForm
} from '@angular/forms';
import { NgIf } from '@angular/common';

interface login {
  username: string;
  password: string
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
loginResponce:any;
  constructor(private _LoginService: LoginService) {}

  ngOnInit(): void {}

  loginUser(loginForm: NgForm) {
    this.loginResponce= this._LoginService.getLoginDetails(loginForm.value);
    this.loginResponce? alert("Login Successful"):alert("Invalid username/password");
    loginForm.reset();

    
  }


}
