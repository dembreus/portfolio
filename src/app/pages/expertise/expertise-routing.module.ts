import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeModule } from 'src/app/features/resume/resume.module';
import { ExpertiseComponent } from './expertise.component';

const routes: Routes = [{
  path: '',
  component: ExpertiseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertiseRoutingModule { }
