import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersComponent } from './tela-pedido.component';

describe('ContainersComponent', () => {
  let component: ContainersComponent;
  let fixture: ComponentFixture<ContainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersComponent]
    });
    fixture = TestBed.createComponent(ContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
