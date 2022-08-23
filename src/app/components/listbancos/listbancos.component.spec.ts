import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbancosComponent } from './listbancos.component';

describe('ListbancosComponent', () => {
  let component: ListbancosComponent;
  let fixture: ComponentFixture<ListbancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbancosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
