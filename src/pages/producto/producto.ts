import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Desea terminar la compra',
      buttons: [
        {
          text: 'Ver Mas',
          handler: () => {
            console.log('Ver clicked');
          }
        },
        {
          text: 'Fin',
          handler: () => {
            console.log('Fin clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
