import { Component } from '@angular/core';

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
})
export class MissionComponent {
    readonly breadcrumbs = [{ label: 'About', path: '/about' }];

    readonly values = [
        { title: 'Compassion', icon: 'fas fa-heart', text: 'We treat every person with kindness, patience and respect.' },
        { title: 'Partnership', icon: 'fas fa-hands-helping', text: 'You are part of your care team. We make decisions together.' },
        { title: 'Access', icon: 'fas fa-door-open', text: 'Care should be easy to get — same-day visits, video visits and clear costs.' },
        { title: 'Quality', icon: 'fas fa-award', text: 'We follow proven guidelines and keep learning to give you the best care.' },
    ];
}
