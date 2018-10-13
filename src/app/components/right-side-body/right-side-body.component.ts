import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-body',
  templateUrl: './right-side-body.component.html',
  styleUrls: ['./right-side-body.component.scss']
})
export class RightSideBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setScrollTop() {
    window.scroll(0, 0);
  }

}
