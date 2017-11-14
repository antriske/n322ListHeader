import { Component } from '@angular/core';
import { DataProvider } from "../../providers/data/data";
import { NavController } from 'ionic-angular';
import { DescriptionPage } from "../description/description";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: any;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
  }

  ionViewDidLoad () {
    this.notes = this.dataService.notes;
  }

  itemClicked(thing): void {
    console.log(thing.dets);
    this.navCtrl.push(DescriptionPage, thing);
  }


}
