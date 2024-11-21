import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',  // Alterado de 'app-home' para 'app-inicio'
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',  // Alterado de 'home.component.html' para 'inicio.component.html'
  styleUrls: ['./inicio.component.css']  // Alterado de 'home.component.css' para 'inicio.component.css'
})
export class InicioComponent implements OnInit {  // Alterado de HomeComponent para InicioComponent

  constructor(private service: OrderDetailsService) { }
  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
