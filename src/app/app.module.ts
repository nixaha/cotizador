import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, 
         AgregarClientePage,
         LoginPage,
         ClientePage,
         AgregarProductoPage,
         ProductoPage } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarClientePage,
    LoginPage,
    ClientePage,
    AgregarProductoPage,
    ProductoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarClientePage,
    LoginPage,
    ClientePage,
    AgregarProductoPage,
    ProductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
