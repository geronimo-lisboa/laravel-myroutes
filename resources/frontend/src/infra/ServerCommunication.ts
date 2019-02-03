import {Entrega} from "../app/model/Entrega";
import { environment } from '../environments/environment';

export class ServerCommunication {
    prefix:string;
    constructor(){
        this.prefix = environment.baseUrl;
    }
    ///Retorna a lista de jsons de entregas
    getAllEntregas():Promise<any>{
        return fetch(this.prefix+'/api/entregas')
            .then(function (response) {
               // console.log(response);
                return response.json();
            })
    }

    testeRouteApi():Promise<any>{
        return fetch(this.prefix+'/api/testeRoutes')
            .then(function (response) {
                return response.text();
                //return response;
            })
    }



    addEntrega(entrega:Entrega):Promise<any>{
        let postData =  new FormData();
        postData.append('cliente', entrega.cliente);
        postData.append('origem', entrega.origem);
        postData.append('destino', entrega.destino);
        if(!(entrega.data_entrega == undefined || entrega.data_entrega == null || entrega.data_entrega=="")){
            postData.append('data_entrega', entrega.data_entrega);
        }
        return fetch(this.prefix+'/api/entregas',{
            method:'post',
            body:postData})
            .then(function (response) {
                return response.json();
            });
    }
    updateEntrega():void{
        console.log("nao implementado");
    }

    getRoute(entrega: Entrega):Promise<any> {
        console.log( entrega.destino.length );

        return fetch(this.prefix+'/api/rota/origem='+entrega.origem+'&destino='+entrega.destino )
            .then(function (response) {
                return response.json();
            });
    }
}