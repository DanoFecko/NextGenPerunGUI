import {AfterViewInit, Component, Input, OnChanges, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Attribute} from '../../../core/models/Attribute';
import {AttributeValueComponent} from './attribute-value/attribute-value.component';

@Component({
  selector: 'app-attributes-list',
  templateUrl: './attributes-list.component.html',
  styleUrls: ['./attributes-list.component.scss']
})
export class AttributesListComponent implements OnChanges, AfterViewInit {

  constructor() {
  }

  @ViewChild(MatSort, {static: true}) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChildren(AttributeValueComponent)
  items: QueryList<AttributeValueComponent>;

  @ViewChild(MatPaginator, {static: false})
  paginator: MatPaginator;

  @Input()
  attributes: Attribute[] = [];

  @Input()
  selection = new SelectionModel<Attribute>(true, []);

  private sort: MatSort;

  displayedColumns: string[] = ['select', 'id', 'name', 'value', 'description'];
  dataSource: MatTableDataSource<Attribute>;

  // set this true when used in dialog window
  @Input()
  inDialog = false;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Attribute>(this.attributes);
    this.setDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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

  checkboxLabel(row?: Attribute): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  updateMapAttributes() {
    for (const item of this.items.toArray()) {
      if (item.attribute.type === 'java.util.LinkedHashMap') {
        item.updateMapAttribute();
      }
    }
  }

  onValueChange(attribute: Attribute) {
    this.selection.select(attribute);
  }
}
