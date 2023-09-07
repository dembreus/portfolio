import { Component, OnInit, Input } from '@angular/core';
import { SoftwareProject } from './software-project';

@Component({
  selector: 'app-software-project',
  templateUrl: './software-project.component.html',
  styleUrls: ['./software-project.component.scss'],
})
export class SoftwareProjectComponent implements OnInit {
  @Input() project: SoftwareProject = {
    title: '',
    description: '',
    referenceUrl: '',
    referenceImage: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
