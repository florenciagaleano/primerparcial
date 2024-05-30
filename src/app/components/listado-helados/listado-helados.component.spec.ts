import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHeladosComponent } from './listado-helados.component';

describe('ListadoHeladosComponent', () => {
  let component: ListadoHeladosComponent;
  let fixture: ComponentFixture<ListadoHeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoHeladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoHeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
