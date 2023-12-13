import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingComponent } from './branding.component';

describe('BrandingComponent', () => {
  let component: BrandingComponent;
  let fixture: ComponentFixture<BrandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrandingComponent]
    });
    fixture = TestBed.createComponent(BrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
