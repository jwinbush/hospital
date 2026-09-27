import { Component } from '@angular/core';
import { FAQS } from '../../site-content';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.component.html',
})
export class FaqsComponent {
    readonly breadcrumbs = [{ label: 'Patient Resources', path: '/patient-resources' }];
    readonly faqs = FAQS;
}
