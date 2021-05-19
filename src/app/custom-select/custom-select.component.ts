import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  selectedValue = 6;
  optionList = [6, 12, 24];
  show = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown() {
    this.show = !this.show;
  }
}
