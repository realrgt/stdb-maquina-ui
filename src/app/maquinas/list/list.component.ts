import { Component, OnInit } from '@angular/core';
import { MaquinasService } from 'src/app/shared/maquinas.service';
import { Maquina } from 'src/app/shared/maquina';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  maquinas: Maquina[];

  constructor(
    private maquinasService: MaquinasService,
    private router: Router
  ) { }

  ngOnInit() {
    const montanteTitular = this.maquinasService.getMontante();
    console.log(montanteTitular);

    this.maquinasService.findAllMaquinas()
      .pipe(
        map(docs => docs.filter(s => s.valor <= montanteTitular))
      )
      .subscribe(
        dados => {
          this.maquinas = dados;
          console.log(this.maquinas);
          if (!(this.maquinas.length > 0)) {
            this.router.navigate(['/not-found']);
          }
        }
      );


  }

}
