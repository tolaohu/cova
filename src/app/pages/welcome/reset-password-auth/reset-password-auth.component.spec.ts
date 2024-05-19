import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordAuthComponent } from './reset-password-auth.component';

describe('ResetPasswordAuthComponent', () => {
  let component: ResetPasswordAuthComponent;
  let fixture: ComponentFixture<ResetPasswordAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordAuthComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
