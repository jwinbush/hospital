import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConditionCategory, PROVIDERS, Provider, Service } from '../../site-content';
import { findConditionCategory, findService } from '../../site-utils';

/** One page per condition category: /conditions/:slug */
@Component({
    selector: 'app-condition-category',
    templateUrl: './condition-category.component.html',
    styleUrls: ['./condition-category.component.scss'],
})
export class ConditionCategoryComponent implements OnInit {
    readonly breadcrumbs = [{ label: 'Conditions & Treatments', path: '/conditions' }];

    category?: ConditionCategory;
    service?: Service;
    providers: Provider[] = [];

    private readonly destroyRef = inject(DestroyRef);

    constructor(private route: ActivatedRoute, private router: Router, private title: Title) {}

    ngOnInit(): void {
        this.route.paramMap
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((params) => {
                const category = findConditionCategory(params.get('slug'));
                if (!category) {
                    this.router.navigate(['/404']);
                    return;
                }

                this.category = category;
                this.service = findService(category.serviceSlug);
                this.providers = PROVIDERS.filter((p) => p.serviceSlug === category.serviceSlug);
                this.title.setTitle(`${category.name} | Serenity Health`);
            });
    }
}
