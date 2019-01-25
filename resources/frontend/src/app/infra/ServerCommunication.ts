import {Entrega} from "../model/Entrega";

export class ServerCommunication {
    ///Retorna a lista de jsons de entregas
    getAllEntregas():Promise<any>{
        console.log("foo");
        return fetch('/api/entregas')
            .then(function (response) {
                console.log(response);
                return response.json();
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
        return fetch('/api/entregas',{
            method:'post',
            body:postData})
            .then(function (response) {
                return response.json();
            });
    }
    updateEntrega():void{
        console.log("nao implementado");
    }
}