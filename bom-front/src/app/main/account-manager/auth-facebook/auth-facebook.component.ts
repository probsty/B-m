import {SocialAuthService, SocialUser} from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {Component, OnInit} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-auth-facebook',
  templateUrl: './auth-facebook.component.html',
  styleUrls: ['./auth-facebook.component.sass']
})
export class AuthFacebookComponent implements OnInit {
  user: SocialUser;

  constructor (
    private authService: SocialAuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {this.matIconRegistry.addSvgIcon(
    "logoFacebook",
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/facebook.svg'));
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
