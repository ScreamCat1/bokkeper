import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WhttpService {
  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getLoginCred() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserMonthSum() {
    return this.http.get(`${this.baseUrl}/sum`)
    .pipe(
      catchError(val => of(undefined))
    );
  }

  setUserMonthSum(sum) {
    return this.http.post(`${this.baseUrl}/sum`, sum);
  }

  setMonthSumSpent(allSpentSum) {
    return this.http.post(`${this.baseUrl}/month-spent-sum`, allSpentSum);
  }

  getMonthSumSpent() {
    return this.http.get(`${this.baseUrl}/month-spent-sum`);
  }

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  setCategory(category) {
    return this.http.post(`${this.baseUrl}/categories`, { category });
  }
}
