import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnbaAllstarComponent } from './wnba-allstar.component';

describe('WnbaAllstarComponent', () => {
  let component: WnbaAllstarComponent;
  let fixture: ComponentFixture<WnbaAllstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnbaAllstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnbaAllstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
