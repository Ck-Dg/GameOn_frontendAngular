import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonplayedgamesComponent } from './seasonplayedgames.component';

describe('SeasonplayedgamesComponent', () => {
  let component: SeasonplayedgamesComponent;
  let fixture: ComponentFixture<SeasonplayedgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonplayedgamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonplayedgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
