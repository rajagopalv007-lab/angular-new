import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

/**
 * @title Basic chips
 */
@Component({
    selector: 'chips-overview-example',
    standalone: true,
    imports: [MatChipsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:
        `
        <mat-chip-set aria-label="Fish selection">
  <mat-chip>One fish</mat-chip>
  <mat-chip>Two fish</mat-chip>
  <mat-chip>Three fish</mat-chip>
  <mat-chip disabled>Four fish</mat-chip>
</mat-chip-set>
    `
})
export class ChipsOverviewExample { }