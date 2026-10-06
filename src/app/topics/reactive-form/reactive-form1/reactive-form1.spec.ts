import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm1 } from './reactive-form1';

describe('ReactiveForm1', () => {
  let component: ReactiveForm1;
  let fixture: ComponentFixture<ReactiveForm1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForm1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveForm1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
