import { Component } from '@angular/core';
import { ARTICLES, Article } from '../../site-content';

@Component({
    selector: 'app-health-library',
    templateUrl: './health-library.component.html',
    styleUrls: ['./health-library.component.scss'],
})
export class HealthLibraryComponent {
    readonly breadcrumbs = [{ label: 'Patient Resources', path: '/patient-resources' }];
    readonly categories = [...new Set(ARTICLES.map((article) => article.category))];

    /** Selected topic filter ('' = all topics) */
    category = '';

    get articles(): Article[] {
        return ARTICLES.filter((article) => !this.category || article.category === this.category);
    }
}
