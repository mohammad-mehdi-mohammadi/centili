import {Component, OnInit, ViewChild} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Navigation, Scrollbar, SwiperOptions} from 'swiper';
import {SwiperComponent} from "swiper/angular";
// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

@Component({
    selector: 'app-featured-logos',
    templateUrl: './featured-logos.component.html',
    styleUrls: ['./featured-logos.component.scss']
})
export class FeaturedLogosComponent implements OnInit {
    @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;

    public slides = [
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        },
        {
            item: [
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                },
                {
                    url: './assets/media/img/operators-soft-bank.svg',
                    alt: 'operators-soft-bank'
                }
            ]
        }
    ]
    config: SwiperOptions = {
        grabCursor: true,
        speed: 800,
        scrollbar: {draggable: true, hide: false, el: '.featuredLogosArea .swiper-scrollbar'},
        navigation: {
            nextEl: '.featuredLogosArea .swiper-next',
            prevEl: '.featuredLogosArea .swiper-prev'
        },
        breakpoints: {
            '320': {
                slidesPerView: 2,
                spaceBetween: 24
            },
            '640': {
                slidesPerView: 3,
                spaceBetween: 24
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 24
            },
            '1024': {
                slidesPerView: 7,
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
