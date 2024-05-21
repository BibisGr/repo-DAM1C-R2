import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicenteHerreroComponent } from './vicente-herrero.component';

describe('VicenteHerreroComponent', () => {
  let component: VicenteHerreroComponent;
  let fixture: ComponentFixture<VicenteHerreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VicenteHerreroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VicenteHerreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
