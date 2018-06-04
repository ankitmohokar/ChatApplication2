import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { ChatPage} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = '';

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {


  }


  alert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  userLogin(){

    // to check userlogin specifications

    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push( ChatPage , {
        username: this.username
      });

    }
    else{
      this.alert('Error', 'Invalid');
    }
  }

}
