import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDeleteComponent } from './journey-delete.component';

describe('JourneyDeleteComponent', () => {
  let component: JourneyDeleteComponent;
  let fixture: ComponentFixture<JourneyDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
