import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCreateComponent } from './journey-create.component';

describe('JourneyCreateComponent', () => {
  let component: JourneyCreateComponent;
  let fixture: ComponentFixture<JourneyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
