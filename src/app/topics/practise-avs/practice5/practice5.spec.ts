import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice5 } from './practice5';

describe('Practice5', () => {
  let component: Practice5;
  let fixture: ComponentFixture<Practice5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
