import { Component, OnDestroy } from '@angular/core';
import { CONDITION_CATEGORIES, LOCATIONS, SERVICES } from '../../site-content';

/** Hero photos; they take turns, cross-fading every few seconds */
const HERO_IMAGES = [
    'assets/images/hero-man.webp',
    'assets/images/hero-woman.webp',
    'assets/images/hero-woman-2.webp',
];
const HERO_INTERVAL = 6000; // ms each photo is shown

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
    readonly services = SERVICES;
    readonly conditions = CONDITION_CATEGORIES;
    readonly locations = LOCATIONS;
    readonly heroImages = HERO_IMAGES;
    heroIndex = 0;

    // move to the next photo, wrapping back to the first after the last
    private readonly heroTimer = setInterval(() => {
        this.heroIndex = (this.heroIndex + 1) % HERO_IMAGES.length;
    }, HERO_INTERVAL);

    /** Quick links shown under the hero */
    readonly quickLinks = [
        { label: 'Find a Doctor', path: '/find-a-doctor', icon: 'fas fa-user-md' },
        { label: 'Book an Appointment', path: '/book-appointment', icon: 'fas fa-calendar-check' },
        { label: 'Patient Portal', path: '/patient-portal', icon: 'fas fa-laptop-medical' },
        { label: 'Locations', path: '/contact/locations', icon: 'fas fa-map-marker-alt' },
    ];

    ngOnDestroy(): void {
        clearInterval(this.heroTimer);
    }
}
