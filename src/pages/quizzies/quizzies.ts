import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewQuizzyPage } from '../new-quizzy/new-quizzy';

/**
 * Generated class for the QuizziesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzies',
  templateUrl: 'quizzies.html',
})
export class QuizziesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  NewQuizzy(){
    this.navCtrl.push(NewQuizzyPage);
  }

}
