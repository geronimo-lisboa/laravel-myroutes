import { Component, OnInit } from '@angular/core';
import {ServerCommunication} from "../../infra/ServerCommunication";
import {ViewModelService} from "../view-model.service";

@Component({
  selector: 'app-lista-entrega-footer',
  templateUrl: './lista-entrega-footer.component.html',
  styleUrls: ['./lista-entrega-footer.component.css']
})
export class ListaEntregaFooterComponent implements OnInit {
  testeComm:ServerCommunication;
  viewModel : ViewModelService;
  constructor(vm:ViewModelService) {
    this.testeComm = new ServerCommunication();
    this.viewModel = vm;
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
