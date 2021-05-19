import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  sliderValue = 150000;
  @Input() min = 100000;
  @Input() max = 300000;
  @Input() id = 'myrange';
  @Input() initialValue!: number;
  @Input() sliderLabel = 'Monthly Income';

  constructor() {}

  ngAfterViewInit(): void {
    this.changeGradient();
  }

  ngOnInit(): void {
    if (!this.initialValue) {
      this.sliderValue = this.min;
    } else {
      this.sliderValue = this.initialValue;
    }
  }

  sliderUpdated(event: Event) {
    this.sliderValue = +(event.target as HTMLInputElement).value;
    this.changeGradient();
  }

  changeGradient() {
    const percentage =
      ((this.sliderValue - this.min) / (this.max - this.min)) * 100;
    this.slider.nativeElement.style.background = `linear-gradient(to right, #663399 0%, #663399 ${percentage}%, #f2f6fb ${percentage}%, #f2f6fb 100%)`;
  }
}
