import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-growth-partner',
    templateUrl: './growth-partner.component.html',
    styleUrls: ['./growth-partner.component.scss']
})
export class GrowthPartnerComponent implements OnInit {
    public description: string = 'We partnered up with Centili back in 2015 for several of our Asian and European business units. Their platform is supporting and managing our DOB needs in a secure and efficient way. Centili ́s subscription management and hosted payment pages give us a well trusted and reliable control and transparency within our payments ecosystem. The biggest value of having Centili as a partner is the reliability of their platform and the excellent business understanding they show in communication. We are happy to expand this cooperation to new markets and new verticals in the future.'
    public isDisplayMore: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    public onDescriptionChange(): void {
        this.isDisplayMore = !this.isDisplayMore;
        this.isDisplayMore
            ? this.description = 'We partnered up with Centili back in 2015 for several of our Asian and European business units. Their platform is supporting and managing our DOB needs in a secure and efficient way. Centili ́s subscription management and hosted payment pages give us a well trusted and reliable control and transparency within our payments ecosys'
            : this.description = 'We partnered up with Centili back in 2015 for several of our Asian and European business units. Their platform is supporting and managing our DOB needs in a secure and efficient way. Centili ́s subscription management and hosted payment pages give us a well trusted and reliable control and transparency within our payments ecosystem. The biggest value of having Centili as a partner is the reliability of their platform and the excellent business understanding they show in communication. We are happy to expand this cooperation to new markets and new verticals in the future.'
    }

}
