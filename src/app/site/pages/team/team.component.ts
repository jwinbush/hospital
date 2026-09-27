import { Component } from '@angular/core';
import { TEAM } from '../../site-content';
import { initials } from '../../site-utils';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
    readonly breadcrumbs = [{ label: 'About', path: '/about' }];
    readonly team = TEAM;
    readonly initials = initials;
}
