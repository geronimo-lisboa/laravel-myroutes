import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { EntregaItemComponent } from './entrega-item/entrega-item.component';
import { ListaEntregaComponent } from './lista-entrega/lista-entrega.component';
import { ListaEntregaHeaderComponent } from './lista-entrega-header/lista-entrega-header.component';
import { ListaEntregaFooterComponent } from './lista-entrega-footer/lista-entrega-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EntregaItemComponent,
    ListaEntregaComponent,
    ListaEntregaHeaderComponent,
    ListaEntregaFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
