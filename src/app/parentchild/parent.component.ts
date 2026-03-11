import { Component } from "@angular/core";
import { ChildComponent } from "./child.component";

@Component({
    selector: 'app-parent',
    template: `
    <p>Parent Component</p>
    <!--<app-child inputMessage="{{message}}" (outputMessage)="onChildMessage($event)"></app-child>-->
    <app-child [inputMessage]="message" (outputMessage)="onChildMessage($event)"></app-child>
    <p>Message from child: {{messageFromChild}}</p>
    `,
    standalone: true,
    imports: [ChildComponent]
})
export class ParentComponent {

    message = 'Hello from parent';
    messageFromChild = '';

    onChildMessage(message: string) {
        this.messageFromChild = message;
    }

}