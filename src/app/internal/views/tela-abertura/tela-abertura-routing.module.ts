import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaAberturaComponent } from './containers/tela-abertura.component';

const routes: Routes = [
  { path: '', component: TelaAberturaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaAberturaRoutingModule { }
