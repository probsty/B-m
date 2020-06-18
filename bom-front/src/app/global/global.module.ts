import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
      CommonModule,
       FlexLayoutModule
    ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class GlobalModule {}
