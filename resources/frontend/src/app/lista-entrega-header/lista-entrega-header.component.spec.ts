import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregaHeaderComponent } from './lista-entrega-header.component';

describe('ListaEntregaHeaderComponent', () => {
  let component: ListaEntregaHeaderComponent;
  let fixture: ComponentFixture<ListaEntregaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEntregaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
