import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GlobalModule } from 'src/app/global/global.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes = [
  {
    path: 'qui-sommes-nous',
    component: QuiSommesNousComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [QuiSommesNousComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    GlobalModule,
    FlexLayoutModule
  ],
})
export class AboutModule {}
