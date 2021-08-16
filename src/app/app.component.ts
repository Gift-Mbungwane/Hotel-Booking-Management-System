import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel-Booking-Management-System';

  Images: Array<any> = [
    {
      src: 'http://localhost:52860/src/app/images/SlideImage1.png',
      alt: 'Image 1',
    }, {
      src: 'http://localhost:52860/src/app/images/SlideImage2.png',
      alt: 'Image 2'
    }, {
      src: 'http://localhost:52860/src/app/images/SlideImage3.png',
      alt: 'Image 3'
    }
  ];

  config: SwiperOptions = {

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 40
  }; 
}
