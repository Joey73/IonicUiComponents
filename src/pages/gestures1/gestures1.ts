import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gestures1',
  templateUrl: 'gestures1.html',
})
export class Gestures1Page {
  clicked = 0;
  tapped = 0;
  pressed = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gestures1Page');
  }

  onElementClicked(){
    console.log('I was clicked or touched');
  }
  
  onElementTapped(){
    console.log('I was tapped');
  }

  onElementPressed() {
    console.log('I was pressed');
  }
}