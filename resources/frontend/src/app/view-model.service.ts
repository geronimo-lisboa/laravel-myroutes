import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewModelService {

  constructor() {
    console.log("ViewModelService instanciado");
  }

  foo(){
    console.log("foobar?");
  }
}
