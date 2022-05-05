import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingGlobalNetworkComponent } from './expanding-global-network.component';

describe('ExpandingGlobalNetworkComponent', () => {
  let component: ExpandingGlobalNetworkComponent;
  let fixture: ComponentFixture<ExpandingGlobalNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandingGlobalNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingGlobalNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
