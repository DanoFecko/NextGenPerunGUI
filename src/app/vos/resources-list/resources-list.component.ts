import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {RichResource} from '../../core/models/RichResource';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnChanges {

  constructor() {
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  resources: RichResource[] = [];

  private sort: MatSort;

  @Input()
  hideColumns: string[] = [];

  displayedColumns: string[] = ['select', 'id', 'name', 'facility', 'tags', 'description'];
  dataSource: MatTableDataSource<RichResource>;

  @Input()
  selection = new SelectionModel<RichResource>(true, []);

  ngOnChanges(changes: SimpleChanges) {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    this.dataSource = new MatTableDataSource<RichResource>(this.resources);
    this.setDataSource();
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: RichResource): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
