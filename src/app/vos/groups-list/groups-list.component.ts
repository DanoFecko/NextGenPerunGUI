import {Component,  Input, OnChanges,  SimpleChanges, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Group} from '../../core/models/Group';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnChanges {

  constructor() { }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  groups: Group[] = [];

  @Input()
  selection = new SelectionModel<Group>(true, []);

  private sort: MatSort;

  @Input()
  hideColumns: string[] = [];

  displayedColumns: string[] = ['select', 'id', 'name'];
  dataSource: MatTableDataSource<Group>;


  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Group>(this.groups);
    this.setDataSource();
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

