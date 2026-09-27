import { Component } from '@angular/core';

@Component({
    selector: 'app-patient-resources',
    templateUrl: './patient-resources.component.html',
})
export class PatientResourcesComponent {
    readonly resources = [
        {
            title: 'Health Library',
            path: '/patient-resources/health-library',
            icon: 'fas fa-book-medical',
            text: 'Easy-to-read articles on common conditions, prevention and healthy living.',
        },
        {
            title: 'Patient Forms',
            path: '/patient-resources/patient-forms',
            icon: 'fas fa-file-medical',
            text: 'Fill out forms before your visit to save time at check-in.',
        },
        {
            title: 'Insurance & Billing',
            path: '/patient-resources/insurance-billing',
            icon: 'fas fa-file-invoice-dollar',
            text: 'Plans we accept, how billing works and ways to pay.',
        },
        {
            title: 'FAQs',
            path: '/patient-resources/faqs',
            icon: 'fas fa-question-circle',
            text: 'Answers to common questions about appointments, results and refills.',
        },
    ];
}
