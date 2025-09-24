import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnConf } from './btn-conf';

describe('BtnConf', () => {
  let component: BtnConf;
  let fixture: ComponentFixture<BtnConf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnConf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnConf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
