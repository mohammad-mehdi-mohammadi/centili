import {
    Component,
    OnDestroy,
    OnInit, Renderer2
} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {ScrollDirectionEnum} from "../../../../shared/enums/scroll-direction-enum";
import {NavEnum} from "../../../../shared/enums/nav-enum";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private lastScrollTop = 0;
    public direction = this.getScrollDirection.ZERO;
    private pageLoadedFirstTime = true;
    public navName: NavEnum = this.getNavEnum.NONE;
    private scrollTop = 0;
    public responsiveNavFlag = false;
    get getScrollDirection() {
        return ScrollDirectionEnum;
    }

    get getNavEnum() {
        return NavEnum;
    }

    constructor(private renderer: Renderer2) {

        this.subscription = fromEvent(window, 'scroll')
            .subscribe(() => {
                this.scrollTop = document.documentElement.scrollTop;
                if (this.pageLoadedFirstTime) {
                    if (this.scrollTop) {
                        this.direction = this.getScrollDirection.UP;
                    }
                    this.pageLoadedFirstTime = false
                } else {
                    this.setScrollDirection()
                }

            });
    }

    ngOnInit(): void {
    }

    public displaySubMenu(navName: NavEnum) {

        switch (true) {
            case this.navName === this.getNavEnum.NONE:
                this.navName = navName;
                this.bodyOverflowSetter();
                this.direction = this.getScrollDirection.UP;
                break;
            case navName !== this.navName:
                this.navName = this.getNavEnum.NONE;
                setTimeout(() => {
                    this.navName = navName;
                    this.direction = this.getScrollDirection.UP;
                }, 200);
                break;
            default:
                this.navName = this.getNavEnum.NONE;
                this.bodyOverflowRemover();
                this.navStyleHandlerOnZero();
                break;
        }
    }

    private setScrollDirection(): void {
        switch (true) {
            case !this.scrollTop:
                if (this.direction !== this.getScrollDirection.ZERO) {
                    this.direction = this.getScrollDirection.ZERO;
                }
                break;
            case this.scrollTop > this.lastScrollTop:
                if (this.direction !== this.getScrollDirection.DOWN) {
                    this.direction = this.getScrollDirection.DOWN;
                }
                break;
            default:
                if (this.direction !== this.getScrollDirection.UP) {
                    this.direction = this.getScrollDirection.UP;
                }
                break;
        }

        this.lastScrollTop = this.scrollTop <= 0 ? 0 : this.scrollTop;
    }

    public onHideSubMenuChange(event: NavEnum): void {
        this.bodyOverflowRemover();
        this.navName = this.getNavEnum.NONE;
        this.navStyleHandlerOnZero();
        this.responsiveNavFlag = false;
    }

    private bodyOverflowRemover(): void {
        this.renderer.removeClass(document.body, 'overflow-y-hidden');
    }
    private bodyOverflowSetter(): void {
        this.renderer.addClass(document.body, 'overflow-y-hidden');
    }
    private navStyleHandlerOnZero(): void {
        if (!this.scrollTop) {
            this.direction = this.getScrollDirection.ZERO
        }
    }

    public displayNavHandler(): void {

        this.responsiveNavFlag = !this.responsiveNavFlag;
        if (this.responsiveNavFlag) {
            this.navName = this.getNavEnum.RESPONSIVE;
            this.bodyOverflowSetter();
            this.direction = this.getScrollDirection.UP;
        } else {
            this.bodyOverflowRemover();
            this.navName = this.getNavEnum.NONE
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
