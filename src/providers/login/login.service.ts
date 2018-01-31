import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user/user.model';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  user: User;

  constructor(public http: HttpClient, public storage: Storage) {
    this.storage.ready()
      .then((store: LocalForage) => {
        store.config({
          name: '__Ionic_FULL__'
        });
      })
  }

  /**
   * Login e um metodo de login simple
   */
  login(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      'http://localhost/api/login',
      {
        user: user,
        password: password
      }, {
        headers: headers
      });
  }

  /**
   * Verifica se existe usuário logado
   */
  isLogged(): Promise<any> {
    return this.storage.get('user')
      .then((user) => {
        if (user) {
          this.user = user;
          window.sessionStorage.setItem('token', user.token);
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      })
  }

  /**
   * Retorna os dados do usuário
   * 
   * @returns User;
   */
  Auth(): Promise<User> {
    return this.storage.get('user')
  }

  /**
   * 
   * @param User user
   * 
   * Salvar o usuário offline para que não precise ficar fazendo login sempre
   */
  setUser(user: User) {
    this.user = user;
    return this.storage.set('user', user);
  }



}
