import { Injectable } from '@angular/core';
import {Entrega} from "../model/Entrega";
import {Entregas} from "./viewModel/Entregas";
import {ServerCommunication} from "../infra/ServerCommunication";
import {RouteStep} from "../model/RouteStep";

@Injectable({
  providedIn: 'root'
})
export class ViewModelService {
  serverInterface : ServerCommunication;
  entregas:Entrega[];
  currentRoute:RouteStep[];
  currentEntrega:Entrega;

  constructor(serverInterface:ServerCommunication) {
    console.log("ViewModelService instanciado");
    this.serverInterface = serverInterface;
    this.entregas = new Array<Entrega>();
    this.currentEntrega = null;
    this.currentRoute = null;
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

  createRoute(entrega:Entrega) {
    this.serverInterface.getRoute(entrega)
        .then(jsonData=>{
          let jsonStepList = jsonData.routes[0].legs[0].steps;
          let steps = jsonStepList.map(
              (json)=>new RouteStep(json.html_instructions, json.distance, json.duration)
          );
          this.currentRoute = steps;
        });
      // this.server.getRoute(this.entrega)
      //     .then(jsonData=>{
      //       let jsonStepsList = jsonData.routes[0].legs[0].steps;
      //       let steps = jsonStepsList.map(
      //           (json)=>new RouteStep(json.html_instructions, json.distance, json.duration)
      //       );
      //       Entregas.setCurrentRoute(steps);
      //     });

  }

  setCurrentEntrega(entrega: Entrega) {
    this.currentRoute = null;
    this.currentEntrega = entrega;
    // Entregas.setCurrentRoute(null);
    // Entregas.setCurrentEntrega(this.entrega);

  }

  createNewEntrega(entrega: Entrega) {
      this.serverInterface.addEntrega(entrega)
        .then(json=>{
            Entregas.addCreatedEntrega(entrega);
            this.entregas.push(entrega);

        });
  }
}
