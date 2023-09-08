import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { SoftwareProjectComponent } from 'src/app/features/software-project/software-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  // {
  //   path: ':id',
  //   loadChildren: () =>
  //     import('../../features/software-project/software-project.module').then(
  //       (module) => module.SoftwareProjectModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
