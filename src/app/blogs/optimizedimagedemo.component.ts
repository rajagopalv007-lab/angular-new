import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-optimizedimage',
    template: `
    <img ngSrc="https://picsum.photos/100/100" width="100" height="100" alt="Sample Image">
    `,
    standalone: true,
    imports: [NgOptimizedImage]
})
export class OptimizedImageDemo {

}