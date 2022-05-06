import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBoxesComponent } from './featured-boxes.component';

describe('FeaturedBoxesComponent', () => {
  let component: FeaturedBoxesComponent;
  let fixture: ComponentFixture<FeaturedBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
