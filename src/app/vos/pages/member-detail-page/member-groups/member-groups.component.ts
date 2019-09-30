import {Component, HostBinding, OnInit} from '@angular/core';
import {GroupService} from '../../../../core/services/api/group.service';
import {Group} from '../../../../core/models/Group';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member-groups',
  templateUrl: './member-groups.component.html',
  styleUrls: ['./member-groups.component.scss']
})
export class MemberGroupsComponent implements OnInit {

  static id = 'MemberGroupsComponent';

  // used for router animation
  @HostBinding('class.router-component') true;

  constructor(
    private groupsService: GroupService,
    private route: ActivatedRoute
  ) { }

  groups: Group[];
  memberId: number;
  loading: boolean;

  filterValue = '';

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      this.memberId = parentParams['memberId'];

      this.refreshTable();
    });
  }

  refreshTable() {
    this.loading = true;
    this.groupsService.getMemberGroups(this.memberId).subscribe(groups => {
      this.groups = groups;
      this.loading = false;
    }, () => this.loading = false);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }
}
