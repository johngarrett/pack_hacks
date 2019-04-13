import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  template: `
      <ul>
          <li *ngFor="let item of items | async">
              <pre>{{ item | json }}</pre>
          </li>
      </ul>
  `
})

export class AppComponent {
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.items = db.collection('/items').valueChanges();
  }
}