import { Component, OnInit , Input} from '@angular/core';
import {Entrega} from "../model/Entrega";
import {ServerCommunication} from "../infra/ServerCommunication";

@Component({
  selector: 'app-entrega-detalhe',
  templateUrl: './entrega-detalhe.component.html',
  styleUrls: ['./entrega-detalhe.component.css']
})
export class EntregaDetalheComponent implements OnInit {
  server:ServerCommunication;
  @Input() entrega:Entrega;
  constructor() {
    this.server = new ServerCommunication();
  }

  ngOnInit() {
  }

  onCalcularRotaClick() {
    this.server.getRoute(this.entrega)
        .then(data=>{
          console.log(data);
        });
  }
}
