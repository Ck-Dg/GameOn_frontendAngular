import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingswnbaComponent } from './standingswnba.component';

describe('StandingswnbaComponent', () => {
  let component: StandingswnbaComponent;
  let fixture: ComponentFixture<StandingswnbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingswnbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingswnbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
