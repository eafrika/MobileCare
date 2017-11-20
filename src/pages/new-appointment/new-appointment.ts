import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-appointment',
  templateUrl: 'new-appointment.html',
})
export class NewAppointmentPage { 
  public event = { 
    timeEnds: '2017-06-30' 
  }
  public appDate = "";
   
  NewAppointment = {}
  SmtAppointment() {
    console.log(this.NewAppointment)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, loadingCtrl: LoadingController) {

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
  presentLoading() {
    /*this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();*/
  } 
}
