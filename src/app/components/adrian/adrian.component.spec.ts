import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrianComponent } from './adrian.component';

describe('AdrianComponent', () => {
  let component: AdrianComponent;
  let fixture: ComponentFixture<AdrianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdrianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
