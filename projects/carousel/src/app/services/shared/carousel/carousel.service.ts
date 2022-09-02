import { Injectable } from '@angular/core';
import { ISlide } from './../../../interfaces/islide';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private slides: ISlide[];

  constructor() {
    this.slides = [
      {
        id: 0,
        imageUrl: '../../../assets/pexels-jeff-guab-2407634.jpg',
      },
      {
        id: 1,
        imageUrl: '../../../assets/pexels-ricardo-esquivel-1701893.jpg',
      },
      {
        id: 2,
        imageUrl: '../../../assets/pexels-mikhail-nilov-7683376.jpg',
      },
      {
        id: 3,
        imageUrl: '../../../assets/crime_scene.png',
      },
    ];
  }

  public getSlides = (): ISlide[] => {
    return this.slides;
  };
}
