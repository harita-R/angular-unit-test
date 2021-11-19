import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from "@angular/common";

import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logo containing text "My Stay"', () => {
     const logoText =fixture.debugElement.query(By.css('.navbar-brand')).nativeElement;
     expect(logoText.textContent).toBe('My Stay ');
  });

  it('should contain 6 nav links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('li.nav-item'));
    expect(navLinks.length).toEqual(6);
  });

  it('navigates to register page on clicking signup/signin button', () => {
    const location: Location = TestBed.inject(Location);
    const button =fixture.debugElement.query(By.css('button.btn')).nativeElement;
    button.click();
    expect(location.path()).toBe('/user-register');
  });
});
