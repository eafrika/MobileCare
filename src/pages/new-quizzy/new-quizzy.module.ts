import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewQuizzyPage } from './new-quizzy';

@NgModule({
  declarations: [
    NewQuizzyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewQuizzyPage),
  ],
})
export class NewQuizzyPageModule {}
