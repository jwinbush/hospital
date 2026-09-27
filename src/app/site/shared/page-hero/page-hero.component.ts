import { Component, Input } from '@angular/core';
import { NavLink } from '../../site-content';

/**
 * Banner at the top of every inner page: breadcrumb, eyebrow, title, intro.
 *
 * <app-page-hero
 *     eyebrow="Services"
 *     title="Primary Care"
 *     intro="Your first stop for …"
 *     [breadcrumbs]="[{ label: 'Services', path: '/services' }]">
 * </app-page-hero>
 */
@Component({
    selector: 'app-page-hero',
    templateUrl: './page-hero.component.html',
    styleUrls: ['./page-hero.component.scss'],
})
export class PageHeroComponent {
    @Input() eyebrow = '';
    @Input({ required: true }) title = '';
    @Input() intro = '';
    /** Parent pages, not including Home or the current page */
    @Input() breadcrumbs: NavLink[] = [];
}
