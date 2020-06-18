import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalModule } from 'src/app/global/global.module';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    GlobalModule,
  ],
})
export class HomeModule {}
