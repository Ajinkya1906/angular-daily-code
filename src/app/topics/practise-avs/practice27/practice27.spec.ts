import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice27 } from './practice27';

describe('Practice27', () => {
  let component: Practice27;
  let fixture: ComponentFixture<Practice27>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice27]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice27);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
