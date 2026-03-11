import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
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
   <input matInput [matDatepicker]="picker" (dateInput)="addEvent('input', $event)"
    (dateChange)="addEvent('change', $event)">
   <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <div class="example-events">
  @for (e of events(); track e) {
    <div>{{e}}</div>
  }
</div>
    <section>
    <mat-form-field>
  <mat-label>Enter a date range</mat-label>
  <mat-date-range-input [rangePicker]="ranger">
    <input matStartDate placeholder="Start date">
    <input matEndDate placeholder="End date">
  </mat-date-range-input>
  <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="ranger"></mat-datepicker-toggle>
  <mat-date-range-picker #ranger></mat-date-range-picker>
</mat-form-field>
    </section>
    `
})
export class DatepickerOverviewExample {

  events = signal<string[]>([]);

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.update(events => [...events, `${type}: ${event.value}`]);
  }

}