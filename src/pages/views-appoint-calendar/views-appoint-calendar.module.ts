import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewsAppointCalendarPage } from './views-appoint-calendar';

@NgModule({
  declarations: [
    ViewsAppointCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewsAppointCalendarPage),
  ],
})
export class ViewsAppointCalendarPageModule {}
