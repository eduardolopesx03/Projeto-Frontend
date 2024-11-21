import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioComponent } from './cardapio.component';  // Alterado de MenuComponent para CardapioComponent

describe('CardapioComponent', () => {  // Alterado de MenuComponent para CardapioComponent
  let component: CardapioComponent;  // Alterado de MenuComponent para CardapioComponent
  let fixture: ComponentFixture<CardapioComponent>;  // Alterado de MenuComponent para CardapioComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioComponent]  // Alterado de MenuComponent para CardapioComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioComponent);  // Alterado de MenuComponent para CardapioComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
