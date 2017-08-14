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
    this.clicked++;
  }
  
  onElementTapped(){
    console.log('I was tapped');
    this.tapped++;
  }

  onElementPressed() {
    console.log('I was pressed');
    this.pressed++;
  }

  onReset(type: string){
    switch(type) {
      case 'clicks':
        this.clicked = 0;;
        break;
      case 'taps':
        this.tapped = 0;
        break;
      case 'presses':
        this.pressed = 0;
        break;
      default:
        this.clicked = 0;
        this.tapped = 0;
        this.pressed = 0;
    }
  }
}