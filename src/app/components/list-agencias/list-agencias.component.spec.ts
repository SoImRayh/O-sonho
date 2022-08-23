import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgenciasComponent } from './list-agencias.component';

describe('ListAgenciasComponent', () => {
  let component: ListAgenciasComponent;
  let fixture: ComponentFixture<ListAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
