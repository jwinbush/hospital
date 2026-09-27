import { Component } from '@angular/core';
import { CONTACT, JOBS } from '../../site-content';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss'],
})
export class CareersComponent {
    readonly breadcrumbs = [{ label: 'About', path: '/about' }];
    readonly jobs = JOBS;
    readonly contact = CONTACT;

    readonly benefits = [
        'Medical, dental and vision coverage',
        'Retirement plan with company match',
        'Paid time off and holidays',
        'Continuing education support',
        'Flexible and part-time schedules',
        'Supportive, team-based culture',
    ];
}
