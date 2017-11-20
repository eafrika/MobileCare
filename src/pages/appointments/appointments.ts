import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewAppointmentPage } from '../new-appointment/new-appointment';
import { ViewsAppointCalendarPage } from '../views-appoint-calendar/views-appoint-calendar';


/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  } 

  NewAppointment(){
    this.navCtrl.push(NewAppointmentPage);
  }
  ViewCalendar(){
    this.navCtrl.push(ViewsAppointCalendarPage);
  }

}
