import { Observable } from 'rxjs/Observable';
export interface LaravelMethodsAPI {
    getAll(): Observable<any>;
    getId(id: number): Observable<any>;
    save(data: any): Observable<any>;
    edit(data: any): Observable<any>;
    delete(id: number): Observable<any>;
}