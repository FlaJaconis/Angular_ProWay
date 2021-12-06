import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesTiposComponent } from './clientes-tipos/clientes-tipos.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { CadastroTiposComponent } from './cadastro-tipos/cadastro-tipos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesTiposComponent,
    ClientesCadastroComponent,
    ClientesListaComponent,
    CadastroTiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
