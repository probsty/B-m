import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office.component';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from 'src/app/http-interceptors';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes = [
  {
    path: 'back-office',
    component: BackOfficeComponent,
  },
];

@NgModule({
  declarations: [BackOfficeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    NgxDatatableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [httpInterceptorProviders],
})
export class BackOfficeModule {}
