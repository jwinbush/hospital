import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CONDITION_CATEGORIES, ConditionCategory, PROVIDERS, Provider, Service } from '../../site-content';
import { findService } from '../../site-utils';

/** One page per service: /services/:slug */
@Component({
    selector: 'app-service-detail',
    templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
    readonly breadcrumbs = [{ label: 'Services', path: '/services' }];

    service?: Service;
    conditions: ConditionCategory[] = [];
    providers: Provider[] = [];

    private readonly destroyRef = inject(DestroyRef);

    constructor(private route: ActivatedRoute, private router: Router, private title: Title) {}

    ngOnInit(): void {
        this.route.paramMap
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((params) => {
                const service = findService(params.get('slug'));
                if (!service) {
                    this.router.navigate(['/404']);
                    return;
                }

                this.service = service;
                this.conditions = CONDITION_CATEGORIES.filter((c) => service.conditionSlugs.includes(c.slug));
                this.providers = PROVIDERS.filter((p) => p.serviceSlug === service.slug);
                this.title.setTitle(`${service.name} | Serenity Health`);
            });
    }
}
