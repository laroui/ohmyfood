import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPalgoutsComponent } from './m-palgouts.component';

describe('MPalgoutsComponent', () => {
  let component: MPalgoutsComponent;
  let fixture: ComponentFixture<MPalgoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPalgoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPalgoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
