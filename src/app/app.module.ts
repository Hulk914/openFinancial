import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { ToggleSelectorComponent } from './toggle-selector/toggle-selector.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    ContentComponent,
    CustomSelectComponent,
    ToggleSelectorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
