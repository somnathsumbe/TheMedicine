import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: string;
  userPassword: string;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userName: ["",Validators.required],
      userPassword: ["",Validators.required]
    });
  }

  ngOnInit(): void {}
  sendLoginFormData(loginForm: any) {
    this.loginForm = loginForm;
    this.userName = loginForm.controls.userName.value;
    this.userPassword = loginForm.controls.userPassword.value;
    console.log(this.userName);
    console.log(this.userPassword);
  }
}
