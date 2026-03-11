import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "../dirs/highlight.directive";

@Component({
    selector: 'app-basicform',
    template: `
    <label for="framework">
  Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="framework" name="framework"/>
</label>
<p [appHighlight]="color">You selected {{framework}}</p>
    `,
    standalone: true,
    imports: [FormsModule, HighlightDirective],
    styles: `
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    `
})
export class BasicForm {
    framework = 'Angular';
    color = 'green';
}