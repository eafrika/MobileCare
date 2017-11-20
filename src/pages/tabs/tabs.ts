import { Component } from '@angular/core';

import { QuizziesPage } from '../quizzies/quizzies';
import { AppointmentsPage } from '../appointments/appointments';
import { AnalysReportsPage } from '../analys-reports/analys-reports';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage; 
  tab2Root = AppointmentsPage;
  tab3Root = QuizziesPage;
  tab4Root = AnalysReportsPage;
  tab5Root = ContactPage; 

  constructor() {

  }
}
