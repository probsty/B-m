import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes = [
    {
      path: 'qui-sommes-nous',
      component: QuiSommesNousComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
  ];

@NgModule({
  declarations: [QuiSommesNousComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
