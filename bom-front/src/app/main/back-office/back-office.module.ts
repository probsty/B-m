import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office.component';
import { RouterModule } from '@angular/router';

const routes = [
    {
      path: 'back-office',
      component: BackOfficeComponent,
    },
  ];

@NgModule({
  declarations: [BackOfficeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BackOfficeModule { }
