import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BaseDeConhecimentoComponent } from './pages/base-de-conhecimento/base-de-conhecimento.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { OrdensDeServicoComponent } from './pages/ordens-de-servico/ordens-de-servico.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { VendasComponent } from './pages/vendas/vendas.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'os', component: OrdensDeServicoComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'kb', component: BaseDeConhecimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
