import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice28 } from './practice28';

describe('Practice28', () => {
  let component: Practice28;
  let fixture: ComponentFixture<Practice28>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice28]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice28);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
