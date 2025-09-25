import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePatient } from './table-patient';

describe('TablePatient', () => {
  let component: TablePatient;
  let fixture: ComponentFixture<TablePatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
