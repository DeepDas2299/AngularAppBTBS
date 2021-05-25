import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyMainComponent } from './journey-main.component';

describe('JourneyMainComponent', () => {
  let component: JourneyMainComponent;
  let fixture: ComponentFixture<JourneyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
