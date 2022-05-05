import {Component, OnInit, ViewChild} from '@angular/core';
import SwiperCore, {Navigation, Scrollbar, SwiperOptions} from 'swiper';
import {SwiperComponent} from "swiper/angular";
// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);
@Component({
  selector: 'app-impact-industries',
  templateUrl: './impact-industries.component.html',
  styleUrls: ['./impact-industries.component.scss']
})
export class ImpactIndustriesComponent implements OnInit {
  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;
  config: SwiperOptions = {
    grabCursor: true,
    speed: 800,
    scrollbar: {draggable: true, hide: false, el: '.impactIndustriesArea .swiper-scrollbar'},
    navigation: {
      nextEl: '.impactIndustriesArea .swiper-next',
      prevEl: '.impactIndustriesArea .swiper-prev'
    },
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 24
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 24
      },

      '1024': {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },

  };

  constructor() {
  }

  ngOnInit(): void {
  }

  slideNext() {
    if (this.swiper) {
      this.swiper.swiperRef.slideNext();
    }

  }

  slidePrev() {
    if (this.swiper) {
      this.swiper.swiperRef.slidePrev();
    }

  }
}
