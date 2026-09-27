import { Component } from '@angular/core';
import { LOCATIONS, PROVIDERS, Provider, SERVICES } from '../../site-content';

/** Provider directory with search and filters: /find-a-doctor */
@Component({
    selector: 'app-find-a-doctor',
    templateUrl: './find-a-doctor.component.html',
    styleUrls: ['./find-a-doctor.component.scss'],
})
export class FindADoctorComponent {
    readonly services = SERVICES;
    readonly locations = LOCATIONS;
    readonly languages = [...new Set(PROVIDERS.flatMap((p) => p.languages))].sort();

    /* ---- Filter values (bound to the form) ---- */
    search = '';
    serviceSlug = '';
    location = '';
    language = '';
    acceptingOnly = false;

    get results(): Provider[] {
        const search = this.search.trim().toLowerCase();

        return PROVIDERS.filter((provider) =>
            (!search || `${provider.name} ${provider.title}`.toLowerCase().includes(search)) &&
            (!this.serviceSlug || provider.serviceSlug === this.serviceSlug) &&
            (!this.location || provider.location === this.location) &&
            (!this.language || provider.languages.includes(this.language)) &&
            (!this.acceptingOnly || provider.acceptingNewPatients),
        );
    }

    clearFilters(): void {
        this.search = '';
        this.serviceSlug = '';
        this.location = '';
        this.language = '';
        this.acceptingOnly = false;
    }
}
