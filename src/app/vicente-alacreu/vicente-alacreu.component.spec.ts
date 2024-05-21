import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicenteAlacreuComponent } from './vicente-alacreu.component';

describe('VicenteAlacreuComponent', () => {
  let component: VicenteAlacreuComponent;
  let fixture: ComponentFixture<VicenteAlacreuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VicenteAlacreuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VicenteAlacreuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
