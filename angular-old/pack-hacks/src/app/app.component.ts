import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';
import {SpotifyService} from "./spotify.service";
import {Router} from "@angular/router";
import {AuthConfig, JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "/spotify/authorize",
  redirectUri: window.location.origin,
  clientId: '5fe01282e44241328a84e7c5cc169165',
  scope: "user-read-private user-read-email",
  responseType: "code",
  customQueryParams: {
    "state": "NsRIsWxdcsDmSL0J",
    "showDialog": "true"
  },
  requireHttps: false
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: Observable<any[]>;

  constructor(db: AngularFirestore, sp: SpotifyService, private oauthService: OAuthService) {
    this.items = db.collection('/time_of_day').valueChanges();
    oauthService.configure(authConfig);
    oauthService.tokenValidationHandler = new JwksValidationHandler();

    oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
      console.log("Logged in!");
    }).catch(err => {
      console.error(err);
    });
  }

  login() {
    this.oauthService.initImplicitFlow();
    console.log("attempting login");
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
