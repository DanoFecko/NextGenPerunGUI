import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RichResource} from '../../../core/models/RichResource';
import {SelectionModel} from '@angular/cdk/collections';
import {Group} from '../../../core/models/Group';
import {GroupService} from '../../../core/services/api/group.service';
import {ResourcesService} from '../../../core/services/api/resources.service';

@Component({
  selector: 'app-group-resources',
  templateUrl: './group-resources.component.html',
  styleUrls: ['./group-resources.component.scss']
})
export class GroupResourcesComponent implements OnInit {

  constructor(private resourcesService: ResourcesService,
              private groupService: GroupService,
              private route: ActivatedRoute) {
  }

  group: Group;
  resources: RichResource[] = [];
  selected = new SelectionModel<RichResource>(true, []);

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const groupId = parentParams['groupId'];

      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;

        this.resourcesService.getResourcesByGroup(this.group.id).subscribe(resources => {
          this.resources = resources;
        });
      });
    });
  }
}
