import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgenciasComponent } from './create-agencias.component';

describe('CreateAgenciasComponent', () => {
  let component: CreateAgenciasComponent;
  let fixture: ComponentFixture<CreateAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAgenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
