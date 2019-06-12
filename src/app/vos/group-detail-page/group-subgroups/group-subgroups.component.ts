import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GroupService} from '../../../core/services/group.service';
import {Group} from '../../../core/models/Group';
import {CreateGroupDialogComponent} from '../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';

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

  selected = new SelectionModel<Group>(true, []);

  showGroupList = false;

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
      this.groupService.getAllRichSubGroupsWithAttributesByNames(groupId).subscribe(groups => {
        this.groups = groups;
      });
    });
  }
}
