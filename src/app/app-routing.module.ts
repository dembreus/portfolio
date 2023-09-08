import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then(
        (module) => module.ProjectsModule
      ),
  },
  { path: 'expertise', component: ExpertiseComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
