import { Component, OnInit } from '@angular/core';
import { MaquinasService } from 'src/app/shared/maquinas.service';
import { Maquina } from 'src/app/shared/maquina';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  maquinas: Maquina[];

  constructor(
    private maquinasService: MaquinasService,
  ) { }

  ngOnInit() {

    this.maquinasService.findAllMaquinas().subscribe(
      dados => {
        this.maquinas = dados;
        console.log(this.maquinas);
      }
    );

  }

}
