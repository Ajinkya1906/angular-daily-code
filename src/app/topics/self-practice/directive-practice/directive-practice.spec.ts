import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePractice } from './directive-practice';

describe('DirectivePractice', () => {
  let component: DirectivePractice;
  let fixture: ComponentFixture<DirectivePractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivePractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivePractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
