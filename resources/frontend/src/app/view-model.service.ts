import { Injectable } from '@angular/core';
import {Entrega} from "../model/Entrega";
import {Entregas} from "./viewModel/Entregas";
import {ServerCommunication} from "../infra/ServerCommunication";

@Injectable({
  providedIn: 'root'
})
export class ViewModelService {
  serverInterface : ServerCommunication;
  entregas:Entrega[];
  selectedEntrega:Entrega;

  constructor(serverInterface:ServerCommunication) {
    console.log("ViewModelService instanciado");
    this.serverInterface = serverInterface;
    this.entregas = new Array<Entrega>();
    this.selectedEntrega = null;
  }

  getAllEntregas() {
    //Pega a lista de entregas
    this.serverInterface.getAllEntregas()
        .then( listaDeJsonDeEntregas => {
          let listOfEntregas = listaDeJsonDeEntregas.map(curr=>{
            return new Entrega(curr.cliente, curr.origem, curr.destino, curr.data_entrega);
          });
          this.entregas = listOfEntregas;
        });
  }

  beginPollingForUpdates() {
    setInterval(()=>{this.getAllEntregas();}, 5000);
  }
}
