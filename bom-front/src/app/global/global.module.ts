import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { TemoignageComponent } from './temoignage/temoignage.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatCardModule],
  declarations: [CarouselComponent, ProductCardComponent, TemoignageComponent],
  exports: [CarouselComponent, ProductCardComponent],
})
export class GlobalModule {}
