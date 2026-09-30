import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice23 } from './practice23';

describe('Practice23', () => {
  let component: Practice23;
  let fixture: ComponentFixture<Practice23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice23]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice23);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
