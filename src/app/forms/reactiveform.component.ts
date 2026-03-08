import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UpperCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from "@angular/common";

@Component({
    selector: 'app-reactiveform',
    template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <label for="firstName">
            First Name:
            <input id="firstName" type="text" formControlName="firstName"/>
        </label>
        <label for="lastName">
            Last Name:
            <input id="lastName" type="text" formControlName="lastName"/>
        </label>
        <label name="email">
            Email:
            <input id="email" type="text" formControlName="email"/>
        </label>
        <label name="expectedSalary">
            Expected Salary:
            <input id="expectedSalary" type="text" formControlName="expectedSalary"/>
        </label>
        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <section>
        <p>Today's Date: {{today | date}}</p>
        <p>First Name: {{profileForm.value.firstName | uppercase}}</p>  
        <p>Last Name: {{profileForm.value.lastName | uppercase}}</p>
        <p>Email: {{profileForm.value.email | uppercase}}</p>
        <p>Expected Salary: {{profileForm.value.expectedSalary | currency}}</p>
    </section>
    `,
    standalone: true,
    imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, CurrencyPipe],
    styles: `
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    `
})
export class ReactiveForm {
    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        expectedSalary: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    });
    today = new Date();
    handleSubmit() {
        console.log(this.profileForm.value);
    }
}