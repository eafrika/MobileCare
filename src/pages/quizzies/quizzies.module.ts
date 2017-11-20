import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizziesPage } from './quizzies';

@NgModule({
  declarations: [
    QuizziesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizziesPage),
  ],
})
export class QuizziesPageModule {}
