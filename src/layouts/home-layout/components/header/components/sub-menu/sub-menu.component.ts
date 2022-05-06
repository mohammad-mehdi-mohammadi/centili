import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NavEnum} from "../../../../../../shared/enums/nav-enum";

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit, OnChanges {
    @Input() navName: NavEnum = this.getNavEnum.NONE;
    @Output() hideSubMenu = new EventEmitter<NavEnum>();
    public responsiveTranslationAction = this.getNavEnum.NONE;

    get getNavEnum() {
        return NavEnum;
    }

    ngOnChanges(simpleChanges: SimpleChanges): void {
        if (simpleChanges) {
            if (simpleChanges['navName']['previousValue'] !== simpleChanges['navName']['currentValue']) {
                if (simpleChanges['navName']['currentValue'] === this.getNavEnum.NONE) {
                    this.responsiveTranslationAction = this.getNavEnum.NONE;
                }
            }
        }
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    public onHideSubMenuChange(): void {
        this.navName = this.getNavEnum.NONE;
        this.hideSubMenu.emit(this.getNavEnum.NONE);
        this.responsiveTranslationAction = this.getNavEnum.NONE;
    }

    public responsiveSubMenuHandler(navName: NavEnum): void {
        this.responsiveTranslationAction = navName;
    }

    public back(): void {
        this.responsiveTranslationAction = this.getNavEnum.NONE;
    }

}
