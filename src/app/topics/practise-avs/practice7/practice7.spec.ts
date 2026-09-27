import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice7 } from './practice7';

describe('Practice7', () => {
  let component: Practice7;
  let fixture: ComponentFixture<Practice7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
