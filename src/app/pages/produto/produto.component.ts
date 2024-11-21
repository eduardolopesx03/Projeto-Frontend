import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { VerCardapioCompletoComponent } from '../../components/ver-cardapio-completo/ver-cardapio-completo.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [RouterModule, CommonModule, VerCardapioCompletoComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails.filter(fd => [4, 5, 6].includes(fd.id));
  }  
}
