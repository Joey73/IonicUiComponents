import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-customcomponent',
  templateUrl: 'customcomponent.html',
})
export class CustomComponentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}