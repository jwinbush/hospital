import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CONTACT, LOCATIONS, PROVIDERS, SERVICES } from '../../site-content';
import { findProvider, providerDisplayName } from '../../site-utils';

/**
 * Appointment request form: /book-appointment
 * Pre-fills from links, e.g. /book-appointment?service=primary-care
 *                          or /book-appointment?provider=maya-thompson
 */
@Component({
    selector: 'app-book-appointment',
    templateUrl: './book-appointment.component.html',
})
export class BookAppointmentComponent implements OnInit {
    readonly contact = CONTACT;
    readonly services = SERVICES;
    readonly locations = LOCATIONS;
    readonly providers = PROVIDERS.filter((p) => p.acceptingNewPatients);
    readonly providerDisplayName = providerDisplayName;
    readonly timesOfDay = ['Morning', 'Afternoon', 'Evening', 'No preference'];

    readonly request = {
        patientType: 'new',
        service: '',
        location: '',
        provider: '',
        date: '',
        timeOfDay: 'No preference',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        reason: '',
    };

    submitted = false;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const params = this.route.snapshot.queryParamMap;
        const provider = findProvider(params.get('provider'));

        this.request.service = params.get('service') ?? provider?.serviceSlug ?? '';
        this.request.provider = provider?.slug ?? '';
        this.request.location =
            params.get('location') ??
            LOCATIONS.find((l) => l.name === provider?.location)?.slug ??
            '';
    }

    submit(form: NgForm): void {
        if (form.invalid) {
            form.control.markAllAsTouched();
            return;
        }
        // TODO: send `this.request` to the scheduling system once one is connected.
        this.submitted = true;
    }
}
