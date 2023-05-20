import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamianCardComponent } from './damian-card.component';

describe('DamianCardComponent', () => {
  let component: DamianCardComponent;
  let fixture: ComponentFixture<DamianCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DamianCardComponent]
    });
    fixture = TestBed.createComponent(DamianCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
