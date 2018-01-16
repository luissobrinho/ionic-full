import { Observable } from 'rxjs/Observable';
export interface LaravelMethodsAPI {
    index(): Observable<any>;
    show(id: number): Observable<any>;
    store(data: any): Observable<any>;
    update(data: any): Observable<any>;
    destroy(id: number): Observable<any>;
}