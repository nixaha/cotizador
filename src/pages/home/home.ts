import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AgregarClientePage, LoginPage, ClientePage } from '../index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login: any= LoginPage;
  cliente: any = ClientePage;

  constructor(public navCtrl: NavController) {

  }
   iraAgregar(){
    this.navCtrl.push(AgregarClientePage);
  }

}
