import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsWNBAComponent } from './odds-wnba.component';

describe('OddsWNBAComponent', () => {
  let component: OddsWNBAComponent;
  let fixture: ComponentFixture<OddsWNBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddsWNBAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsWNBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
