import { HomePage } from './../home/home';
import { LoginProvider } from './../../providers/login/login.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(formBuilder: FormBuilder, public loginPvd: LoginProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.formLogin = formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginPvd.login(this.formLogin.controls['user'].value, this.formLogin.controls['password'].value)
      .then((success) => {
        console.log(success);
        
        // this.navCtrl.setRoot(HomePage)
      })
      .catch((error) => {
        console.log(error);
        
      });
      this.navCtrl.setRoot(HomePage)
      
  }

}
