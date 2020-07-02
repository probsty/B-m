import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from 'src/app/global/global.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

const routes = [
  {
    path: 'produit/:id',
    component: ProduitComponent,
    //   data: { isRegistration: false }
  },
];

@NgModule({
  declarations: [ProduitComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    GlobalModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule

  ],
})
export class ProduitModule {}
