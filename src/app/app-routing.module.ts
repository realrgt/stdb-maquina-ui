import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './maquinas/form/form.component';
import { ListComponent } from './maquinas/list/list.component';
import { NotFoundComponent } from './maquinas/not-found/not-found.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
