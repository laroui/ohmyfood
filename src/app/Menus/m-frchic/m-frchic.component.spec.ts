import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFrchicComponent } from './m-frchic.component';

describe('MFrchicComponent', () => {
  let component: MFrchicComponent;
  let fixture: ComponentFixture<MFrchicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFrchicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFrchicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
