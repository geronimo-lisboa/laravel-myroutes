import { Component, OnInit } from '@angular/core';
import {Entrega} from "../model/Entrega";
import {ServerCommunication} from "../infra/ServerCommunication";
import {Entregas} from "../viewModel/Entregas";

@Component({
  selector: 'app-nova-entrega-form',
  templateUrl: './nova-entrega-form.component.html',
  styleUrls: ['./nova-entrega-form.component.css']
})
export class NovaEntregaFormComponent implements OnInit {
  strCliente:string;
  strOrigem:string;
  strDestino:string;
  strData: string;
  serverInterface:ServerCommunication;
  constructor() {
    this.serverInterface = new ServerCommunication();
  }

  ngOnInit() {

  }

  onNewEntregaClick() {
    let entrega:Entrega = new Entrega(this.strCliente, this.strOrigem, this.strDestino, this.strData);
    if(entrega.isValid()){
      this.serverInterface.addEntrega(entrega)
          .then(json=>{
            Entregas.addCreatedEntrega(entrega);
          });
    }
  }

  onNewEntregaClientEdit(event:any) {
    console.log(event);
    this.strCliente = event.target.value;
  }

  onNewEntregaOrigemEdit(event:any){
    this.strOrigem = event.target.value;
  }

  onNewEntregaDestinoEdit(event:any){
    this.strDestino = event.target.value;
  }

  onNewEntregaDataEntregaEdit(event:any){
    this.strData = event.target.value;
  }

}
