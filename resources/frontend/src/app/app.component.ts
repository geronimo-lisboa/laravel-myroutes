import { Component, OnInit } from '@angular/core';
import {ServerCommunication} from "../infra/ServerCommunication";
import {Entrega} from "../model/Entrega";
import {Entregas} from "./viewModel/Entregas";
import {ViewModelService} from "./view-model.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //O objeto de comunicação com o servidor.
  serverInterface:ServerCommunication;
  title = 'MyRouter';
  //entregas = Entregas.getInstance();
  viewModel : ViewModelService;

  constructor(serverInterface : ServerCommunication, vm:ViewModelService) {
      this.serverInterface = serverInterface;
      this.viewModel = vm;
  }

  ngOnInit() {
      this.viewModel.getAllEntregas();
      this.viewModel.beginPollingForUpdates();
    // //Pega a lista de entregas
    // this.serverInterface.getAllEntregas()
    //     .then( listaDeJsonDeEntregas => {
    //       let listOfEntregas = listaDeJsonDeEntregas.map(curr=>{
    //         return new Entrega(curr.cliente, curr.origem, curr.destino, curr.data_entrega);
    //       });
    //       Entregas.setEntregas(listOfEntregas);
    //       //this.entregas = listOfEntregas;
    //     });

    //depois da 1a invocação é uma boa consultar ocasionalmente pra ver se a lista está atualizada.
//    setInterval(()=>{this.updateData();}, 5000);

  }

  updateData(){
      // this.serverInterface.getAllEntregas()
      //     .then( listaDeJsonDeEntregas =>
      //     {
      //         let listOfEntregas = listaDeJsonDeEntregas.map(curr=>{
      //             return new Entrega(curr.cliente, curr.origem, curr.destino, curr.data_entrega);
      //         });
      //         Entregas.setEntregas(listOfEntregas);
      //         //this.entregas = listOfEntregas;
      //     });
  }


}
