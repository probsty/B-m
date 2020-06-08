import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from './temoignage.component';
import { RouterModule } from '@angular/router';

const routes = [
    {
      path: 'temoignage',
      component: TemoignageComponent,
    }
  ];

@NgModule({
  declarations: [TemoignageComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class TemoignageModule { }
