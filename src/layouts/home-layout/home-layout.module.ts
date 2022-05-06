import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutComponent} from './home-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeLayoutRoutingModule} from "./home-layout-routing.module";
import {SocialNetworkModule} from "../../shared/components/social-network/social-network.module";
import { SubMenuComponent } from './components/header/components/sub-menu/sub-menu.component';

@NgModule({
    declarations: [
        HomeLayoutComponent,
        HeaderComponent,
        FooterComponent,
        SubMenuComponent
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        HomeLayoutRoutingModule,
        SocialNetworkModule
    ]
})
export class HomeLayoutModule {
}
