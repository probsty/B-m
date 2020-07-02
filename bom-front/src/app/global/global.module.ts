import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { FicheComponent } from './fiche/fiche.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule],
  declarations: [CarouselComponent, ProductCardComponent, TemoignageComponent, FicheComponent],
  exports: [CarouselComponent, ProductCardComponent, TemoignageComponent, FicheComponent],
})
export class GlobalModule {}
