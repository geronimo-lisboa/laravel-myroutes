import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStepsComponent } from './route-steps.component';

describe('RouteStepsComponent', () => {
  let component: RouteStepsComponent;
  let fixture: ComponentFixture<RouteStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
