import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIntroCardComponent } from './hero-intro-card.component';

describe('HeroIntroCardComponent', () => {
  let component: HeroIntroCardComponent;
  let fixture: ComponentFixture<HeroIntroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroIntroCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
