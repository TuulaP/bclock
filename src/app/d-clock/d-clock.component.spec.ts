import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DClockComponent } from './d-clock.component';

describe('DClockComponent', () => {
  let component: DClockComponent;
  let fixture: ComponentFixture<DClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
