// import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { HttpRequest,RequestOptions, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable, ViewChild, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import * as RestURLConstant from './constant';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {


  constructor(private http: HttpClient) { }

  loginRequest(userId, password) {
    let headers = new Headers({ 
      'Authorization': RestURLConstant.AUTHORIZE_TOKEN
    });
    // let options = {
    //   userId: userId,
    //   password: password,
    //   access_token: RestURLConstant.ACCESS_TOKEN,
    //   grant_type: 'password'
    // }
    let endPointURL = RestURLConstant.CONTEXT_URL + RestURLConstant.LOGIN_URL+ '?username='+userId+
    '&password='+password +'&grant_type=password';
    return this.http.post(endPointURL,headers)
    .map((resp: Response) => resp.json())
    .catch((e:Response)=>{
        return e.json();
    });
  }
}
