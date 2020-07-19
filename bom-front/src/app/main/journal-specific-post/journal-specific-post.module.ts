import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalSpecificPostComponent } from './journal-specific-post.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {GlobalModule} from "../../global/global.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {QuillModule} from "ngx-quill";

const routes = [
  {
    path: 'journal/:id',
    component: JournalSpecificPostComponent
  }
];

@NgModule({
  declarations: [JournalSpecificPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    GlobalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    QuillModule
  ]
})
export class JournalSpecificPostModule { }
