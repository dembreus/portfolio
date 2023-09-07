import { Component, OnInit } from '@angular/core';
import { SoftwareProject } from 'src/app/features/software-project/software-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<SoftwareProject> = [
    {
      title: 'project 1',
      description: 'project 1 description',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage: '#project-1-image',
    },
    {
      title: 'project 2',
      description: 'project 2 description',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage: '#project-2-image',
    },
    {
      title: 'project 3',
      description: 'project 3 description',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage: '#project-3-image',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
