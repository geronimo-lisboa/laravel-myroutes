import {RouteStep} from "./RouteStep";

export class Entrega {
    cliente:string;
    origem:string;
    destino:string;
    data_entrega:string;
    constructor(_clt:string, _or:string, _dest:string, de:string)
    {
        this.cliente = _clt;
        this.origem = _or;
        this.destino = _dest;
        this.data_entrega = de;
    }

    isValid():boolean{
        if(this.cliente == null || this.cliente.length==0){
            return false;
        }
        if(this.origem == null || this.origem.length==0){
            return false;
        }
        if(this.destino == null || this.destino.length==0){
            return false;
        }
        return true;
    }
}