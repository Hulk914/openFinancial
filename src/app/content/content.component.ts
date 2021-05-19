import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  inputVal: string | null = '15000';
  showExisting = true;
  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {}

  inputChanged(event: any) {
    this.inputVal = event.replace(/\,/g, '').replace(/[^\d\.]/g, '');
  }

  onBlur() {
    this.inputVal = this.currencyPipe.transform(this.inputVal, 'INR');
  }
}
