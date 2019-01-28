import {Entrega} from "./Entrega";

export class RouteStep {
    html_instructions:string;
    distance: string;
    duration: string;

    constructor(_html_instructions:string, distance:string, duration:string){
        this.html_instructions =_html_instructions;
        this.distance = distance;
        this.duration = duration;
    }

}