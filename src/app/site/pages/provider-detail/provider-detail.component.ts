import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LOCATIONS, Location, Provider, Service } from '../../site-content';
import { findProvider, findService, initials, providerDisplayName } from '../../site-utils';

/** One profile page per provider: /find-a-doctor/:slug */
@Component({
    selector: 'app-provider-detail',
    templateUrl: './provider-detail.component.html',
    styleUrls: ['./provider-detail.component.scss'],
})
export class ProviderDetailComponent implements OnInit {
    readonly breadcrumbs = [{ label: 'Find a Doctor', path: '/find-a-doctor' }];
    readonly initials = initials;

    provider?: Provider;
    displayName = '';
    service?: Service;
    location?: Location;

    private readonly destroyRef = inject(DestroyRef);

    constructor(private route: ActivatedRoute, private router: Router, private title: Title) {}

    ngOnInit(): void {
        this.route.paramMap
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((params) => {
                const provider = findProvider(params.get('slug'));
                if (!provider) {
                    this.router.navigate(['/404']);
                    return;
                }

                this.provider = provider;
                this.displayName = providerDisplayName(provider);
                this.service = findService(provider.serviceSlug);
                this.location = LOCATIONS.find((l) => l.name === provider.location);
                this.title.setTitle(`${this.displayName} | Serenity Health`);
            });
    }
}
