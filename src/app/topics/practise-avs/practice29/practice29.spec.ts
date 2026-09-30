import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice29 } from './practice29';

describe('Practice29', () => {
  let component: Practice29;
  let fixture: ComponentFixture<Practice29>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice29]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice29);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
