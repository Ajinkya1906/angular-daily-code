import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice9 } from './practice9';

describe('Practice9', () => {
  let component: Practice9;
  let fixture: ComponentFixture<Practice9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
