import { Component, OnInit } from '@angular/core';

interface ITag {
  title: string;
  is_active?: boolean;
}

interface ISkills {
  title: string;
  data_left: ISkillProgress[];
  data_right: ISkillProgress[];
}

interface ISkillProgress {
  title: string;
  class: string;
  duration: string;
  delay: string;
  percent: string;
}

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements OnInit {

  public Tags: ITag[] = [
    { title: '#webdevelopment' },
    { title: '#webapplication' },
    { title: '#developer' },
    { title: '#programmer' },
    { title: '#technology' },
    { title: '#junior' },
    { title: '#lagdev' },
    { title: '#GOTOSENIORANDMOBILEDEVAND...' },
  ];

  public SkillProgress: ISkills[] = [
    {
      title: 'Languages Programming Skills',
      data_left: [
        { title: 'HTML5', class: 'html5', percent: '90', duration: '1.5s', delay: '.05s' },
        { title: 'JAVASCRIPT', class: 'javascript', percent: '85', duration: '1.5s', delay: '.05s' },
        { title: 'C#', class: 'c-shape', percent: '45', duration: '1.5s', delay: '.05s' },
        { title: 'GO', class: 'go', percent: '20', duration: '1.5s', delay: '.05s' },
      ],
      data_right: [
        { title: 'CSS', class: 'css', percent: '70', duration: '1.5s', delay: '.05s' },
        { title: 'TYPESCRIPT', class: 'typescript', percent: '85', duration: '1.5s', delay: '.05s' },
        { title: 'PHP', class: 'php', percent: '75', duration: '1.5s', delay: '.05s' },
      ],
    },
    {
      title: 'Web Framework Skills',
      data_left: [
        { title: 'Angular', class: 'angular', percent: '95', duration: '1.5s', delay: '.05s' },
        { title: 'React', class: 'react', percent: '35', duration: '1.5s', delay: '.05s' },
        { title: 'Vue.js', class: 'vuejs', percent: '5', duration: '1.5s', delay: '.05s' },
      ],
      data_right: [
        { title: '.NetCore', class: 'dotnetcore', percent: '40', duration: '1.5s', delay: '.05s' },
        { title: 'Phalcon', class: 'phalcon', percent: '70', duration: '1.5s', delay: '.05s' },
        { title: 'Laravel', class: 'laravel', percent: '60', duration: '1.5s', delay: '.05s' },
      ],
    },
    {
      title: 'Database Skills',
      data_left: [
        { title: 'PostgreSQL', class: 'postgresql', percent: '85', duration: '1.5s', delay: '.05s' },
        { title: 'Oracle', class: 'oracle', percent: '50', duration: '1.5s', delay: '.05s' },
        { title: 'MongoDB', class: 'mongodb', percent: '35', duration: '1.5s', delay: '.05s' },
      ],
      data_right: [
        { title: 'MySQL', class: 'mysql', percent: '85', duration: '1.5s', delay: '.05s' },
        { title: 'SQLServer', class: 'sqlserver', percent: '50', duration: '1.5s', delay: '.05s' },
      ],
    },
  ];

  public LanguagesProgrammingSkillProgressLeft: ISkillProgress[] = [
    { title: 'HTML5', class: 'html5', percent: '90', duration: '1.5s', delay: '.05s' },
    { title: 'JAVASCRIPT', class: 'javascript', percent: '85', duration: '1.5s', delay: '.05s' },
    { title: 'C#', class: 'c-shape', percent: '45', duration: '1.5s', delay: '.05s' },
    { title: 'GO', class: 'go', percent: '5', duration: '1.5s', delay: '.05s' },
  ];

  public LanguagesProgrammingSkillProgressRight: ISkillProgress[] = [
    { title: 'CSS', class: 'css', percent: '70', duration: '1.5s', delay: '.05s' },
    { title: 'TYPESCRIPT', class: 'typescript', percent: '85', duration: '1.5s', delay: '.05s' },
    { title: 'PHP', class: 'php', percent: '75', duration: '1.5s', delay: '.05s' },
  ];

  public WebFrameworkSkillProgressLeft: ISkillProgress[] = [
    { title: 'Angular', class: 'angular', percent: '95', duration: '1.5s', delay: '.05s' },
    { title: 'React', class: 'react', percent: '35', duration: '1.5s', delay: '.05s' },
    { title: 'Vue.js', class: 'vuejs', percent: '5', duration: '1.5s', delay: '.05s' },
    { title: 'Kodchasan', class: 'kodchasan', percent: '0', duration: '1.5s', delay: '.05s' },
  ];

  public WebFrameworkSkillProgressRight: ISkillProgress[] = [
    { title: '.NetCore', class: 'dotnetcore', percent: '40', duration: '1.5s', delay: '.05s' },
    { title: 'Phalcon', class: 'phalcon', percent: '70', duration: '1.5s', delay: '.05s' },
    { title: 'Laravel', class: 'laravel', percent: '60', duration: '1.5s', delay: '.05s' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
