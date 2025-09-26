import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickOff } from './kick-off';

describe('KickOff', () => {
  let component: KickOff;
  let fixture: ComponentFixture<KickOff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KickOff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KickOff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
