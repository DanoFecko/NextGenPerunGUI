import {Component, OnInit} from '@angular/core';
import {VoService} from '../../core/services/vo.service';
import {Vo} from '../../core/models/Vo';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MenuItem} from '../../shared/MenuItem';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {Router} from '@angular/router';
import {SideMenuService} from '../../shared/side-menu.service';

@Component({
  selector: 'app-vo-select-page',
  templateUrl: './vo-select-page.component.html',
  styleUrls: ['./vo-select-page.component.scss']
})
export class VoSelectPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private router: Router
  ) { }

  formControl = new FormControl();
  vos: Vo[];
  filteredOptions: Observable<Vo[]>;

  items: MenuItem[] = [
    {
      icon: 'create1-white.svg',
      url: '/organizations/new',
      label: 'VO_MANAGEMENT.CREATE_VO',
      style: 'vo-btn'
    }
  ];

  ngOnInit() {
    this.sideMenuService.setMenuItems([]);
    this.voService.getAllVos().subscribe(vos => {
      this.vos = vos;
      this.vos = vos.sort(((vo1, vo2) => {
        if (vo1.name > vo2.name) {
          return 1;
        }

        if (vo1.name < vo2.name) {
          return -1;
        }

        return 0;
      }));

      this.filteredOptions = this.formControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: any): Vo[] {
    // Hack that ensures proper autocomplete value displaying
    if (typeof value === 'object') {
      return [];
    }

    const filterValue = value.toLowerCase();

    return value ? this.vos.filter(vo => vo.name.toLowerCase().indexOf(filterValue) === 0) : this.vos;
  }

  voSelected(event: MatAutocompleteSelectedEvent) {
    const vo: Vo = event.option.value;
    this.router.navigate([`/organizations/${vo.id}`]);
  }

  // Hack that ensures proper autocomplete value displaying
  displayFn(vo: Vo) {
    return vo ? vo.name : vo;
  }
}
