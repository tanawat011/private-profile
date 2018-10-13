import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-main-slider-section',
  templateUrl: './main-slider-section.component.html',
  styleUrls: ['./main-slider-section.component.scss']
})
export class MainSliderSectionComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;

  public images = [
    {
      file: 'profile-iamdev.jpg',
      title: 'Hello.',
      content: 'My Name is TA',
      detail: '& I am absolutely design addicted'
    },
    {
      file: 'i-like-coding.png',
      title: 'I Like Coding.',
      content: 'Coding is Real life',
      detail: 'Coding is very fun.'
    },
    {
      file: 'i-like-front-end.png',
      title: 'Front Dev.',
      content: 'Front-End Development is very fun',
      detail: 'Yeah right. I Like Front-end Developer'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.owlElement.next([2000]);
  }

}
