import { Component, computed, signal } from "@angular/core";

@Component({
    selector: 'app-signalsdemo',
    template: `
    <p>Signals Demo</p>
    <p>Count: {{count()}}</p>
    <p>Squared Count: {{squaredCount()}}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>    
    `,
    standalone: true,
})
export class SignalsDemo {

    count = signal(0);

    increment() {
        this.count.update(count => count + 1);
    }

    decrement() {
        this.count.update(count => count - 1);
    }

    squaredCount = computed(() => this.count() * this.count());

}