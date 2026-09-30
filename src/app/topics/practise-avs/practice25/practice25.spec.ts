import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice25 } from './practice25';

describe('Practice25', () => {
  let component: Practice25;
  let fixture: ComponentFixture<Practice25>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice25]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice25);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
