import {Component, Input, OnInit} from '@angular/core';
import {Vo} from '../../../core/models/Vo';
import {Group} from '../../../core/models/Group';
import {MatDialog} from '@angular/material';
import {CreateGroupDialogComponent} from '../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import {GroupService} from '../../../core/services/group.service';
import {SideMenuService} from '../../../shared/side-menu.service';
import {VoService} from '../../../core/services/vo.service';
import {ActivatedRoute} from '@angular/router';
import {DeleteGroupDialogComponent} from '../../../shared/components/dialogs/delete-group-dialog/delete-group-dialog.component';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-vo-groups',
  templateUrl: './vo-groups.component.html',
  styleUrls: ['./vo-groups.component.scss']
})
export class VoGroupsComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private groupService: GroupService,
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute
  ) { }

  @Input()
  vo: Vo;

  groups: Group[] = [];

  showGroupList = false;

  selected = new SelectionModel<Group>(true, []);

  onCreateGroup() {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      width: '350px',
      data: {voId: this.vo.id, parentGroup: null}
    });

    dialogRef.afterClosed().subscribe(value => {
      console.log(value);
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.groupService.getAllGroups(this.vo.id).subscribe(groups => {
          this.groups = groups;
        });
      });
    });
  }

  deleteGroup() {
    const dialogRef = this.dialog.open(DeleteGroupDialogComponent, {
      width: '450px',
      data: {voId: this.vo.id, groups: this.selected.selected}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupService.getAllGroups(this.vo.id).subscribe(groups => {
          this.groups = groups;
          this.selected.clear();
        });
      }
    });
  }

  removeAllGroups() {
    this.selected.clear();
  }
}
