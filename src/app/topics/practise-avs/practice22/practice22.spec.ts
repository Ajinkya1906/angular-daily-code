import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice22 } from './practice22';

describe('Practice22', () => {
  let component: Practice22;
  let fixture: ComponentFixture<Practice22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice22]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice22);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
