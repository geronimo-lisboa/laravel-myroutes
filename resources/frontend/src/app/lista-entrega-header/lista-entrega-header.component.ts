import { Component, OnInit } from '@angular/core';
import {ViewModelService} from "../view-model.service";

@Component({
  selector: 'app-lista-entrega-header',
  templateUrl: './lista-entrega-header.component.html',
  styleUrls: ['./lista-entrega-header.component.css']
})
export class ListaEntregaHeaderComponent implements OnInit {
  viewModel:ViewModelService;
  constructor(vm:ViewModelService) {
    this.viewModel = vm;
  }

  ngOnInit() {
  }

}
