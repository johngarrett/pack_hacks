import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  authorize() {
    let state = this.generateRandomString(16)
    document.cookie = "spotify_auth_state=" + state;

    let httpParams = new HttpParams()
      .append("response_type", "code")
      .append("client_id", "67f4df5a3037476aaf5e3cf792bc44d6")
      .append("scope", "user-top-read user-read-private user-read-recently-played")
      .append("redirect_uri", "http://www.tune-fish.com")
      .append("state", state)
      .append("show_dialog", "true");
    this.httpClient.get("/spotify/authorize", {
      params: httpParams
    }).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
  }

  generateRandomString(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
}
