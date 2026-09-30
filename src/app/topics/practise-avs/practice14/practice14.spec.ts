import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice14 } from './practice14';

describe('Practice14', () => {
  let component: Practice14;
  let fixture: ComponentFixture<Practice14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice14);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
