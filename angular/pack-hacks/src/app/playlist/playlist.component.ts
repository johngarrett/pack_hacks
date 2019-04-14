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
        }
      ],
    }
  ]

  ngOnInit() {

  }
}
