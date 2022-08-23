import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBancoComponent } from './delete-banco.component';

describe('DeleteBancoComponent', () => {
  let component: DeleteBancoComponent;
  let fixture: ComponentFixture<DeleteBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
