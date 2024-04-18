import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaGraficosComponent } from './tela-graficos.component';

describe('TelaGraficosComponent', () => {
  let component: TelaGraficosComponent;
  let fixture: ComponentFixture<TelaGraficosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaGraficosComponent]
    });
    fixture = TestBed.createComponent(TelaGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
