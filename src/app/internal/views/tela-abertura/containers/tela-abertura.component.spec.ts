import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAberturaComponent } from './tela-abertura.component';

describe('TelaAberturaComponent', () => {
  let component: TelaAberturaComponent;
  let fixture: ComponentFixture<TelaAberturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaAberturaComponent]
    });
    fixture = TestBed.createComponent(TelaAberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
