import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
 
  apiURL = 'http://localhost:3000/api2/';

  constructor(private _http: HttpClient) { }

 
  registrarReserva(userParams):Observable<any>{
    let params = JSON.stringify(userParams);
    console.log(JSON.stringify(userParams));
    let options = new HttpHeaders().set('Content-type','application/json');
     return this._http.post(this.apiURL,params,{headers:options}).pipe((res)=> res);
  }

}

