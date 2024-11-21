import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComponent } from './pedido.component';  // Altere para PedidoComponent

describe('PedidoComponent', () => {  // Altere para PedidoComponent
  let component: PedidoComponent;  // Altere para PedidoComponent
  let fixture: ComponentFixture<PedidoComponent>;  // Altere para PedidoComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoComponent]  // Altere para PedidoComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoComponent);  // Altere para PedidoComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
