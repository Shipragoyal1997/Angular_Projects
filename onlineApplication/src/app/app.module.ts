import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestQuestionComponent } from './test-question/test-question.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResultComponent } from './result/result.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroComponent,
    DashboardComponent,
    TestQuestionComponent,
    PagenotfoundComponent,
    ResultComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
      {path:"",component:IntroComponent},
      {path:"login",component:LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'testquestion',component:TestQuestionComponent},
      {path:"result",component:ResultComponent},
      {path:"logout",component:LogoutComponent},
      {path:'**',component:PagenotfoundComponent,pathMatch:'full'}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
