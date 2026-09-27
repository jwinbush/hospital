import { Component } from '@angular/core';

/** Wraps every public page with the site header and footer. */
@Component({
    selector: 'app-site-layout',
    template: `
        <app-navbar></app-navbar>
        <main id="main">
            <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
    `,
})
export class SiteLayoutComponent {}
