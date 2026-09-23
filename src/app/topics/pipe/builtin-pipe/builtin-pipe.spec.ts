import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinPipe } from './builtin-pipe';

describe('BuiltinPipe', () => {
  let component: BuiltinPipe;
  let fixture: ComponentFixture<BuiltinPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltinPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltinPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
