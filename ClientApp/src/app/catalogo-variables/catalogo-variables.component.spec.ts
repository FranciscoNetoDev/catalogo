import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoVariablesComponent } from './catalogo-variables.component';

describe('CatalogoVariablesComponent', () => {
  let component: CatalogoVariablesComponent;
  let fixture: ComponentFixture<CatalogoVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
