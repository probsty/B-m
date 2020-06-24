import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFacebookComponent } from './auth-facebook.component';

describe('AuthFacebookComponent', () => {
  let component: AuthFacebookComponent;
  let fixture: ComponentFixture<AuthFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
