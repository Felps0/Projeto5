import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPagamentoPage } from './add-pagamento.page';

describe('AddPagamentoPage', () => {
  let component: AddPagamentoPage;
  let fixture: ComponentFixture<AddPagamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPagamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
