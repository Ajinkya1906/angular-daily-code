import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice2 } from './practice2';

describe('Practice2', () => {
  let component: Practice2;
  let fixture: ComponentFixture<Practice2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
