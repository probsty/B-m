import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalSpecificPostComponent } from './journal-specific-post.component';

describe('JournalSpecificPostComponent', () => {
  let component: JournalSpecificPostComponent;
  let fixture: ComponentFixture<JournalSpecificPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalSpecificPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalSpecificPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
