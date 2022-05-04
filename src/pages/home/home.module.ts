import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { FeaturedLogosComponent } from './components/featured-logos/featured-logos.component';
import {SwiperModule} from "swiper/angular";


@NgModule({
    declarations: [
        HomeComponent,
        FeaturedLogosComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SwiperModule
    ]
})
export class HomeModule {
}
