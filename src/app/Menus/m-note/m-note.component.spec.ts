import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MNoteComponent } from './m-note.component';

describe('MNoteComponent', () => {
  let component: MNoteComponent;
  let fixture: ComponentFixture<MNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
