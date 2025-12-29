import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataTable } from './my-data-table';

describe('MyDataTable', () => {
  let component: MyDataTable;
  let fixture: ComponentFixture<MyDataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDataTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
