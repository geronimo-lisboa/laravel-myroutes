import { Component, OnInit } from '@angular/core';
import {ServerCommunication} from "../infra/ServerCommunication";

@Component({
  selector: 'app-lista-entrega-footer',
  templateUrl: './lista-entrega-footer.component.html',
  styleUrls: ['./lista-entrega-footer.component.css']
})
export class ListaEntregaFooterComponent implements OnInit {
  testeComm:ServerCommunication;
  constructor() {
    this.testeComm = new ServerCommunication();
  }

  ngOnInit() {
  }

  OnTesteApiClick() {
    this.testeComm.testeRouteApi()
        .then( resp =>{
          console.log(resp);
        });
  }
}
