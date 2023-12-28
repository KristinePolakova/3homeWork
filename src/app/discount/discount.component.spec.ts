import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountComponent } from './discount.component';

describe('DiscountComponent', () => {
  let component: DiscountComponent;
  let fixture: ComponentFixture<DiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give no discount for price below €15,000', () => {
    expect(component.calculateDiscount(14999, false)).toBe(0);
    expect(component.calculateDiscount(14999, true)).toBe(0);
  });

  it('should give no discount for non-VIP for price between €15,000 and €20,000', () => {
    expect(component.calculateDiscount(15000, false)).toBe(0);
    expect(component.calculateDiscount(15001, false)).toBe(0);
    expect(component.calculateDiscount(19999, false)).toBe(0);
  });

  it('should give a 5% discount for VIP for price between €15,000 and €20,000', () => {
    expect(component.calculateDiscount(15000, true)).toBe(0.05);
    expect(component.calculateDiscount(15001, true)).toBe(0.05);
    expect(component.calculateDiscount(19999, true)).toBe(0.05);
  });

  it('should give a 7% discount for VIP and non-VIP for price at €20,000', () => {
    expect(component.calculateDiscount(20000, false)).toBe(0.07);
    expect(component.calculateDiscount(20000, true)).toBe(0.07);
  });

  it('should give a 7% discount for VIP and non-VIP for price above €20,000', () => {
    expect(component.calculateDiscount(20001, false)).toBe(0.07);
    expect(component.calculateDiscount(20001, true)).toBe(0.07);
  });
});
