import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregaFooterComponent } from './lista-entrega-footer.component';

describe('ListaEntregaFooterComponent', () => {
  let component: ListaEntregaFooterComponent;
  let fixture: ComponentFixture<ListaEntregaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEntregaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
