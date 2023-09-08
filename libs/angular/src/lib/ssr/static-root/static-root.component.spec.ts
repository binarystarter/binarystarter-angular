import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticRootComponent } from './static-root.component';

describe('StaticRootComponent', () => {
  let component: StaticRootComponent;
  let fixture: ComponentFixture<StaticRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StaticRootComponent],
    });
    fixture = TestBed.createComponent(StaticRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
