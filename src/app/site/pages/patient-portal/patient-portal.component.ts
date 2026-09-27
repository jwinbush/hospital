import { Component } from '@angular/core';
import { CONTACT } from '../../site-content';

@Component({
    selector: 'app-patient-portal',
    templateUrl: './patient-portal.component.html',
})
export class PatientPortalComponent {
    readonly contact = CONTACT;

    readonly features = [
        { title: 'Message your care team', icon: 'fas fa-comment-medical', text: 'Ask non-urgent questions and get replies within two business days.' },
        { title: 'See test results', icon: 'fas fa-vial', text: 'View lab and imaging results as soon as your provider reviews them.' },
        { title: 'Manage appointments', icon: 'fas fa-calendar-check', text: 'Book, change or cancel visits anytime.' },
        { title: 'Request refills', icon: 'fas fa-prescription-bottle-alt', text: 'Send prescription refill requests to your provider.' },
        { title: 'Pay your bill', icon: 'fas fa-credit-card', text: 'View statements and pay online securely.' },
        { title: 'Fill out forms', icon: 'fas fa-file-signature', text: 'Complete paperwork before your visit.' },
    ];
}
