import { LaravelMethodsAPI } from './../methods/laravel.method';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TestLaravelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestLaravelProvider extends BaseService implements LaravelMethodsAPI{
  
  constructor(public http: HttpClient) {
    super(http);
    console.log('Hello TestLaravelProvider Provider');
  }
  
  index(): Observable<any> {
    throw new Error("Method not implemented.");
  }
  show(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
  store(data: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  update(data: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  destroy(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
}
