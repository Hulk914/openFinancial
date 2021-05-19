import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-selector',
  templateUrl: './toggle-selector.component.html',
  styleUrls: ['./toggle-selector.component.scss'],
})
export class ToggleSelectorComponent implements OnInit {
  off = false;
  @Output() toggled = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleOff() {
    this.off = !this.off;
    this.toggled.emit(!this.off);
  }
}
