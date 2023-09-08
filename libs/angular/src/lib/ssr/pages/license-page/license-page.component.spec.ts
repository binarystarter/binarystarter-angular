import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePageComponent } from './license-page.component';

describe('LicensePageComponent', () => {
  let component: LicensePageComponent;
  let fixture: ComponentFixture<LicensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
