import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './social-network.component';



@NgModule({
    declarations: [
        SocialNetworkComponent
    ],
    exports: [
        SocialNetworkComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SocialNetworkModule { }
