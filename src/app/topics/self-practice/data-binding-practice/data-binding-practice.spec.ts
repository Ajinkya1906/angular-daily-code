import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingPractice } from './data-binding-practice';

describe('DataBindingPractice', () => {
  let component: DataBindingPractice;
  let fixture: ComponentFixture<DataBindingPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
