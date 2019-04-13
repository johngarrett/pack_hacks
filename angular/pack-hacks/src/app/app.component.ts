import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';
import {SpotifyService} from "./spotify.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: Observable<any[]>;

  constructor(db: AngularFirestore, sp: SpotifyService) {
      this.items = db.collection('/time_of_day').valueChanges();
      sp.authorize();
  }
}
