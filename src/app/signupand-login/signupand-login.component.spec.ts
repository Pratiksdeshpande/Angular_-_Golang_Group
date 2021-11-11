import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupandLoginComponent } from './signupand-login.component';

describe('SignupandLoginComponent', () => {
  let component: SignupandLoginComponent;
  let fixture: ComponentFixture<SignupandLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupandLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupandLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
