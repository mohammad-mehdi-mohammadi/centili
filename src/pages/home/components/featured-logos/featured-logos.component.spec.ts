import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLogosComponent } from './featured-logos.component';

describe('FeaturedLogosComponent', () => {
  let component: FeaturedLogosComponent;
  let fixture: ComponentFixture<FeaturedLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedLogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
