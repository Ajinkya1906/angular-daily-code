import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice6 } from './practice6';

describe('Practice6', () => {
  let component: Practice6;
  let fixture: ComponentFixture<Practice6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
