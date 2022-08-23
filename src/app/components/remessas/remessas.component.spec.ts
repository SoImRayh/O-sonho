/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RemessasComponent } from './remessas.component';

describe('RemessasComponent', () => {
  let component: RemessasComponent;
  let fixture: ComponentFixture<RemessasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemessasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemessasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
