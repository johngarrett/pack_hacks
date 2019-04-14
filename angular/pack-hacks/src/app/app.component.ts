import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';
import {SpotifyService} from "./spotify.service";
import {Router} from "@angular/router";
import {AuthConfig, JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "https://accounts.spotify.com/authorize?state=NsRIsWxdcsDmSL0J&show_dialog=true",
  redirectUri: window.location.origin,
  clientId: '5fe01282e44241328a84e7c5cc169165',
  scope: "user-read-private user-read-email",
  responseType: "code",
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: Observable<any[]>;

  constructor(db: AngularFirestore, sp: SpotifyService, private oauthService: OAuthService) {
    this.items = db.collection('/time_of_day').valueChanges();
    // sp.authorize();
    // router.navigate(["https://accounts.spotify.com/authorize?response_type=code&client_id=67f4df5a3037476aaf5e3cf792bc44d6&scope=user-read-private%20user-read-email&redirect_uri=http://localhost:4200/&state=NsRIsWxdcsDmSL0J&show_dialog=true"])
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
