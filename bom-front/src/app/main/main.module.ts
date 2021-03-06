import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { AccountManagerModule } from './account-manager/account-manager.module';
import { ProduitModule } from './produit/produit.module';
import { JournalModule } from './journal/journal.module';
import { AboutModule } from './about/about.module';
import { TemoignageModule } from './temoignage/temoignage.module';
import { BackOfficeModule } from './back-office/back-office.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JournalSpecificPostModule } from './journal-specific-post/journal-specific-post.module'

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    FlexLayoutModule,
    HomeModule,
    AccountManagerModule,
    ProduitModule,
    JournalModule,
    AboutModule,
    TemoignageModule,
    BackOfficeModule,
    JournalSpecificPostModule
  ]
})
export class MainModule { }
