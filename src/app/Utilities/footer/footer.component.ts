import { Component } from '@angular/core';
import { CONTACT, NAVIGATION } from 'src/app/site/site-content';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    /** Sections shown as footer columns */
    readonly columns = NAVIGATION.filter((section) => section.children);
    readonly contact = CONTACT;
    readonly year = new Date().getFullYear();
}
