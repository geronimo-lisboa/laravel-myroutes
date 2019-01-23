import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-entrega',
  templateUrl: './lista-entrega.component.html',
  styleUrls: ['./lista-entrega.component.css']
})
export class ListaEntregaComponent implements OnInit {
  entregas: string[];
  constructor() {
    this.entregas = ['','','', ''];
  }

  ngOnInit() {
  }

}
