import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoCatalgosComponent } from './edicao-catalgos.component';

describe('EdicaoCatalgosComponent', () => {
  let component: EdicaoCatalgosComponent;
  let fixture: ComponentFixture<EdicaoCatalgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoCatalgosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoCatalgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
