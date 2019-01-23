import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaEntregaFormComponent } from './nova-entrega-form.component';

describe('NovaEntregaFormComponent', () => {
  let component: NovaEntregaFormComponent;
  let fixture: ComponentFixture<NovaEntregaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaEntregaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaEntregaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
