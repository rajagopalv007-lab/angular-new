import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-basicform',
    template: `
    <label for="framework">
  Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="framework" name="framework"/>
</label>
<p>You selected {{framework}}</p>
    `,
    standalone: true,
    imports: [FormsModule],
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
}