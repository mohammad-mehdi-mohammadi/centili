import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { FeaturedLogosComponent } from './components/featured-logos/featured-logos.component';
import {SwiperModule} from "swiper/angular";
import {HomeLayoutModule} from "../../layouts/home-layout/home-layout.module";
import {SocialNetworkModule} from "../../shared/components/social-network/social-network.module";


@NgModule({
    declarations: [
        HomeComponent,
        FeaturedLogosComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SwiperModule,
        HomeLayoutModule,
        SocialNetworkModule
    ]
})
export class HomeModule {
}
