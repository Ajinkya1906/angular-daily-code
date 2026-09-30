import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice12 } from './practice12';

describe('Practice12', () => {
  let component: Practice12;
  let fixture: ComponentFixture<Practice12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
