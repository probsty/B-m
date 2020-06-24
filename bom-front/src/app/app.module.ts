import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselComponent } from './global/carousel/carousel.component';
import { GlobalModule } from './global/global.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';
import { httpInterceptorProviders } from './http-interceptors';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDeleteDialogComponent } from './global/comfirm-delete-dialog/confirm-delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from "./global/dialog/dialog.component";
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  FacebookLoginProvider
} from 'angularx-social-login';

@NgModule({
  declarations: [AppComponent, MainNavComponent, ConfirmDeleteDialogComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    GlobalModule,
    SlickCarouselModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
    // providers: [IsLoggedInGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmDeleteDialogComponent],

})
export class AppModule {}
