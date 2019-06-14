import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vo} from '../../../../core/models/Vo';
import {SelectionModel} from '@angular/cdk/collections';
import {ResourcesService} from '../../../../core/services/api/resources.service';
import {RichResource} from '../../../../core/models/RichResource';
import {SideMenuService} from '../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../core/services/api/vo.service';

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

        this.resourcesService.getResourcesByVo(this.vo.id).subscribe(resources => {
          this.resources = resources;
        });
      });
    });
  }

}
