import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDelicesComponent } from './m-delices.component';

describe('MDelicesComponent', () => {
  let component: MDelicesComponent;
  let fixture: ComponentFixture<MDelicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDelicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDelicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
