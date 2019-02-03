import { Component, OnInit, Input } from '@angular/core';
import {RouteStep} from "../../model/RouteStep";
import {ViewModelService} from "../view-model.service";

@Component({
  selector: 'app-route-step-item',
  templateUrl: './route-step-item.component.html',
  styleUrls: ['./route-step-item.component.css']
})
export class RouteStepItemComponent implements OnInit {
  @Input() step:RouteStep;
  viewService : ViewModelService;
  constructor(vm:ViewModelService) {
    this.viewService = vm;
  }

  ngOnInit() {
  }

}
