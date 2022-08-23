import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBancoComponent } from './update-banco.component';

describe('UpdateBancoComponent', () => {
  let component: UpdateBancoComponent;
  let fixture: ComponentFixture<UpdateBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
