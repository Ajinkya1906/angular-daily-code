import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice30 } from './practice30';

describe('Practice30', () => {
  let component: Practice30;
  let fixture: ComponentFixture<Practice30>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice30]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice30);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
