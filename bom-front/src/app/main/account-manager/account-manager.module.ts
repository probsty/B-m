import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionConnexionComponent } from './inscription-connexion/inscription-connexion.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

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
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
  ];

@NgModule({
  declarations: [InscriptionConnexionComponent, ProfileComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),

  ]
})
export class AccountManagerModule { }
