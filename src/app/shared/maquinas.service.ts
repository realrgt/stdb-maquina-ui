import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, take } from 'rxjs/operators';
import { Maquina } from './maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  private readonly API = 'http://localhost:8080/maquinas/';

  constructor(private http: HttpClient) { }

  findAllMaquinas() {
    return this.http.get<Maquina[]>(this.API).pipe(
      tap(),
      take(1)
    );
  }

}
