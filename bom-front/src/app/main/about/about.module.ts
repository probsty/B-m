import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { RouterModule } from '@angular/router';

const routes = [
    {
      path: 'qui-sommes-nous',
      component: QuiSommesNousComponent
    }
  ];

@NgModule({
  declarations: [QuiSommesNousComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
