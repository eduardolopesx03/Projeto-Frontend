import { Injectable } from '@angular/core'; // Importa o decorador Injectable do Angular

@Injectable({
  providedIn: 'root' // Define o serviço como disponível em toda a aplicação
})
export class OrderDetailsService {

  constructor() { } // Construtor do serviço

  // Array de detalhes dos alimentos
  foodDetails = [
    {
      id: 1,
      foodName: "X-Vegan", // Nome do prato
      foodDetails: "Pão, Habúrguer, alface, tomate, queijo e maionese", // Descrição do prato
      foodImg: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUlrE9olvBCYMARAAjEgm1Zfudlq5ukPywFoFcEI6BrJzWFJXH", // URL da imagem
    },
    {
      id: 2,
      foodName: "X-Fitness",
      foodDetails: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      foodImg: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUlrE9olvBCYMARAAjEgm1Zfudlq5ukPywFoFcEI6BrJzWFJXH"
    },
    {
      id: 3,
      foodName: "X-infarto",
      foodDetails: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      foodImg: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUlrE9olvBCYMARAAjEgm1Zfudlq5ukPywFoFcEI6BrJzWFJXH"
    },
    {
      id: 4,
      foodName: "X-Alface-Premium",
      foodDetails: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      foodImg: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUlrE9olvBCYMARAAjEgm1Zfudlq5ukPywFoFcEI6BrJzWFJXH",
      foodPrice: "35"
    },
    {
      id: 5,
      foodName: "X-Tomate",
      foodDetails: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      foodImg: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUlrE9olvBCYMARAAjEgm1Zfudlq5ukPywFoFcEI6BrJzWFJXH"
    },
    {
      id: 6,
      foodName: "X-Frutas",
      foodDetails: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      foodImg: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUlrE9olvBCYMARAAjEgm1Zfudlq5ukPywFoFcEI6BrJzWFJXH"
    },
  ]
}
