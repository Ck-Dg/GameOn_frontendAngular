import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnbaPlayoffsComponent } from './wnba-playoffs.component';

describe('WnbaPlayoffsComponent', () => {
  let component: WnbaPlayoffsComponent;
  let fixture: ComponentFixture<WnbaPlayoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnbaPlayoffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnbaPlayoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
