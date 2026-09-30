import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice21 } from './practice21';

describe('Practice21', () => {
  let component: Practice21;
  let fixture: ComponentFixture<Practice21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice21);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
