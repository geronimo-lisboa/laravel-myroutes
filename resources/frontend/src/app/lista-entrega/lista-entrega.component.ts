import { Component, OnInit, Input } from '@angular/core';
import {ViewModelService} from "../view-model.service";
import {Entrega} from "../../model/Entrega";

@Component({
  selector: 'app-lista-entrega',
  templateUrl: './lista-entrega.component.html',
  styleUrls: ['./lista-entrega.component.css']
})
export class ListaEntregaComponent implements OnInit {
  // @Input() entregas: Entrega[];
  viewModel:ViewModelService;
  constructor(vm:ViewModelService) {
    // this.entregas = [];
    this.viewModel = vm;
  }

  ngOnInit() {
  }

}
