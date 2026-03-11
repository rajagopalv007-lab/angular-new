import { Component } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
@Component({
    selector: 'app-badge',
    template: `
    <p>Badge Demo</p>
    <div matBadge="4" matBadgeOverlap="false" class="demo-section">Text with a badge</div>
    `,
    standalone: true,
    imports: [MatBadgeModule],
    styles: `
    :host {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-section + .demo-section {
  margin-top: 16px;
}
    `
})
export class BadgeComponent {
    hidden = false;
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}