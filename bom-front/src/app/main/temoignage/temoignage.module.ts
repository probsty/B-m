import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from './temoignage.component';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from 'src/app/http-interceptors';
import {GlobalModule} from "../../global/global.module";

const routes = [
    {
      path: 'temoignage',
      component: TemoignageComponent
    }
  ];

@NgModule({
  declarations: [TemoignageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  providers: [httpInterceptorProviders]
})
export class TemoignageModule { }
