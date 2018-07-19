import { Component, OnInit } from '@angular/core';

import { DateService } from '../../core/shared/date.service';
import { WhttpService } from '../../core/shared/whttp.service';
import { MonthSpentService } from '../../core/shared/month-spent.service';

interface Category {
  category: string;
}
interface CategoryDetails {
  category: string;
  sumSpent: number;
}
@Component({
  selector: 'app-month-budget-main',
  templateUrl: './month-budget-main.component.html',
  styleUrls: ['./month-budget-main.component.scss']
})
export class MonthBudgetMainComponent implements OnInit {
  sum: number;
  sumLeft: number;
  sumSpent: number;
  daysLeft: number;
  sumPerDay: number;
  needRegistration = true;
  categories: Array<Category> = [];

  constructor(
    private whttp: WhttpService,
    private dateService: DateService,
    private monthSpentService: MonthSpentService
  ) { }

  ngOnInit() {
    this.daysLeft = this.dateService.getDaysLeft();

    this.whttp.getUserMonthSum().subscribe( response => {
      if (!!response.value) {
        this.needRegistration = false;
      }
    });

    this.monthSpentService.observable.subscribe(({ sum, sumSpent, categories }) => {
      this.sum = sum;
      this.sumLeft = sum - sumSpent;
      this.sumSpent = sumSpent;
      this.sumPerDay = Math.round(this.sumLeft / this.dateService.getDaysLeft());
      this.categories = categories;
    });
  }


  addSpentMoneyToCategory({ target: { type }}): void {
    if (type) {
      this.monthSpentService.addSpentMoneyToCategory(type);
    }
  }

  addNewCategory() {
    this.monthSpentService.addNewCategory();
  }

  isNeedRegistration(): boolean {
    return this.needRegistration;
  }
}
