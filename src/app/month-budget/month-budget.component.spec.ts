import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthBudgetComponent } from './month-budget.component';

describe('MonthBudgetComponent', () => {
  let component: MonthBudgetComponent;
  let fixture: ComponentFixture<MonthBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
