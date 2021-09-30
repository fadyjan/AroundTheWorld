import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {UserApiService }from "../Services/UserApi/user-api.service"
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  constructor(private fb:FormBuilder ,private api: UserApiService,private router: Router) { }

  ngOnInit(): void {
  }

  userprofileForm = this.fb.group({
    UserName : ["" , Validators.required],
    Password : ["" ,Validators.required],
  })

  onSubmit(){
    const newUser = {
      Email: this.userprofileForm.value.UserName,
      Password: this.userprofileForm.value.Password,
    };
    console.log("NewUserData",newUser);
    this.api.userLogin(newUser).subscribe((res: any)=>{
      console.log(res);
      
      if (res.token) {
        console.log(res)
        localStorage.setItem("token",res["token"])
        this.router.navigateByUrl("AllCountries")
      }else{
        console.warn(res)
      }
      
    });
  }

}
