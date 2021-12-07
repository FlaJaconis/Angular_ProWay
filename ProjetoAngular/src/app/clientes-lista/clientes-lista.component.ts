import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})

export class ClientesListaComponent implements OnInit {
  lista:any[] = [];

  constructor(private clienteService:ClienteService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
   this.lista = this.clienteService.listar();
  }

}
