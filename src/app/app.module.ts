import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { OrdensDeServicoComponent } from './pages/ordens-de-servico/ordens-de-servico.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { BaseDeConhecimentoComponent } from './pages/base-de-conhecimento/base-de-conhecimento.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ClientesComponent,
    ProdutosComponent,
    ServicosComponent,
    FinanceiroComponent,
    VendasComponent,
    OrdensDeServicoComponent,
    EstoqueComponent,
    FornecedoresComponent,
    BaseDeConhecimentoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
