import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.testProvi().subscribe(resp => {
      console.log(resp.headers.get('X-Access-Token'));
      console.log(resp.headers.get('X-Refresh-Token'));
      // console.log(resp.headers);
    })
  }

  testProvi(){
   
    const bd = {
      "email":"Y292YXBheUBnbWFpbC5jb20=",
      "password":"I1RhbG9uZ2JlbXUx"
  }
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type": "application/json",
  //   }),
  //   observe: "response"
  // };
    return this.http.post('https://payment.xpress-wallet.com/api/v1/auth/login',bd,{observe: "response"})
  }
}
