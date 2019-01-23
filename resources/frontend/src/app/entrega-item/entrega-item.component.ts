import { Component, OnInit , Input} from '@angular/core';
import {Entrega} from "../model/Entrega";

@Component({
  selector: 'app-entrega-item',
  templateUrl: './entrega-item.component.html',
  styleUrls: ['./entrega-item.component.css']
})
export class EntregaItemComponent implements OnInit {
  cliente:string;
  origem:string;
  destino:string;
  data_entrega:string;
  @Input() entrega:Entrega;

  constructor() {
    this.cliente = 'foobar';
    this.origem = 'blablabla';
    this.destino = 'loren ipsun';
    this.data_entrega = '13/04/2018 15:00'
  }


  ngOnInit() {
  }

}
