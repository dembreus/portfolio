import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
})
export class ExpertiseComponent implements OnInit {
  constructor(private metaTagService: Meta) {}

  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'description',
        content: "Dillon Embreus's Expertise.",
      },
      {
        name: 'keywords',
        content: 'Dillon Embreus, Embreus, Portfolio, Expertise, Resume',
      },
    ]);
  }
}
