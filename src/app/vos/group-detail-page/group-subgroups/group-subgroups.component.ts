import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GroupService} from '../../../core/services/group.service';
import {Group} from '../../../core/models/Group';
import {CreateGroupDialogComponent} from '../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import {GroupSelectChange} from '../../groups-list/groups-list.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group-subgroups',
  templateUrl: './group-subgroups.component.html',
  styleUrls: ['./group-subgroups.component.scss']
})
export class GroupSubgroupsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {
  }

  group: Group;

  groups: Group[] = [];

  selectedGroups: Set<Group> = new Set<Group>();

  showTreeStructure = false;

  onCreateGroup() {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      width: '350px',
      data: {parentGroup: this.group}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const groupId = parentParams['groupId'];
      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;
      });
      this.groupService.getAllSubGroups(groupId).subscribe(groups => {
        this.groups = groups;
      });
    });
  }

  onGroupSelectChange(event: GroupSelectChange) {
    if (event.checked) {
      this.selectedGroups.add(event.group);
    } else {
      this.selectedGroups.delete(event.group);
    }
    console.log(this.selectedGroups);
  }

}
