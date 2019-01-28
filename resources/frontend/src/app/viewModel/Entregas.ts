import {Entrega} from "../model/Entrega";
import {RouteStep} from "../model/RouteStep";

export class Entregas {
    static instance: Entregas = null;
    entregas : Entrega[] = [];
    currentRoute : RouteStep[];
    selectedEntrega : Entrega;


    private constructor(){
        this.selectedEntrega = null;
        this.currentRoute = null;
    }

    static setCurrentEntrega(e:Entrega){
        this.instance.selectedEntrega = e;
    }

    private static instantiationGuard(){
        if(this.instance == null){
            this.instance = new Entregas();
        }
    }
    static getInstance(){
        this.instantiationGuard();
        return this.instance;
    }

    static setEntregas(_entregas:Entrega[]){
        this.instantiationGuard();
        this.instance.entregas = _entregas;
    }

    static addCreatedEntrega(entrega: Entrega) {
        this.instantiationGuard();
        this.instance.entregas.push(entrega);
    }

    static setCurrentRoute(param:RouteStep[]) {
        this.instance.currentRoute = param;
    }
}