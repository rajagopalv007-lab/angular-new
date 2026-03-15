import { NgTemplateOutlet } from "@angular/common";
import { Component, viewChild, TemplateRef } from "@angular/core";

@Component({
    template: `
    <p>This is a normal element</p>
    <ng-template #myFragment>
      <p>This is a template fragment</p>
    </ng-template>

    <ng-container *ngTemplateOutlet="myFragment"></ng-container>
  `,
    standalone: true,
    selector: 'component-with-fragment',
    imports: [NgTemplateOutlet]
})
export class ComponentWithFragment {
    templateRef = viewChild<TemplateRef<unknown>>(TemplateRef);
}