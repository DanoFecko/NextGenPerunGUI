import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../../shared/side-menu.service';
import {VoService} from '../../../core/services/vo.service';
import {ActivatedRoute} from '@angular/router';
import {Vo} from '../../../core/models/Vo';
import {RichResource} from '../../../core/models/RichResource';
import {ResourcesService} from '../../../core/services/resources.service';

export declare class ResourceSelectChange {
  resource: RichResource;
  checked: boolean;
}

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
  selectedResources: Set<RichResource> = new Set<RichResource>();

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

  onResourceSelectChange(event: ResourceSelectChange) {
    if (event.checked) {
      this.selectedResources.add(event.resource);
    } else {
      this.selectedResources.delete(event.resource);
    }
    console.log(this.selectedResources);
  }

}
