import { Component, computed, viewChild } from "@angular/core";

@Component({
    selector: 'custom-card-header',
    standalone: true,
    template:
        `
        <div>
        <h2>This is a header</h2>
        </div> 
    `
})
export class CustomCardHeader {
    text: string = '';

}
@Component({
    selector: 'custom-card',
    standalone: true,
    template: '<custom-card-header>Visit sunny California!</custom-card-header>',
    imports: [CustomCardHeader],
})
export class CustomCard {
    header = viewChild(CustomCardHeader);
    headerText = computed(() => this.header()?.text);
}