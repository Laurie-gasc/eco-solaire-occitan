import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-realisations',
  imports: [CommonModule],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss'
})
export class RealisationsComponent implements AfterViewInit {

  images = [
    'assets/realisations/1.jpeg',
    'assets/realisations/2.jpeg',
    'assets/realisations/3.jpeg',
    'assets/realisations/4.jpeg',
    'assets/realisations/5.jpeg',
    'assets/realisations/6.jpeg',
    'assets/realisations/7.jpeg',
  ];

  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 16,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }
}