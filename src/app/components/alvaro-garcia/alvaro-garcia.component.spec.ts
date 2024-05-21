import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvaroGarciaComponent } from './alvaro-garcia.component';

describe('AlvaroGarciaComponent', () => {
  let component: AlvaroGarciaComponent;
  let fixture: ComponentFixture<AlvaroGarciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlvaroGarciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlvaroGarciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
