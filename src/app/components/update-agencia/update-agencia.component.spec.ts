import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgenciaComponent } from './update-agencia.component';

describe('UpdateAgenciaComponent', () => {
  let component: UpdateAgenciaComponent;
  let fixture: ComponentFixture<UpdateAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
