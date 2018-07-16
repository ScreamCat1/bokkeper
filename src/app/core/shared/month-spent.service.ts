import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStoreService } from './local-store.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface SpentCategoryMoney {
  sum: number;
  category: string;
  description: string;
}

interface MoneyDetails {
  sum: number;
  sumLeft: number;
  sumSpent: number;
}

@Injectable()
export class MonthSpentService {
  categories: Array<string> = [
    'food',
    'public transport'
  ];

  money: MoneyDetails;
  observable = new BehaviorSubject(this.getAllSum());
  private allSpentMoneyInMonth: Array<SpentCategoryMoney> = [];
  private category: string;

  constructor(
    private router: Router,
    private localStoreService: LocalStoreService
  ) {}

  addSpentMoneyToCategory(obj) {
    this.allSpentMoneyInMonth.push({
      ...obj,
      category: this.category
    });

    this.localStoreService.setItem('sumSpent', `${this.calculateAllSpentSum()}`);

    this.observable.next(this.getAllSum());

    this.router.navigate([{ outlets: { popup: null }}]);
  }

  openPopup(category: string): void {
    this.category = category;
    this.router.navigate([{ outlets: { popup: ['popup'] }}]);
  }

  private calculateAllSpentSum(): number {
    return this.allSpentMoneyInMonth.reduce((accumulator, currentValue) => accumulator + Number(currentValue.sum), 0);
  }

  private getSum(key: string): number {
    return Number(this.localStoreService.getItem(key));
  }

  private getAllSum(): MoneyDetails {
    return {
      sum: this.getSum('sum'),
      sumSpent: this.getSum('sumSpent'),
      sumLeft: this.getSum('sum') - this.getSum('sumSpent')
    };
  }
}
