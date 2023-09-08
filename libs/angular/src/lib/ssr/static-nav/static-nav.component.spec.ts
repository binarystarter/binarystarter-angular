import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticNavComponent } from './static-nav.component';

describe('StaticNavComponent', () => {
  let component: StaticNavComponent;
  let fixture: ComponentFixture<StaticNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StaticNavComponent]
    });
    fixture = TestBed.createComponent(StaticNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
