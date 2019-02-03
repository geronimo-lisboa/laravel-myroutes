import { Component, OnInit , Input} from '@angular/core';
import {Entrega} from "../../model/Entrega";
import {RouteStep} from "../../model/RouteStep";
import {ServerCommunication} from "../../infra/ServerCommunication";
import {Entregas} from "../viewModel/Entregas";


@Component({
  selector: 'app-entrega-detalhe',
  templateUrl: './entrega-detalhe.component.html',
  styleUrls: ['./entrega-detalhe.component.css']
})
export class EntregaDetalheComponent implements OnInit {
  server:ServerCommunication;
  entregaVM:Entregas;
  @Input() entrega:Entrega;
  constructor() {
    this.server = new ServerCommunication();
    this.entregaVM = Entregas.getInstance();
  }

  ngOnInit() {
  }

  onCalcularRotaClick() {
    this.server.getRoute(this.entrega)
        .then(jsonData=>{
          let jsonStepsList = jsonData.routes[0].legs[0].steps;
          let steps = jsonStepsList.map(
              (json)=>new RouteStep(json.html_instructions, json.distance, json.duration)
          );
          Entregas.setCurrentRoute(steps);
        });
  }
}
