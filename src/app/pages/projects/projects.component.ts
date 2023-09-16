import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SoftwareProject } from 'src/app/features/software-project/software-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<SoftwareProject> = [
    {
      title: 'Injectable Menu',
      description:
        'Create your own menu and inject it into your personal website. Automatically adjusts for mobile experience and personal branding.',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage:
        'https://images.unsplash.com/photo-1515697320591-f3eb3566bc3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80',
    },
    {
      title: 'Skateboard App',
      description:
        'Find Skatespots in your aread. Upload photos, available time ranges, descriptions and location.',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage:
        'https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3852&q=80',
    },
    {
      title: 'Trillo',
      description: 'UI design site for a hotel website',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage:
        'https://images.unsplash.com/photo-1688401561247-028153a25fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80',
    },
  ];

  constructor(private metaTagService: Meta) {}

  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'description',
        content: "Dillon Embreus's Projects.",
      },
      {
        name: 'keywords',
        content: 'Dillon Embreus, Embreus, Projects',
      },
    ]);
  }
}
