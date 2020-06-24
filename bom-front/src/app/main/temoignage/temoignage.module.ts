import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from './temoignage.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/guards/is-logged-in.guard';
import { httpInterceptorProviders } from 'src/app/http-interceptors';

const routes = [
    {
      path: 'temoignage',
    //   canActivate : [IsLoggedInGuard],
      component: TemoignageComponent
    }
  ];

@NgModule({
  declarations: [TemoignageComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ],
  providers: [httpInterceptorProviders]
})
export class TemoignageModule { }
