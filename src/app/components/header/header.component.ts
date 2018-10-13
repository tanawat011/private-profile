import { Component, OnInit } from '@angular/core';

interface IHeaderMenu {
  icon: string;
  link: string;
  title: string;
  is_active?: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public HeaderMenu: IHeaderMenu[] = [
    { icon: 'fa fa-home', link: '0', title: 'Home', is_active: true },
    { icon: 'fa fa-user-o', link: '1', title: 'About' },
    { icon: 'fa fa-lightbulb-o', link: '2', title: 'Skills' },
    { icon: 'fa fa-graduation-cap', link: '3', title: 'Education' },
    { icon: 'fa fa-briefcase', link: '4', title: 'Portfolio' },
    { icon: 'fa fa-quote-left', link: '5', title: 'Testimolial' },
    { icon: 'fa fa-pencil', link: '6', title: 'Experience' },
    { icon: 'fa fa-newspaper-o', link: '7', title: 'Blog' },
    { icon: 'fa fa-envelope-o', link: '8', title: 'Contant' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
