import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCardapioCompletoComponent } from './ver-cardapio-completo.component';

describe('VerCardapioCompletoComponent', () => {
  let component: VerCardapioCompletoComponent;
  let fixture: ComponentFixture<VerCardapioCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCardapioCompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCardapioCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
