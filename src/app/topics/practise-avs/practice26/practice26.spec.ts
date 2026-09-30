import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice26 } from './practice26';

describe('Practice26', () => {
  let component: Practice26;
  let fixture: ComponentFixture<Practice26>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice26]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice26);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
