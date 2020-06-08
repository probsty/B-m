import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { AccountManagerModule } from './account-manager/account-manager.module';
import { ProduitModule } from './produit/produit.module';
import { JournalModule } from './journal/journal.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    HomeModule,
    AccountManagerModule,
    ProduitModule,
    JournalModule,
    AboutModule
  ]
})
export class MainModule { }
