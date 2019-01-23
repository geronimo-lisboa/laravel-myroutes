
export class ServerCommunication {
    ///Retorna a lista de jsons de entregas
    getAllEntregas():Promise<JSON>{
        return fetch('http://localhost:8000/api/entregas')
            .then(function (response) {
                return response.json();
            })
    }
    addEntrega():void{
        console.log("nao implementado");
    }
    updateEntrega():void{
        console.log("nao implementado");
    }
}