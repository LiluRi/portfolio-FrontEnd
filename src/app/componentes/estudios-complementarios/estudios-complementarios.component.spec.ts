import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosComplementariosComponent } from './estudios-complementarios.component';

describe('EstudiosComplementariosComponent', () => {
  let component: EstudiosComplementariosComponent;
  let fixture: ComponentFixture<EstudiosComplementariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosComplementariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosComplementariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
