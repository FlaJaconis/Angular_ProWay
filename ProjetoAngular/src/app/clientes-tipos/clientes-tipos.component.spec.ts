import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTiposComponent } from './clientes-tipos.component';

describe('ClientesTiposComponent', () => {
  let component: ClientesTiposComponent;
  let fixture: ComponentFixture<ClientesTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesTiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
