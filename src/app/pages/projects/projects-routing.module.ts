import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { SoftwareProjectComponent } from 'src/app/features/software-project/software-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: ':id',
        component: SoftwareProjectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
