import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthPartnerComponent } from './growth-partner.component';

describe('GrowthPartnerComponent', () => {
  let component: GrowthPartnerComponent;
  let fixture: ComponentFixture<GrowthPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
