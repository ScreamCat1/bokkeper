import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreService {
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return localStorage.getItem(key) || '';
  }
}
