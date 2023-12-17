import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  constructor() {}

  calculateDiscount(price: number, isVip: boolean): number {
    if (price < 15000) {
      return 0;
    } else if (price >= 15000 && price < 20000 && isVip) {
      return 0.05;
    } else if (price >= 20000) {
      return 0.07;
    }
    return 0;
  }
}
