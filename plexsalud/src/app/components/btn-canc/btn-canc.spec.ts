import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCanc } from './btn-canc';

describe('BtnCanc', () => {
  let component: BtnCanc;
  let fixture: ComponentFixture<BtnCanc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCanc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCanc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
