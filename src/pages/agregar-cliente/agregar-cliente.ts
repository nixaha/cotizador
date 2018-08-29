import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../index.paginas';

@Component({
  selector: 'page-agregar-cliente',
  templateUrl: 'agregar-cliente.html',
})
export class AgregarClientePage {
  login: any= LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarClientePage');
  }

}
