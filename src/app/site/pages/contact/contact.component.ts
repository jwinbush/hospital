import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CONTACT, LOCATIONS } from '../../site-content';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    readonly contact = CONTACT;
    readonly locations = LOCATIONS;
    readonly topics = ['General question', 'Appointments', 'Billing', 'Medical records', 'Feedback'];

    readonly message = {
        name: '',
        email: '',
        phone: '',
        topic: '',
        details: '',
    };

    submitted = false;

    submit(form: NgForm): void {
        if (form.invalid) {
            form.control.markAllAsTouched();
            return;
        }
        // TODO: send `this.message` to the email service or CRM once one is connected.
        this.submitted = true;
    }
}
