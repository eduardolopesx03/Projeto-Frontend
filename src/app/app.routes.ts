import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'cardapio',component:CardapioComponent},
    {path:'cardapio/:id',component:MenupageComponent},
    {path:'produto',component:ProdutoComponent},
    {path:'pedido',component:PedidoComponent},
];
