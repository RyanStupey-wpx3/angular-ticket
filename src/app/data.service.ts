import { Injectable } from '@angular/core';

import {Http, Headers, RequestOptions} from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class DataService {

  result: any;
  constructor(private _http: Http) { }

getTickets(){
  return this._http.get("/api/tickets").pipe(map(result => this.result = result.json().data));
}

}
