import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Lists1Page } from "../pages/lists1/lists1";
import { Grids1Page } from "../pages/grids1/grids1";
import { Gestures1Page } from "../pages/gestures1/gestures1";
import { TouchEventComponent } from "../components/touch-event.component";
import { CustomComponentPage } from "../pages/owncomponent/customcomponent";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Lists1Page,
    Grids1Page,
    Gestures1Page,
    TouchEventComponent,
    CustomComponentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Lists1Page,
    Grids1Page,
    Gestures1Page,
    CustomComponentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
