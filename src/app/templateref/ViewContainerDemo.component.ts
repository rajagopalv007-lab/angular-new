import { Component, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";

@Component({
    selector: 'my-outlet',
    template: `<button (click)="showFragment()">Show</button>`,
    standalone: true
})
export class MyOutlet {
    private viewContainer = inject(ViewContainerRef);
    fragment = input<TemplateRef<unknown> | undefined>();
    showFragment() {
        const frag = this.fragment();
        if (frag) {
            this.viewContainer.createEmbeddedView(frag);
        }
    }
}

@Component({
    selector: 'component-with-fragment-ts',
    template: `
    <h2>Component with a fragment</h2>
    <ng-template #myFragment>
      <p>This is the fragment</p>
    </ng-template>
    <my-outlet [fragment]="myFragment" />
  `,
    standalone: true,
    imports: [MyOutlet]
})
export class ComponentWithFragmentTs { }