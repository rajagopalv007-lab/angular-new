import { Component, input, output } from "@angular/core";

@Component({
    selector: 'app-child',
    standalone: true,
    template: `
    <p>Child Component {{inputMessage()}}</p>
    <button (click)="onChildClick()">Send Message to Parent</button>
    `
})
export class ChildComponent {

    inputMessage = input<string>();
    outputMessage = output<string>();

    onChildClick() {
        this.outputMessage.emit('Hello from child');
    }

}