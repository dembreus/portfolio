import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SoftwareProjectComponent } from 'src/app/features/software-project/software-project.component';

@NgModule({
  declarations: [ProjectsComponent, SoftwareProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
