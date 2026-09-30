import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice17 } from './practice17';

describe('Practice17', () => {
  let component: Practice17;
  let fixture: ComponentFixture<Practice17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice17);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
