import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice8 } from './practice8';

describe('Practice8', () => {
  let component: Practice8;
  let fixture: ComponentFixture<Practice8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
