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
    expect(component.calculateDiscount(10000, false)).toBe(0);
    expect(component.calculateDiscount(10000, true)).toBe(0);
  });

  it('should give no discount for non-VIPs for price between €15,000 and €20,000', () => {
    expect(component.calculateDiscount(15000, false)).toBe(0);
  });

  it('should give a 5% discount for VIPs for price between €15,000 and €20,000', () => {
    expect(component.calculateDiscount(18000, true)).toBe(0.05);
  });

  it('should give a 7% discount for price above €20,000', () => {
    expect(component.calculateDiscount(25000, false)).toBe(0.07);
    expect(component.calculateDiscount(25000, true)).toBe(0.07);
  });
});
