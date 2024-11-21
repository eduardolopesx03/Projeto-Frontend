import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidoFormComponent } from '../../components/pedido-form/pedido-form.component';

@Component({
  selector: 'app-pedido',  // Altere para 'app-pedido'
  standalone: true,
  imports: [RouterModule, PedidoFormComponent],
  templateUrl: './pedido.component.html',  // Altere para 'pedido.component.html'
  styleUrls: ['./pedido.component.css']  // Altere para 'pedido.component.css'
})
export class PedidoComponent {  // Altere para PedidoComponent

}
