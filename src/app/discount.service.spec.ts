import { TestBed } from '@angular/core/testing';
import { DiscountService } from './discount.service';

describe('DiscountService', () => {
  let service: DiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountService);
  });

  it('should give no discount for price below €15,000', () => {
    expect(service.calculateDiscount(10000, false)).toBe(0);
    expect(service.calculateDiscount(10000, true)).toBe(0);
  });

  it('should give no discount for non-VIPs for price between €15,000 and €20,000', () => {
    expect(service.calculateDiscount(15000, false)).toBe(0);
  });

  it('should give a 5% discount for VIPs for price between €15,000 and €20,000', () => {
    expect(service.calculateDiscount(18000, true)).toBe(0.05);
  });

  it('should give a 7% discount for price above €20,000', () => {
    expect(service.calculateDiscount(25000, false)).toBe(0.07);
    expect(service.calculateDiscount(25000, true)).toBe(0.07);
  });
});
