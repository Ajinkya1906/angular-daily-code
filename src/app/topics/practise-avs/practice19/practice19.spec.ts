import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice19 } from './practice19';

describe('Practice19', () => {
  let component: Practice19;
  let fixture: ComponentFixture<Practice19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice19);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
