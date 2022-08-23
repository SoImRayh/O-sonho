import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestalhesAgenciaComponent } from './destalhes-agencia.component';

describe('DestalhesAgenciaComponent', () => {
  let component: DestalhesAgenciaComponent;
  let fixture: ComponentFixture<DestalhesAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestalhesAgenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestalhesAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
