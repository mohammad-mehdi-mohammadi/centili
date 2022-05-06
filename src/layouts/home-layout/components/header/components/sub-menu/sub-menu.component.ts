import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {NavEnum} from "../../../../../../shared/enums/nav-enum";

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
  @Input() navName: NavEnum = this.getNavEnum.NONE;
  @Output() hideSubMenu = new EventEmitter<NavEnum>();
  get getNavEnum() {
    return NavEnum;
  }
  constructor() { }

  ngOnInit(): void {
  }

  public onHideSubMenuChange(): void {
    this.navName = this.getNavEnum.NONE;
    this.hideSubMenu.emit(this.getNavEnum.NONE);
  }

}
