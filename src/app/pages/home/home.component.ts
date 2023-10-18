import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SoftwareProject } from 'src/app/features/software-project/software-project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects: Array<SoftwareProject> = [
    {
      title: 'Injectable Menu',
      description:
        'Create your own menu and inject it into your personal website. Automatically adjusts for mobile experience and personal branding.',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage: '../../assets/temp/potluck-display.jpg',
    },
    {
      title: 'Skateboard App',
      description:
        'Find Skatespots in your aread. Upload photos, available time ranges, descriptions and location.',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage: '../../assets/temp/vidly-display.jpg',
    },
    {
      title: 'Trillo',
      description: 'UI design site for a hotel website',
      referenceUrl: 'https://github.com/dembreus/portfolio',
      referenceImage: '../../assets/temp/user-profile-display.jpg',
    },
  ];
  constructor(private metaTagService: Meta) {}

  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'description',
        content: "Dillon Embreus's Portfolio.",
      },
      {
        name: 'keywords',
        content: 'Dillon Embreus, Embreus, Portfolio',
      },
    ]);
  }
}
