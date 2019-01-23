import {Entrega} from "../model/Entrega";

export class Entregas {
    static instance: Entregas = null;
    entregas : Entrega[] = [];

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
}