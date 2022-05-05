import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {ScrollDirectionEnum} from "../../../../shared/enums/scroll-direction-enum";

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

    get getScrollDirection() {
        return ScrollDirectionEnum;
    }

    constructor() {
        this.subscription = fromEvent(window, 'scroll')
            .subscribe(() => {
                const scrollTop = document.documentElement.scrollTop;
                if (this.pageLoadedFirstTime) {
                    if (scrollTop) {
                        this.direction = this.getScrollDirection.UP;
                    }
                    this.pageLoadedFirstTime = false
                } else {
                    this.getYPosition(scrollTop)
                }

            });
    }

    ngOnInit(): void {
    }

    getYPosition(scrollTop: number): void {
        if (!scrollTop) {
            if (this.direction !== this.getScrollDirection.ZERO) {
                this.direction = this.getScrollDirection.ZERO;
            }
        } else if (scrollTop > this.lastScrollTop) {
            if (this.direction !== this.getScrollDirection.DOWN) {
                this.direction = this.getScrollDirection.DOWN;
            }
        } else {
            if (this.direction !== this.getScrollDirection.UP) {
                this.direction = this.getScrollDirection.UP;
            }
        }
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
