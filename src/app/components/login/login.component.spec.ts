import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Location } from "@angular/common";

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to login', () => {
    component.User['email'] = 'test@test.com';
    component.User['password'] = '123456789';
    const loginBtn = fixture.debugElement.query(By.css('button.login-btn')).nativeElement;
    loginBtn.click();
    expect(component.submitted).toBeTrue;
  });


  it('should route to register page by clicking “Sign Up here” link', () => {
    const location: Location = TestBed.inject(Location);
    const link =fixture.debugElement.query(By.css('a')).nativeElement;
    link.click();
    expect(location.path()).toBe('/user-register');
  });
});
