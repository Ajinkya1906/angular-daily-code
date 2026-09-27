import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice10 } from './practice10';

describe('Practice10', () => {
  let component: Practice10;
  let fixture: ComponentFixture<Practice10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
