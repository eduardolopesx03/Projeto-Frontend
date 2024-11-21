import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';  // Alterado de HomeComponent para InicioComponent

describe('InicioComponent', () => {  // Alterado de HomeComponent para InicioComponent
  let component: InicioComponent;  // Alterado de HomeComponent para InicioComponent
  let fixture: ComponentFixture<InicioComponent>;  // Alterado de HomeComponent para InicioComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent]  // Alterado de HomeComponent para InicioComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);  // Alterado de HomeComponent para InicioComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
