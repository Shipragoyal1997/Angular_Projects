import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string
  password:string
  msg:string
  //code to validate users
  validateUserDetails(uname:string,pwd:string){
    let users=[
      {uname:'kiran',pwd:'kiran'},
      {uname:'mathew',pwd:'mathew'},
      {uname:'sathish',pwd:'sathish'},
      {uname:'shiva',pwd:'shiva'}
    ];

    let status:boolean=false;
    for(let i=0;i<users.length;i++){
      if(users[i].uname==uname && users[i].pwd==pwd){
        status=true;
        break;
      }
    }
    return status;
  }
  constructor(private _router:Router) { }
  authenticateDetails(){
    if(this.validateUserDetails(this.uname,this.password)){
      localStorage.setItem('uname',this.uname);
      this._router.navigate(['../dashboard']);
    }
    else
    this.msg="Invalid Input Credentials!";
  }

  ngOnInit() {
  }

}
