import {Component, OnInit} from '@angular/core';
import {VoService} from '../../../../core/services/api/vo.service';
import {RegistrarService} from '../../../../core/services/api/registrar.service';
import {Vo} from '../../../../core/models/Vo';
import {ActivatedRoute} from '@angular/router';
import {Application} from '../../../../core/models/Application';

@Component({
  selector: 'app-vo-applications',
  templateUrl: './vo-applications.component.html',
  styleUrls: ['./vo-applications.component.scss']
})
export class VoApplicationsComponent implements OnInit {

  constructor(private voService: VoService,
              private registarService: RegistrarService,
              protected route: ActivatedRoute) { }

  state = 'pending';
  loading = false;
  applications: Application[] = [];
  vo: Vo;
  displayedColumns: string[] = ['id', 'createdAt', 'type', 'state', 'user', 'extSourceLoa', 'group', 'modifiedBy'];

  ngOnInit() {
    this.loading = true;
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];
      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;
        this.setData(['NEW', 'VERIFIED']);
      });
    });
  }


  setData(state: string[]) {
    this.registarService.getApplicationsForVoWithState(this.vo.id, state).subscribe(applications => {
      this.applications = applications;
      this.loading = false;
    });
  }

  select() {
    this.loading = true;
    switch (this.state) {
      case 'approved': {
        this.setData(['APPROVED']);
        break;
      }
      case 'rejected': {
        this.setData(['REJECTED']);
        break;
      }
      case 'wfmv': {
        this.setData(['NEW']);
        break;
      }
      case 'submited': {
        this.setData(['VERIFIED']);
        break;
      }
      case 'pending': {
        this.setData(['NEW', 'VERIFIED']);
        break;
      }
      case 'all': {
        this.registarService.getApplicationsForVo(this.vo.id).subscribe(applications => {
          this.applications = applications;
          this.loading = false;
        });
        break;
      }
      default: {
        break;
      }
    }
  }
}
