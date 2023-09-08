import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterV1Component } from './footer-v1.component';

describe('FooterV1Component', () => {
  let component: FooterV1Component;
  let fixture: ComponentFixture<FooterV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterV1Component]
    });
    fixture = TestBed.createComponent(FooterV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
