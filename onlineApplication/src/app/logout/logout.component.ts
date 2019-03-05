import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  uname:string
  msg:string
  constructor() {
    if(localStorage.getItem('uname').length > 0){
      this.uname = localStorage.getItem('uname');
      this.msg = this.uname+' ,logged out successfully';
      localStorage.setItem('uname','');
    }
    else{
      this.msg = 'Invalid entry to this page';
    }
   }

  ngOnInit() {
  }

}
