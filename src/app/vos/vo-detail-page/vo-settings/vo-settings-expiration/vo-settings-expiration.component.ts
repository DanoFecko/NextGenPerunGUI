import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {openClose} from '../../../../shared/animations/Animations';

export interface ExpirationConfiguration {
  enabled: boolean;
  periodType: 'static' | 'dynamic';
  periodStatic: string;
  periodDynamic: string;
  periodDynamicUnit: 'y' | 'd' | 'm';
  forbiddenLoasEnabled: boolean;
  forbiddenLoas: number[];
  dontExtendLoasEnabled: boolean;
  dontExtendLoas: number[];
  gracePeriodEnabled: boolean;
  gracePeriod: string;
  specialLoaPeriodsEnabled: boolean;
  loaPeriods: Map<number, string>;
}

@Component({
  selector: 'app-vo-settings-expiration',
  templateUrl: './vo-settings-expiration.component.html',
  styleUrls: ['./vo-settings-expiration.component.scss'],
  animations: [
    openClose
  ]
})
export class VoSettingsExpirationComponent implements OnInit {

  constructor() {
  }

  initialConfiguration: ExpirationConfiguration;
  currentConfiguration: ExpirationConfiguration;

  notAllowedLoas = new FormControl();
  notExtendedLoas = new FormControl();

  LOAS = [0, 1, 2];

  // TODO translation
  amountOptions = [{
    value: 'd',
    text: 'Days'
  }, {
    value: 'm',
    text: 'Months'
  }, {
    value: 'y',
    text: 'Years'
  }];

  ngOnInit() {
    let loaPeriods = new Map();
    this.LOAS.forEach(loa => loaPeriods.set(loa, ''));

    this.initialConfiguration = {
      enabled: false,
      periodType: null,
      periodStatic: '',
      periodDynamic: '',
      periodDynamicUnit: 'm',
      forbiddenLoasEnabled: false,
      forbiddenLoas: null,
      dontExtendLoas: null,
      dontExtendLoasEnabled: false,
      gracePeriodEnabled: false,
      gracePeriod: null,
      specialLoaPeriodsEnabled: false,
      loaPeriods: loaPeriods
    };

    loaPeriods = new Map();
    this.LOAS.forEach(loa => loaPeriods.set(loa, ''));

    this.currentConfiguration = {
      enabled: false,
      periodType: null,
      periodStatic: '',
      periodDynamic: '',
      periodDynamicUnit: 'm',
      forbiddenLoasEnabled: false,
      forbiddenLoas: null,
      dontExtendLoas: null,
      dontExtendLoasEnabled: false,
      gracePeriodEnabled: false,
      gracePeriod: null,
      specialLoaPeriodsEnabled: false,
      loaPeriods: loaPeriods
    };
  }

  areChangesMade(): boolean {
    if (this.currentConfiguration.enabled !== this.initialConfiguration.enabled) {
      return true;
    }
    if (this.currentConfiguration.forbiddenLoas !== this.initialConfiguration.forbiddenLoas) {
      return true;
    }
    if (this.currentConfiguration.dontExtendLoas !== this.initialConfiguration.dontExtendLoas) {
      return true;
    }

    console.log({data: this.currentConfiguration});
    // TODO
    return false;
  }
}
