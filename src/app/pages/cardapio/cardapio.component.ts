import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { VerCardapioCompletoComponent } from '../../components/ver-cardapio-completo/ver-cardapio-completo.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-cardapio',  // Alterado de 'app-menu' para 'app-cardapio'
  standalone: true,
  imports: [RouterModule, CommonModule, VerCardapioCompletoComponent, SharedModule],
  templateUrl: './cardapio.component.html',  // Alterado de 'menu.component.html' para 'cardapio.component.html'
  styleUrls: ['./cardapio.component.css']  // Alterado de 'menu.component.css' para 'cardapio.component.css'
})
export class CardapioComponent implements OnInit {  // Alterado de MenuComponent para CardapioComponent

  constructor(private service: OrderDetailsService) { }
  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails.filter(fd => [1, 2, 3].includes(fd.id));
  }
}
