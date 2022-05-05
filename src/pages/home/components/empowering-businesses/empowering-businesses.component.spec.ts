import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoweringBusinessesComponent } from './empowering-businesses.component';

describe('EmpoweringBusinessesComponent', () => {
  let component: EmpoweringBusinessesComponent;
  let fixture: ComponentFixture<EmpoweringBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoweringBusinessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoweringBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
