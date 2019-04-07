import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaquinasService } from 'src/app/shared/maquinas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  preserveWhitespaces: true
})
export class FormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  tipoPagamento: any[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private maquinasService: MaquinasService
  ) { }

  ngOnInit() {

    this.tipoPagamento = this.maquinasService.getTipoPagamento();

    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      contato: [null, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      montante: [null, [Validators.min(100000), Validators.required]],
      pagamento: [null, [Validators.required]]
    });

  }

  public onSearch() {
    this.submitted = true;
    console.log(this.form.value);

    const montante = this.form.value.montante;
    console.log(montante);

    this.maquinasService.setMontante(montante);

    if (this.form.valid) {
      this.router.navigate(['/list']);
    }
  }

  onClear() {
    this.submitted = false;
    this.form.reset();
    console.log(this.form);
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

}
