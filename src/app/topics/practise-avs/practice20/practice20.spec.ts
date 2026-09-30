import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice20 } from './practice20';

describe('Practice20', () => {
  let component: Practice20;
  let fixture: ComponentFixture<Practice20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
