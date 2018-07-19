import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { WhttpService } from './whttp.service';

interface SpentCategoryMoney {
  sum: number;
  category: string;
  description: string;
}

interface DataDetails {
  sum: number;
  sumSpent: number;
  categories: Array<Category>;
}

interface Category {
  category: string;
  sumSpent: number;
}

@Injectable()
export class MonthSpentService {
  sum = 0;
  sumSpent = 0;
  private allSpentMoneyInMonth = [];
  private categories: Array<Category> = [];
  observable = new BehaviorSubject(this.getData());

  private category: string;

  constructor(
    private router: Router,
    private whttp: WhttpService
  ) {
    this.whttp.getUserMonthSum().subscribe((response: { value: number }) => {
      this.sum = Number(response.value);

      this.whttp.getCategories().subscribe((categories: Array<Category>) => { this.categories = categories; });

      this.whttp.getMonthSumSpent().subscribe((res: Array<SpentCategoryMoney>) => {
        this.allSpentMoneyInMonth = res;

        this.observable.next(this.getData());
      });
    });
  }

  saveSpentMoneyToCategory(obj) {
    const newSpent = {
      ...obj,
      category: this.category
    };

    this.allSpentMoneyInMonth.push(newSpent);

    this.whttp.setMonthSumSpent(newSpent)
      .subscribe(() => {
        this.observable.next(this.getData());
        this.router.navigate([{ outlets: { popup: null }}]);
      });
  }

  saveNewCategory({ category }: { category: string }) {
    this.whttp.setCategory(category)
      .subscribe((response: Category) => {
        this.categories.push(response);
        this.router.navigate([{ outlets: { popup: null }}]);
      });
  }

  addSpentMoneyToCategory(category: string): void {
    this.category = category;
    this.router.navigate([{ outlets: { popup: ['popup', 'addSpentMoney'] }}]);
  }

  addNewCategory(): void {
    this.router.navigate([{ outlets: { popup: ['popup', 'addNewCategory'] }}]);
  }

  private calculateAllSpentSum(category: string = ''): number {
    return this.allSpentMoneyInMonth
      .filter((c: SpentCategoryMoney) => {
        return category === '' ? c : c.category === category;
      })
      .reduce((accumulator, currentValue) => accumulator + Number(currentValue.sum), 0);
  }

  private recalculateCategories(): Array<Category> {
    return this.categories.map( category => ({...category, spentSum: this.calculateAllSpentSum(category.category) }));
  }

  private getData(): DataDetails {
    return {
      sum: this.sum,
      sumSpent: this.calculateAllSpentSum(),
      categories: this.recalculateCategories()
    };
  }
}
