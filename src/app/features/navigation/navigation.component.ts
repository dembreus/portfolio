import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  routes = [
    { name: 'Home', href: '/' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Projects', href: '/projects' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
