import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice24 } from './practice24';

describe('Practice24', () => {
  let component: Practice24;
  let fixture: ComponentFixture<Practice24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice24]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice24);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
