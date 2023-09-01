import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private metaTageService: Meta) {}

  ngOnInit(): void {
    this.metaTageService.addTags([
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
