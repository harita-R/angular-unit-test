import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain copyright text', () => {
    const text =fixture.debugElement.query(By.css('.copyright')).nativeElement;
    expect(text.textContent).toContain('Copyright');
  });

  it('should contain 3 social media contact buttons ', () => {
    const btns = fixture.debugElement.queryAll(By.css('a.btn'));
    expect(btns.length).toEqual(3);
  });
});
