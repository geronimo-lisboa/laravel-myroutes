import { Component, OnInit , Input} from '@angular/core';
import {RouteStep} from "../../model/RouteStep";

@Component({
  selector: 'app-route-steps',
  templateUrl: './route-steps.component.html',
  styleUrls: ['./route-steps.component.css']
})
export class RouteStepsComponent implements OnInit {
  @Input() steps:RouteStep[];

  constructor() { }

  ngOnInit() {
  }

}
