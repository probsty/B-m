import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";

const googleLogoURL =
  "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-auth-google',
  templateUrl: './auth-google.component.html',
  styleUrls: ['./auth-google.component.sass']
})
export class AuthGoogleComponent implements OnInit {
  user: SocialUser;

  constructor (
    private _router: Router,
    private authService: SocialAuthService,
    private _authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "logoGoogle",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }

  ngOnInit(): void {
  }

  async signInWithGoogle(): Promise<void> {
    this.user = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.loginWithGoogle(this.user.authToken)
  }

  signOut(): void {
    this.authService.signOut();
  }

  /*
 * Connect to the api with the access token from google
 */
  loginWithGoogle(userToken): void {
    console.log(userToken)
    this._authService
      .loginGoogle(
        userToken
      )
      .subscribe(
        (user) => {
          if (user) {
            this._authService.isConnected.next(true);
            this._router.navigate(['/']);
          } else {
            console.error('An error occured while connecting to server');
          }
        },
        (err) => {
          console.log('error', err);
        }
      );
  }
}
