import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactIndustriesComponent } from './impact-industries.component';

describe('ImpactIndustriesComponent', () => {
  let component: ImpactIndustriesComponent;
  let fixture: ComponentFixture<ImpactIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactIndustriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
