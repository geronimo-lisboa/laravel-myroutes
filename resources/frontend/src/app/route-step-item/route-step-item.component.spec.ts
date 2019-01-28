import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStepItemComponent } from './route-step-item.component';

describe('RouteStepItemComponent', () => {
  let component: RouteStepItemComponent;
  let fixture: ComponentFixture<RouteStepItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStepItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStepItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
