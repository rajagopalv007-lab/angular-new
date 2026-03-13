import { Component, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
    selector: 'app-admin-actions',
    standalone: true,
    template: `
    <div style="padding: 10px; background-color: #ffebee; border: 1px solid red; margin-top: 15px; border-radius: 4px;">
      <h4 style="margin: 0 0 10px 0; color: #c62828;">Admin Only Controls</h4>
      <button style="background-color: #d32f2f; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
        Delete Record
      </button>
      <button style="background-color: #ed6c02; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer;">
        Edit Permissions
      </button>
    </div>
  `
})
export class AdminActionsComponent { }

@Component({
    selector: 'app-component-outlet-demo2',
    standalone: true,
    imports: [CommonModule, NgComponentOutlet],
    template: `
    <div style="padding: 20px; font-family: sans-serif; border: 1px solid #ccc; max-width: 600px; border-radius: 8px;">
      <h2>Item Details Page</h2>
      
      <!-- Role Switcher (Simulating Login state) -->
      <div style="margin-bottom: 20px; padding: 10px; background-color: #f5f5f5; border-radius: 4px;">
        <p style="margin-top: 0;">Simulate Role: <strong>{{ currentRole | uppercase }}</strong></p>
        <button (click)="switchRole('user')" [disabled]="currentRole === 'user'" style="margin-right: 10px; padding: 5px 10px;">
          View as Standard User
        </button>
        <button (click)="switchRole('admin')" [disabled]="currentRole === 'admin'" style="padding: 5px 10px;">
          View as Administrator
        </button>
      </div>

      <!-- Shared Template Content for BOTH Users and Admins -->
      <div style="border: 1px solid #eee; padding: 15px; border-radius: 4px;">
        <h3 style="margin-top: 0;">Product Description</h3>
        <p>
          This is the shared content that both standard users and administrators can see. 
          Everyone has access to read this information, view styling, and perform general read-only actions.
        </p>
        <ul>
          <li>Feature A: Available to everyone</li>
          <li>Feature B: Available to everyone</li>
          <li>Status: Active</li>
        </ul>

        <!-- 
          Dynamic component placeholder for role-specific UI.
          If the user is an admin, the admin actions are injected here. 
          Otherwise, nothing is rendered.
        -->
        <ng-container *ngIf="dynamicActions">
          <ng-container *ngComponentOutlet="dynamicActions"></ng-container>
        </ng-container>
      </div>
    </div>
  `
})
export class ComponentOutletDemo2Component {
    currentRole: 'user' | 'admin' = 'user';

    // Holds the reference to the component type to dynamically render
    dynamicActions: Type<any> | null = null;

    switchRole(role: 'user' | 'admin') {
        this.currentRole = role;

        // Conditionally load the admin actions component based on the role
        if (role === 'admin') {
            this.dynamicActions = AdminActionsComponent;
        } else {
            // Clear out the dynamic segment if it's a regular user
            this.dynamicActions = null;
        }
    }
}
