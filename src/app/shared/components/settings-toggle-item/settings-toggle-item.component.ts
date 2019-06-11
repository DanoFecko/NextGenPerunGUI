import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {openClose} from '../../animations/Animations';
import {MatSlideToggle} from '@angular/material';

@Component({
  selector: 'app-settings-toggle-item',
  templateUrl: './settings-toggle-item.component.html',
  styleUrls: ['./settings-toggle-item.component.scss'],
  animations: [
    openClose
  ]
})
export class SettingsToggleItemComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(MatSlideToggle)
  toggle: MatSlideToggle;

  @Input()
  title: string;

  modelValue: boolean;

  @Output() modelChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() get model(): boolean {
    return this.modelValue;
  }
  set model(value: boolean) {
    this.modelValue = value;
  }

  ngAfterViewInit(): void {
    this.toggle.change.subscribe(() => this.valueChanged());
  }

  valueChanged() {
    this.modelChange.emit(this.toggle.checked);
  }
}
