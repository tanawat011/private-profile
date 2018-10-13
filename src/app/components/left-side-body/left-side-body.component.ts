import { Component, OnInit } from '@angular/core';

interface ISocialNetwork {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-left-side-body',
  templateUrl: './left-side-body.component.html',
  styleUrls: ['./left-side-body.component.scss']
})
export class LeftSideBodyComponent implements OnInit {

  public SocialNetworks: ISocialNetwork[] = [
    { icon: 'fab fa-facebook', link: 'https://web.facebook.com/natare.kap.5' },
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/takissnit/' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/tanawat-pintongpan-683a84167/' },
    { icon: 'fab fa-gitlab', link: 'https://gitlab.com/iAMDEVz' },
    { icon: 'fab fa-github', link: 'https://github.com/tanawat011' },
    { icon: 'fab fa-line', link: 'takissnit' },
    { icon: 'fab fa-steam', link: 'https://steamcommunity.com/profiles/76561198045358199/' },
    { icon: 'fab fa-youtube-square', link: 'https://www.youtube.com/channel/UC8LObIoox9lHP0kbcx96GdQ?view_as=subscriber' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
