import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalModule } from 'src/app/global/global.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
    SlickCarouselModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
