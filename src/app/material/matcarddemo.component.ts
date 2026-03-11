import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Card overview
 */
@Component({
    selector: 'app-matcarddemo',
    standalone: true,
    template: `
   <mat-card class="example-card" appearance="outlined">
<mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.dev/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
    <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button matButton>LIKE</button>
    <button matButton>SHARE</button>
  </mat-card-actions>
 </mat-card>
    `,
    imports: [MatCardModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOverviewExample { }