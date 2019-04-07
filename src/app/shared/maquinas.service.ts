import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, take, map } from 'rxjs/operators';
import { Maquina } from './maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  private readonly API = 'http://localhost:8080/maquinas/';

  private montante: number;

  constructor(private http: HttpClient) { }

  findAllMaquinas() {
    return this.http.get<Maquina[]>(this.API).pipe(
      tap(console.log),
      take(1),
    );
  }

  public setMontante(montante: number) {
    this.montante = montante;
  }

  public getMontante() {
    return this.montante;
  }

  getTipoPagamento() {
    return [
      {valor: 'Direto', desc: 'Sim'},
      {valor: 'Leasing', desc: 'Nao'}
    ];
  }

}
