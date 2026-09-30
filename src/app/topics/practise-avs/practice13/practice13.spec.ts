import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice13 } from './practice13';

describe('Practice13', () => {
  let component: Practice13;
  let fixture: ComponentFixture<Practice13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
