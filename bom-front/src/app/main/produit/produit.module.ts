import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from 'src/app/global/global.module';

const routes = [
    {
      path: 'produit/:id',
      component: ProduitComponent,
    //   data: { isRegistration: false }
    }
  ];

@NgModule({
  declarations: [ProduitComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    GlobalModule
  ]
})
export class ProduitModule { }
