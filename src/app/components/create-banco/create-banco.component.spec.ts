import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBancoComponent } from './create-banco.component';

describe('CreateBancoComponent', () => {
  let component: CreateBancoComponent;
  let fixture: ComponentFixture<CreateBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
