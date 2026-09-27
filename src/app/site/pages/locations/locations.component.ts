import { Component } from '@angular/core';
import { LOCATIONS } from '../../site-content';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
    readonly breadcrumbs = [{ label: 'Contact', path: '/contact' }];
    readonly locations = LOCATIONS;

    /** Link that opens the address in Google Maps */
    mapLink(address: string, city: string): string {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}`)}`;
    }
}
