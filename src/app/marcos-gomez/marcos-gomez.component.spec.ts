import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosGomezComponent } from './marcos-gomez.component';

describe('MarcosGomezComponent', () => {
  let component: MarcosGomezComponent;
  let fixture: ComponentFixture<MarcosGomezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcosGomezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcosGomezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
