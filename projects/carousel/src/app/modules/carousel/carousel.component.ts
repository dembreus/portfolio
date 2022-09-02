import { Component, OnInit, Input, Inject } from '@angular/core';
import { ISlide } from '../../interfaces/islide';
import { CarouselService } from '../../services/shared/carousel/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slides: ISlide[];

  constructor(carouselService: CarouselService) {
    this.slides = carouselService.getSlides();
  }
  ngOnInit(): void {}
}
