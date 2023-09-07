import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareProjectModule } from 'src/app/features/software-project/software-project.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SoftwareProjectModule],
})
export class ProjectsModule {}
