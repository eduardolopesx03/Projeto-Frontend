// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando o módulo básico do Angular
import { CardComponent } from '../components/card/card.component'; // Ajuste o caminho conforme necessário
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],  // Declarando o CardComponent aqui
  imports: [CommonModule, RouterModule],  // Importando o CommonModule para que o Angular possa usar diretivas como ngIf, ngFor
  exports: [CardComponent]  // Exportando o CardComponent para poder ser usado em outros módulos
})
export class SharedModule { }
