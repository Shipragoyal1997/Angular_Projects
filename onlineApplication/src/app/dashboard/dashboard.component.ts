import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uname:string="";
  msg:string="";
  constructor(private _router:Router) {
    if(localStorage.getItem('uname').length > 0){
      this.uname = localStorage.getItem('uname');
      this.msg="Hello "+this.uname+" Welcome to Dashboard";
    }
   }

   testpage(){
     this._router.navigate(['../testquestion']);
   }
  ngOnInit() {
  }

}
