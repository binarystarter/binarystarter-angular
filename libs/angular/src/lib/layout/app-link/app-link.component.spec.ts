import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLinkComponent } from './app-link.component';

describe('AppLinkComponent', () => {
  let component: AppLinkComponent;
  let fixture: ComponentFixture<AppLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
