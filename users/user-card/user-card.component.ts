import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
    `
      img {
        width: 100%;
        height: auto;
      }
      .placeholder {
        padding-top: 100%;
        background: #ccc;
        position: relative;
      }
      h3 { margin: 0 }
    `
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
