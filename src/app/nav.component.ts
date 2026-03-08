import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-nav',
    template: `
    <nav>
        <ul>
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/blogs">Blogs</a></li>
            <li><a routerLink="/optimizedimage">Optimized Image</a></li>
            <li><a routerLink="/parent">Parent Child</a></li>
        </ul>
    </nav>
    `,
    standalone: true,
    imports: [RouterLink],
    styles: `
    nav {
        background-color: #f2f2f2;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: inline;
        margin-right: 10px;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    `
})
export class NavComponent {

}