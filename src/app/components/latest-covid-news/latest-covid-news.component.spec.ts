import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCovidNewsComponent } from './latest-covid-news.component';

describe('LatestCovidNewsComponent', () => {
  let component: LatestCovidNewsComponent;
  let fixture: ComponentFixture<LatestCovidNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestCovidNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestCovidNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
