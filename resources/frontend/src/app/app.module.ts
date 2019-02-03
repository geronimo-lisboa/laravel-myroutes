import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { EntregaItemComponent } from './entrega-item/entrega-item.component';
import { ListaEntregaComponent } from './lista-entrega/lista-entrega.component';
import { ListaEntregaHeaderComponent } from './lista-entrega-header/lista-entrega-header.component';
import { ListaEntregaFooterComponent } from './lista-entrega-footer/lista-entrega-footer.component';
import { NovaEntregaFormComponent } from './nova-entrega-form/nova-entrega-form.component';
import { EntregaDetalheComponent } from './entrega-detalhe/entrega-detalhe.component';
import { RouteStepItemComponent } from './route-step-item/route-step-item.component';
import { RouteStepsComponent } from './route-steps/route-steps.component';
import { ServerCommunication} from "../infra/ServerCommunication";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EntregaItemComponent,
    ListaEntregaComponent,
    ListaEntregaHeaderComponent,
    ListaEntregaFooterComponent,
    NovaEntregaFormComponent,
    EntregaDetalheComponent,
    RouteStepItemComponent,
    RouteStepsComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule
  ],
  providers: [ServerCommunication],
  bootstrap: [AppComponent]
})
export class AppModule { }
