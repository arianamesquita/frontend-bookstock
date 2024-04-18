import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('../tela-abertura/tela-abertura.module').then(m => m.TelaAberturaModule) },
      { path: 'produtos', loadChildren: () => import('../produtos/produtos.module').then(m => m.ProdutosModule) },
      { path: 'prateleiras', loadChildren: () => import('../prateleiras/prateleiras.module').then(m => m.PrateleirasModule) },
      { path: 'pedidos', loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosModule) },
      { path: 'graficos', loadChildren: () => import('../graficos/graficos.module').then(m => m.GraficosModule) },
      { path: 'equipe', loadChildren: () => import('../equipe/equipe.module').then(m => m.EquipeModule) },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
