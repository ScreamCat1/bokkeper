import { Component, OnInit } from '@angular/core';

import { DateService } from '../../core/shared/date.service';
import { LocalStoreService } from '../../core/shared/local-store.service';
import { MonthSpentService } from '../../core/shared/month-spent.service';

@Component({
  selector: 'app-month-budget-main',
  templateUrl: './month-budget-main.component.html',
  styleUrls: ['./month-budget-main.component.scss']
})
export class MonthBudgetMainComponent implements OnInit {
  sum: number;
  sumLeft: number;
  sumSpent: number;
  sumPerDay: number;
  daysLeft: number;

  constructor(
    private dateService: DateService,
    private localStoreService: LocalStoreService,
    private monthSpentService: MonthSpentService
  ) { }

  ngOnInit() {
    this.daysLeft = this.dateService.getDaysLeft();

    this.monthSpentService.observable.subscribe(({ sum, sumSpent, sumLeft }) => {
      console.log({ sum, sumSpent, sumLeft });
      this.sum = sum;
      this.sumSpent = sumSpent;
      this.sumLeft = sumLeft;
      this.sumPerDay = Math.round(this.sumLeft / this.dateService.daysInMonth());
    });
  }


  addedSpentMoneyToCategory({ target: { dataset: { type }}}): void {
    this.monthSpentService.openPopup(type);
  }
}
