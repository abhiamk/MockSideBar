import { AfterViewInit, Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn, TableAction } from './table.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-data-table',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './my-data-table.html',
  styleUrl: './my-data-table.scss',
})
export class MyDataTable implements AfterViewInit {
  @Input() columns: TableColumn[] = [];
  @Input() actions: TableAction[] = [];
  @Input() permissions: string[] = [];
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() isFilterable = false;
  @Input() isPageable = false;


  @Input() set data(value: any[]) {
    this.dataSource.data = value || [];
  }

  @Output() actionClick = new EventEmitter<{ action: string; row: any }>();


  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    const cols = this.columns.map(c => c.key);

    // ✅ Add actions column ONLY if actions exist
    this.displayedColumns =
      this.actions?.length ? [...cols, 'actions'] : cols;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  canShow(action: TableAction): boolean {
    return !action.permission || this.permissions.includes(action.permission);
  }


}
