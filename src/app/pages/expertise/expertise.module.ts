import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertiseRoutingModule } from './expertise-routing.module';
import { ExpertiseComponent } from './expertise.component';
import { ResumeModule } from 'src/app/features/resume/resume.module';


@NgModule({
  declarations: [ExpertiseComponent],
  imports: [
    CommonModule,
    ExpertiseRoutingModule,
    ResumeModule
  ],
})
export class ExpertiseModule { }
