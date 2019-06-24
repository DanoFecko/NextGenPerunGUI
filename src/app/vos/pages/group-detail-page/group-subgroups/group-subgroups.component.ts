import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GroupService} from '../../../../core/services/api/group.service';
import {Group} from '../../../../core/models/Group';
import {CreateGroupDialogComponent} from '../../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {DeleteGroupDialogComponent} from '../../../../shared/components/dialogs/delete-group-dialog/delete-group-dialog.component';

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

  deleteGroup() {
    const dialogRef = this.dialog.open(DeleteGroupDialogComponent, {
      width: '450px',
      data: {voId: this.group.id, groups: this.selected.selected}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupService.getAllSubGroups(this.group.id).subscribe(groups => {
          this.groups = groups;
          this.selected.clear();
        });
      }
    });
  }
}
