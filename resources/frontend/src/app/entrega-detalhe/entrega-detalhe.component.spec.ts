import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaDetalheComponent } from './entrega-detalhe.component';

describe('EntregaDetalheComponent', () => {
  let component: EntregaDetalheComponent;
  let fixture: ComponentFixture<EntregaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
