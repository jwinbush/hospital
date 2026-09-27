import { Component } from '@angular/core';
import { CONTACT, INSURANCE_PLANS } from '../../site-content';

@Component({
    selector: 'app-insurance-billing',
    templateUrl: './insurance-billing.component.html',
})
export class InsuranceBillingComponent {
    readonly breadcrumbs = [{ label: 'Patient Resources', path: '/patient-resources' }];
    readonly plans = INSURANCE_PLANS;
    readonly contact = CONTACT;

    readonly paymentOptions = [
        { title: 'Pay online', icon: 'fas fa-laptop', text: 'View and pay your bill anytime in the Patient Portal.' },
        { title: 'Pay by phone', icon: 'fas fa-phone', text: `Call our billing team at ${CONTACT.phone}, Monday–Friday.` },
        { title: 'Payment plans', icon: 'fas fa-calendar-alt', text: 'Ask about monthly payment plans with no interest.' },
    ];
}
