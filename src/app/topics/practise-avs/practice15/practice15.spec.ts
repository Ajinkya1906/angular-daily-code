import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice15 } from './practice15';

describe('Practice15', () => {
  let component: Practice15;
  let fixture: ComponentFixture<Practice15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
