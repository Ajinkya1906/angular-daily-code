import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice3 } from './practice3';

describe('Practice3', () => {
  let component: Practice3;
  let fixture: ComponentFixture<Practice3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
