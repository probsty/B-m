import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from './temoignage.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/guards/is-logged-in.guard';

const routes = [
    {
      path: 'temoignage',
      canActivate : [IsLoggedInGuard],
      component: TemoignageComponent
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
