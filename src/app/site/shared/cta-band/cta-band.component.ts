import { Component, Input } from '@angular/core';
import { CONTACT } from '../../site-content';

/** Full-width "Book an appointment" call to action, used near the bottom of pages. */
@Component({
    selector: 'app-cta-band',
    templateUrl: './cta-band.component.html',
    styleUrls: ['./cta-band.component.scss'],
})
export class CtaBandComponent {
    @Input() title = 'Ready to see a provider?';
    @Input() text = 'Book online in a few minutes, or call and our team will help you find a time that works.';

    readonly contact = CONTACT;
}
