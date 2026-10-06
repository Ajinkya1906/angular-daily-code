import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm2 } from './reactive-form2';

describe('ReactiveForm2', () => {
  let component: ReactiveForm2;
  let fixture: ComponentFixture<ReactiveForm2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForm2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveForm2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
