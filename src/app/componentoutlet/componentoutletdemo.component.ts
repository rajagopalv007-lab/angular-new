import { Component, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
    selector: 'app-user-view',
    standalone: true,
    template: `<div style="padding: 15px; border: 2px solid lightgreen; border-radius: 5px;">
               <h3>User Dashboard</h3>
               <p>Welcome to the user area! You have limited permissions here.</p>
             </div>`
})
export class UserViewComponent { }

@Component({
    selector: 'app-admin-view',
    standalone: true,
    template: `<div style="padding: 15px; border: 2px solid salmon; border-radius: 5px;">
               <h3>Admin Dashboard</h3>
               <p>Welcome to the admin area! You have full system access.</p>
             </div>`
})
export class AdminViewComponent { }

@Component({
    selector: 'app-component-outlet-demo',
    standalone: true,
    // Make sure to import CommonModule (or specifically NgComponentOutlet) to use *ngComponentOutlet
    imports: [CommonModule, NgComponentOutlet],
    template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Dynamic Component Rendering with *ngComponentOutlet</h2>
      <p>Select a view to load dynamically:</p>
      
      <div style="margin-bottom: 20px;">
        <button (click)="loadComponent('user')" style="margin-right: 10px; padding: 5px 10px;">Load User View</button>
        <button (click)="loadComponent('admin')" style="margin-right: 10px; padding: 5px 10px;">Load Admin View</button>
        <button (click)="loadComponent('none')" style="padding: 5px 10px; color: red;">Clear</button>
      </div>

      <!-- The ngComponentOutlet directive takes a component class and renders it here dynamically -->
      <ng-container *ngComponentOutlet="currentComponent"></ng-container>
      
      <div *ngIf="!currentComponent" style="color: gray; font-style: italic;">
        No component is currently loaded.
      </div>
    </div>
  `
})
export class ComponentOutletDemoComponent {
    // Property to hold the current component class to be rendered
    currentComponent: Type<any> | null = null;

    loadComponent(type: 'user' | 'admin' | 'none') {
        switch (type) {
            case 'user':
                this.currentComponent = UserViewComponent;
                break;
            case 'admin':
                this.currentComponent = AdminViewComponent;
                break;
            default:
                this.currentComponent = null;
        }
    }
}
