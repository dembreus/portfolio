import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './modules/carousel/carousel.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/carousel/carousel.module').then(
        (m) => m.CarouselModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
