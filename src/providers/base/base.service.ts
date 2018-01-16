import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export abstract class BaseService {
  private options: HttpHeaders;
  private url_server: string = 'http://localhost/api/'
  constructor(protected http: HttpClient) {
    this.options = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
    });
  }

  protected headers() {
    this.options = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
    });
    return;
  }

  protected get(controller: string): Observable<any> {
    this.headers();
    return this.http.get(`${this.url_server}${controller}`, { headers: this.options });
  }

  protected post(controller: string, data: any): Observable<any> {
    this.headers();
    return this.http.post(`${this.url_server}${controller}`, data, { headers: this.options });
  }

  protected put(controller: string, data: any): Observable<any> {
    this.headers();
    return this.http.put(`${this.url_server}${controller}`, data, { headers: this.options });
  }

  protected delete(controller: string): Observable<any> {
    this.headers();
    return this.http.delete(`${this.url_server}${controller}`, { headers: this.options });
  }

  public url(url: string): Observable<any> {
    return this.get(`${url}`);
  }

}