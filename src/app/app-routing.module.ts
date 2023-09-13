import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then(
        (module) => module.ProjectsModule
      ),
  },
  {     path: 'expertise',
  loadChildren: () =>
    import('./pages/expertise/expertise.module').then(
      (module) => module.ExpertiseModule
    ),},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
