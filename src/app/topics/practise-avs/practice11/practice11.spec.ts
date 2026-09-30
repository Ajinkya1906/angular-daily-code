import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice11 } from './practice11';

describe('Practice11', () => {
  let component: Practice11;
  let fixture: ComponentFixture<Practice11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
