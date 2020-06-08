import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionConnexionComponent } from './inscription-connexion/inscription-connexion.component';
import { RouterModule } from '@angular/router';

const routes = [
    {
      path: 'connexion',
      component: InscriptionConnexionComponent,
      data: { isRegistration: false }
    },
    {
        path: 'inscription',
        component: InscriptionConnexionComponent,
        data: { isRegistration: true }
    }
  ];

@NgModule({
  declarations: [InscriptionConnexionComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),

  ]
})
export class AccountManagerModule { }
