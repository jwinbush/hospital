import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    readonly sections = [
        {
            title: 'Our Mission',
            path: '/about/mission',
            icon: 'fas fa-hand-holding-heart',
            text: 'Why we exist and the values that guide every visit.',
        },
        {
            title: 'Our Team',
            path: '/about/team',
            icon: 'fas fa-users',
            text: 'Meet the leaders and care teams behind Serenity Health.',
        },
        {
            title: 'Careers',
            path: '/about/careers',
            icon: 'fas fa-briefcase-medical',
            text: 'Join a team that puts patients and people first.',
        },
    ];

    readonly stats = [
        { value: '3', label: 'Clinic locations' },
        { value: '40+', label: 'Providers and nurses' },
        { value: '25,000', label: 'Patient visits each year' },
    ];
}
