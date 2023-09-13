import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SoftwareProjectModule } from 'src/app/features/software-project/software-project.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SoftwareProjectModule],
})
export class ProjectsModule {}
