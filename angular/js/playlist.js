import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  @Input() disableRipple = true

  songs = [
    {
      image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
      title: "The title of the song",
      time: "3:07",
      users: [
        {
          image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
        }
      ],
    },
    {
      image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
      title: "The title of the song",
      time: "3:07",
      users: [
        {
          image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
        }
      ],
    },
    {
      image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
      title: "The title of the song",
      time: "3:07",
      users: [
        {
          image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
        },
        {
          image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
        }
      ],
    }
  ]

  ngOnInit() {

  }
}