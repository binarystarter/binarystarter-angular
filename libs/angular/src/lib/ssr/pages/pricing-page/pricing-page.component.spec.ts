import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPageComponent } from './pricing-page.component';

describe('PricingPageComponent', () => {
  let component: PricingPageComponent;
  let fixture: ComponentFixture<PricingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
