import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineApplication';
  show:boolean=true
  constructor(private _router:Router) { }
  buttontext(){
    this.show=!this.show;
    if(this.show==false){
    this._router.navigate(['../login']);
    }
    else
    this._router.navigate(['../logout']);
  }
}
