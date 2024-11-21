import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // RouterOutlet para gerenciar as rotas
import { InicioComponent } from './pages/inicio/inicio.component';  // Páginas
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { NavbarComponent } from './components/navbar/navbar.component'; //Navbar
import { DescricaoComponent } from './components/descricao/descricao.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { SharedModule } from './shared/shared.module';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,    // Para gerenciar rotas
    InicioComponent,   // Componentes de páginas
    CardapioComponent,
    ProdutoComponent,
    NavbarComponent, // Componentes Navbar e Footer
    DescricaoComponent,
    PedidoComponent,
    SharedModule,
    PedidoFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido para "styleUrls" no plural
})
export class AppComponent {
  title = 'web';
}
