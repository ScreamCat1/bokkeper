import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  private date: Date;

  constructor() {
    this.date = new Date();
  }

  daysInMonth(): number {
    return 33 - new Date(this.date.getFullYear(), this.date.getMonth(), 33).getDate();
  }

  getDaysLeft(): number {
    return this.daysInMonth() - this.date.getDate();
  }
}
