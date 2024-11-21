import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  // Informando ao TypeScript que essas propriedades vão ser inicializadas
  @Input() foodImg!: string;
  @Input() foodName!: string;
  @Input() foodDetails!: string;
  @Input() foodPrice!: string;

  // Qualquer lógica adicional que você precise pode ser adicionada aqui
}
