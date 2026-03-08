import { Component } from "@angular/core";
@Component({
    selector: 'app-comments',
    standalone: true,
    template: `
    <p>Comments:</p>
    <ul>
      @for (comment of comments; track $index) {
        <li>{{ comment }}</li>
      }
    </ul>
    `
})
export class Comments {

    //Generate a array of 10 random unique user comments.
    comments: any[] = [];
    constructor() {
        this.comments = this.generateComments();
    }
    generateComments() {
        const comments = [
            "This is a comment.",
            "This is another comment.",
            "This is yet another comment.",
            "This is a comment.",
            "This is another comment.",
            "This is yet another comment.",
            "This is a comment.",
            "This is another comment.",
            "This is yet another comment.",
            "This is a comment.",
        ];
        const shuffled = [...comments].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    }





}
