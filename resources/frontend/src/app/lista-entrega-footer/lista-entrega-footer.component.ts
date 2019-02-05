import { Component, OnInit } from '@angular/core';
import {ServerCommunication} from "../../infra/ServerCommunication";
import {ViewModelService} from "../view-model.service";

@Component({
  selector: 'app-lista-entrega-footer',
  templateUrl: './lista-entrega-footer.component.html',
  styleUrls: ['./lista-entrega-footer.component.css']
})
export class ListaEntregaFooterComponent implements OnInit {
  viewModel : ViewModelService;
  constructor(vm:ViewModelService) {
    this.viewModel = vm;
  }

  ngOnInit() {
  }


}
