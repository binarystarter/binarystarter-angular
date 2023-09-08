import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingSymbolComponent } from './branding-symbol.component';

describe('BrandingSymbolComponent', () => {
  let component: BrandingSymbolComponent;
  let fixture: ComponentFixture<BrandingSymbolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrandingSymbolComponent],
    });
    fixture = TestBed.createComponent(BrandingSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
