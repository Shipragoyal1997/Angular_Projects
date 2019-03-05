import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
  
})
export class ResultComponent implements OnInit {
  msg:string;
  uname:string;
  questions:Questions[];
  private url:string='http://localhost:3000/questions';
  constructor(private _http:HttpClient) {
    this.msg=localStorage.getItem('score');
    this._http.get<Questions[]>(this.url)
      .subscribe(x=>this.questions=x,);

      if(localStorage.getItem('uname').length > 0){
        this.uname = localStorage.getItem('uname');
      }
   }

  ngOnInit() {}
    
}
class Questions{
  no:string
  ques:string
  ans:string
}