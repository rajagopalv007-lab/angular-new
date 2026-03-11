import { Component, signal } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { BadgeComponent } from "./badgedemo.component";
import { ButtonToggleComponentDemo } from "./buttontoggle.component";
import { CardOverviewExample } from "./matcarddemo.component";
import { ChipsOverviewExample } from "./matchipsdemo.component";
import { DatepickerOverviewExample } from "./datepickerdemo.component";
@Component({
  selector: 'app-material',
  template: `
    <p>Material Demo</p>
   <form class="example-form">
  <mat-form-field class="example-full-width">
    <mat-label>Number</mat-label>
    <input type="text"
           placeholder="Pick one"
           aria-label="Number"
           matInput
           [formControl]="myControl"
           [matAutocomplete]="auto">
    <mat-autocomplete requireSelection #auto="matAutocomplete">
      @for (option of filteredOptions | async; track option) {
        <mat-option [value]="option">{{option}}</mat-option>
      }
    </mat-autocomplete>
  </mat-form-field>
</form>
<app-badge></app-badge>
<app-button-toggle-demo></app-button-toggle-demo>
<app-matcarddemo/>
<chips-overview-example/>
<datepicker-overview-example/>
    `,
  standalone: true,
  imports: [MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe, BadgeComponent, ButtonToggleComponentDemo, CardOverviewExample, ChipsOverviewExample, DatepickerOverviewExample],
  styles: `
   .example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
    `
})
export class MaterialComponentDemo {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}