import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpresaComponent } from './listar-empresa.component';

describe('ListarEmpresaComponent', () => {
  let component: ListarEmpresaComponent;
  let fixture: ComponentFixture<ListarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
