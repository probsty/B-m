import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AccountManagerModule } from './account-manager/account-manager.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    HomeModule,
    AccountManagerModule
  ]
})
export class MainModule { }
