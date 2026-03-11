import { Component, signal } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
    selector: 'app-button-toggle-demo',
    template: `
    <p>Button Toggle Demo</p>
   <section>
     <mat-checkbox [checked]="hideSingleSelectionIndicator()" (change)="toggleSingleSelectionIndicator()"> Hide Single Selection Indicator</mat-checkbox>
    </section>
    <section>
 <mat-checkbox
    [checked]="hideMultipleSelectionIndicator()"
    (change)="toggleMultipleSelectionIndicator()"
  >
    Hide Multiple Selection Indicator
  </mat-checkbox>
    </section>
    <section>
  <h3>Single selection</h3>
  <mat-button-toggle-group
    name="favoriteColor"
    aria-label="Favorite Color"
    [hideSingleSelectionIndicator]="hideSingleSelectionIndicator()"
  >
    <mat-button-toggle value="red">Red</mat-button-toggle>
    <mat-button-toggle value="green">Green</mat-button-toggle>
    <mat-button-toggle value="blue">Blue</mat-button-toggle>
  </mat-button-toggle-group>
</section>
<section>
  <h3>Multiple selection</h3>
  <mat-button-toggle-group
    name="ingredients"
    aria-label="Ingredients"
    [hideMultipleSelectionIndicator]="hideMultipleSelectionIndicator()"
    multiple
  >
    <mat-button-toggle value="flour">Flour</mat-button-toggle>
    <mat-button-toggle value="eggs">Eggs</mat-button-toggle>
    <mat-button-toggle value="sugar">Sugar</mat-button-toggle>
  </mat-button-toggle-group>
</section>
<section>

    `,
    standalone: true,
    imports: [MatButtonToggleModule, MatCheckboxModule],
    styles: `
    
    `,

})
export class ButtonToggleComponentDemo {
    hideSingleSelectionIndicator = signal(false);
    hideMultipleSelectionIndicator = signal(false);

    toggleSingleSelectionIndicator() {
        this.hideSingleSelectionIndicator.update(value => !value);
    }

    toggleMultipleSelectionIndicator() {
        this.hideMultipleSelectionIndicator.update(value => !value);
    }
}