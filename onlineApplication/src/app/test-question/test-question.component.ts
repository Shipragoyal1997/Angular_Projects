import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.css']
})
export class TestQuestionComponent implements OnInit {
  questions:Questions[];
  uname:string;
  ms:string;
  private url:string='http://localhost:3000/questions';
  constructor(private _http:HttpClient,private _router:Router) {
    if(localStorage.getItem('uname').length > 0){
      this.uname = localStorage.getItem('uname');
      }
      else
      this.ms="session is not available";
    
    this._http.get<Questions[]>(this.url)
      .subscribe(x=>this.questions=x,);

      
   }
   
    msg:string;
    score:string;
    static count=0;
    selected(s,i){
      if(s==this.questions[i].correct_option)
      TestQuestionComponent.count++;
    }

    ngOnInit() {
     
     } 

    calculate(){
        this.score=TestQuestionComponent.count.toString();
        localStorage.setItem('score',this.score);
        this._router.navigate(['../result']);   
    }
}

class Questions{
  no:string
  ques:string
  options:string[]
  correct_option:number
}

