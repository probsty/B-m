import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal.component';
import { RouterModule } from '@angular/router';

const routes = [
    {
      path: 'journal',
      component: JournalComponent,
    //   data: { isRegistration: false }
    }
  ];

@NgModule({
  declarations: [JournalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JournalModule { }
