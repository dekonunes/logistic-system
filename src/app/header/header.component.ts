import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameMock = 'Andre Nunes';
  initial = '';
  constructor() { }

  ngOnInit(): void {
    this.initial = this.nameMock.match(/(^\S\S?|\b\S)?/g)!.join("")!.match(/(^\S|\S$)?/g)!.join("").toUpperCase();
  }

}
