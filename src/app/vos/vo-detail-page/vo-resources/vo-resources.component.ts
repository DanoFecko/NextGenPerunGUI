import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../../shared/side-menu.service';
import {VoService} from '../../../core/services/vo.service';
import {ActivatedRoute} from '@angular/router';
import {Vo} from '../../../core/models/Vo';
import {SelectionModel} from '@angular/cdk/collections';
import {ResourcesService} from '../../../core/services/resources.service';
import {RichResource} from '../../../core/models/RichResource';

@Component({
  selector: 'app-vo-resources',
  templateUrl: './vo-resources.component.html',
  styleUrls: ['./vo-resources.component.scss']
})
export class VoResourcesComponent implements OnInit {

  constructor(private resourcesService: ResourcesService,
              private sideMenuService: SideMenuService,
              private voService: VoService,
              private route: ActivatedRoute) {
  }

  vo: Vo;
  resources: RichResource[] = [];
  selected = new SelectionModel<RichResource>(true, []);

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.resourcesService.getResources(this.vo.id).subscribe(resources => {
          this.resources = resources;
        });
      });
    });
  }

}
