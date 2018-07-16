import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthBudgetMainComponent } from './month-budget-main.component';

describe('MonthBudgetMainComponent', () => {
  let component: MonthBudgetMainComponent;
  let fixture: ComponentFixture<MonthBudgetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthBudgetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthBudgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
