import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewQuizzyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-quizzy',
  templateUrl: 'new-quizzy.html',
})
export class NewQuizzyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  timings = [
    {
      id : 1,
      title: "Morning",
      start: "08AM to 12AM"
    },
    {
      id : 2, 
      title: "Afternoon",
      start: "1PM to 5PM" 
    },
    {
      id : 3, 
      title: "Evening",
      start: "6PM to 9PM"
    }
  ];

}
