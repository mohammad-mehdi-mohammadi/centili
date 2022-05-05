import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetisingComponent } from './monetising.component';

describe('MonetisingComponent', () => {
  let component: MonetisingComponent;
  let fixture: ComponentFixture<MonetisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonetisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonetisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
