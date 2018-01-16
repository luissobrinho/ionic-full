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
    return this.get('test');
  }
  show(id: number): Observable<any> {
    return this.get(`test/${id}`)
  }
  store(data: any): Observable<any> {
    return this.post(`test`, data)
  }
  update(data: any): Observable<any> {
    return this.put(`test/${data.id}`, data);
  }
  destroy(id: number): Observable<any> {
    return this.delete(`test/${id}`);
  }
}
