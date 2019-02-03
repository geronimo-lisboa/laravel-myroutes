import { Component, OnInit, Input } from '@angular/core';
import {RouteStep} from "../../model/RouteStep";

@Component({
  selector: 'app-route-step-item',
  templateUrl: './route-step-item.component.html',
  styleUrls: ['./route-step-item.component.css']
})
export class RouteStepItemComponent implements OnInit {
  @Input() step:RouteStep;
  constructor() { }

  ngOnInit() {
  }

}
