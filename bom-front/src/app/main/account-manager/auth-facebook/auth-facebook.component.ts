import {SocialAuthService, SocialUser} from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-auth-facebook',
  templateUrl: './auth-facebook.component.html',
  styleUrls: ['./auth-facebook.component.sass']
})
export class AuthFacebookComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: SocialAuthService) { }

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
