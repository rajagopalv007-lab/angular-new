import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

/** @title Basic datepicker */
@Component({
    selector: 'datepicker-overview-example',
    standalone: true,
    providers: [provideNativeDateAdapter()],
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-form-field>
  <mat-label>Choose a date</mat-label>
   <input matInput [matDatepicker]="picker">
   <mat-hint>MM/DD/YYYY</mat-hint>
  <!--<mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>-->
  <mat-datepicker #picker></mat-datepicker>`
})
export class DatepickerOverviewExample { }