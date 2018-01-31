import { HomePage } from './../home/home';
import { LoginProvider } from './../../providers/login/login.service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, AlertButton } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user/user.model';

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

  constructor(
    public alertCtrl: AlertController,
    formBuilder: FormBuilder,
    public loginPvd: LoginProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.formLogin = formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginPvd
      .login(this.formLogin.controls['user'].value, this.formLogin.controls['password'].value)
      .subscribe((user: User) => {
        window.sessionStorage.setItem('token', user.token);
        this.loginPvd.setUser(user).then(() => {
          this.navCtrl.setRoot(HomePage);
        })
      }, (error) => {
        console.log(error);
        this.showAlert(error.error.message, ['OK'])
      })
    this.showAlert('Login teste!', [{
      text: 'OK',
      handler: () => {
        this.navCtrl.setRoot(HomePage)
      }
    }]).present();
  }

  showAlert(message: string, buttons: AlertButton[] | string[]) {
    return this.alertCtrl.create({
      subTitle: message,
      buttons: buttons
    })
  }

}
