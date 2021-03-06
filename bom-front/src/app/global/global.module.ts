import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { FicheComponent } from './fiche/fiche.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';
import { ImgZoomComponent } from './ImgZoom/img-zoom.component';
import { ToolbarItemComponent } from './toolbar-item/toolbar-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    ProductCardComponent,
    TemoignageComponent,
    FicheComponent,
    PageTitleComponent,
    ImgZoomComponent,
    ToolbarItemComponent,
  ],
  exports: [
    ProductCardComponent,
    TemoignageComponent,
    FicheComponent,
    PageTitleComponent,
    ImgZoomComponent,
    ToolbarItemComponent,
  ],
})
export class GlobalModule {}
