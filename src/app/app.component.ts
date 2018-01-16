import { LoginPage } from './../pages/login/login';
import { LoginProvider } from './../providers/login/login.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(loginPvd: LoginProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      loginPvd.isLogged()
        .then((is) => {
          this.rootPage = (is) ? HomePage : LoginPage;
        })
        .catch(() => {
          this.rootPage = LoginPage;
        })
    });
  }
}

