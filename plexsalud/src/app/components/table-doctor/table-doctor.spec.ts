import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDoctor } from './table-doctor';

describe('TableDoctor', () => {
  let component: TableDoctor;
  let fixture: ComponentFixture<TableDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
