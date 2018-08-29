import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AgregarProductoPage, ProductoPage } from '../index.paginas';

@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
  producto: any = ProductoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }
  iraAgregar(){
    this.navCtrl.push(AgregarProductoPage);
  }
  




}
