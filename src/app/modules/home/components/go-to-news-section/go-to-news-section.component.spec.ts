import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToNewsSectionComponent } from './go-to-news-section.component';

describe('GoToNewsSectionComponent', () => {
  let component: GoToNewsSectionComponent;
  let fixture: ComponentFixture<GoToNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToNewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
