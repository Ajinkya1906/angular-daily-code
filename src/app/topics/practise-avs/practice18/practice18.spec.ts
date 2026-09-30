import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice18 } from './practice18';

describe('Practice18', () => {
  let component: Practice18;
  let fixture: ComponentFixture<Practice18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice18);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
