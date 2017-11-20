import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component'; 
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QuizziesPage } from '../pages/quizzies/quizzies';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { AnalysReportsPage } from '../pages/analys-reports/analys-reports';
import { NewAppointmentPage } from '../pages/new-appointment/new-appointment';
import { ViewsAppointCalendarPage } from '../pages/views-appoint-calendar/views-appoint-calendar';
import { NewQuizzyPage } from '../pages/new-quizzy/new-quizzy'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeInfosProvider } from '../providers/home-infos/home-infos';
import { NewAppointmentServiceProvider } from '../providers/new-appointment-service/new-appointment-service';
import { NewQuizzyServiceProvider } from '../providers/new-quizzy-service/new-quizzy-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QuizziesPage,
    AppointmentsPage,
    AnalysReportsPage,
    NewAppointmentPage,
    ViewsAppointCalendarPage,
    NewQuizzyPage
  ],
  imports: [ 
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QuizziesPage,
    AppointmentsPage,
    AnalysReportsPage,
    NewAppointmentPage,
    ViewsAppointCalendarPage,
    NewQuizzyPage
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeInfosProvider,
    NewAppointmentServiceProvider,
    NewQuizzyServiceProvider
  ]
})
export class AppModule {}
