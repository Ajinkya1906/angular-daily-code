import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice16 } from './practice16';

describe('Practice16', () => {
  let component: Practice16;
  let fixture: ComponentFixture<Practice16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
