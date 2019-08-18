// import { HttpClient, HttpHeaders } from '@angular/common/http';

// const apiUrl = 'http://localhost:3000/api/v1/';

// const headers = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };
// export class RestService {

//   constructor(private http: HttpClient) { }

//   private extractData(res: Response) {
//     let body = res;
//     return body || { };
//   }

//   postData(credentials, type) {
//     return new Promise((resolve, reject) => {
//     const headers = new Headers();
//     this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
//     .subscribe(res => {
//          resolve(res.json());
//      }, (err) => {
//      reject(err);
//  });

// });

// }
// }
