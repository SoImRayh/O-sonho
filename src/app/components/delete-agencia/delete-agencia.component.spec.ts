import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAgenciaComponent } from './delete-agencia.component';

describe('DeleteAgenciaComponent', () => {
  let component: DeleteAgenciaComponent;
  let fixture: ComponentFixture<DeleteAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAgenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
