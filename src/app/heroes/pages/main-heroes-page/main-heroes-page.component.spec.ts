import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeroesPageComponent } from './main-heroes-page.component';

describe('MainHeroesPageComponent', () => {
  let component: MainHeroesPageComponent;
  let fixture: ComponentFixture<MainHeroesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeroesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
