import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTiposComponent } from './cadastro-tipos.component';

describe('CadastroTiposComponent', () => {
  let component: CadastroTiposComponent;
  let fixture: ComponentFixture<CadastroTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
