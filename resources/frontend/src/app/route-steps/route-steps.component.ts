import { Component, OnInit , Input} from '@angular/core';
import {RouteStep} from "../../model/RouteStep";
import {ServerCommunication} from "../../infra/ServerCommunication";
import {ViewModelService} from "../view-model.service";

@Component({
  selector: 'app-route-steps',
  templateUrl: './route-steps.component.html',
  styleUrls: ['./route-steps.component.css']
})
export class RouteStepsComponent implements OnInit {
  @Input() steps:RouteStep[];
  viewModel : ViewModelService;

  constructor(vm:ViewModelService) {
    this.viewModel = vm;
  }

  ngOnInit() {
  }

}
