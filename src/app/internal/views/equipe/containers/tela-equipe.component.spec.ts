import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEquipeComponent } from './tela-equipe.component';

describe('TelaEquipeComponent', () => {
  let component: TelaEquipeComponent;
  let fixture: ComponentFixture<TelaEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaEquipeComponent]
    });
    fixture = TestBed.createComponent(TelaEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
