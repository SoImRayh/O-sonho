import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBancoComponent } from './get-banco.component';

describe('GetBancoComponent', () => {
  let component: GetBancoComponent;
  let fixture: ComponentFixture<GetBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
