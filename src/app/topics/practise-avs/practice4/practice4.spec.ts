import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice4 } from './practice4';

describe('Practice4', () => {
  let component: Practice4;
  let fixture: ComponentFixture<Practice4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
