import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lists1Page } from "../lists1/lists1";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lists1Page = Lists1Page;

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    console.log('Clicked!');
  }

  onGoToLists1Page(){
    this.navCtrl.push(this.lists1Page);
  }
}
