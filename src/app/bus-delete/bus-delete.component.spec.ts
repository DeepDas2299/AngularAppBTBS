import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDeleteComponent } from './bus-delete.component';

describe('BusDeleteComponent', () => {
  let component: BusDeleteComponent;
  let fixture: ComponentFixture<BusDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
