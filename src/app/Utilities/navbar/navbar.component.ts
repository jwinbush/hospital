import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { CONTACT, NAVIGATION } from 'src/app/site/site-content';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    readonly navigation = NAVIGATION;
    readonly contact = CONTACT;

    /** Mobile menu open/closed */
    menuOpen = false;
    /** Which section is expanded inside the mobile menu */
    openSection: string | null = null;

    private readonly destroyRef = inject(DestroyRef);

    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {
        // Close the mobile menu after moving to a new page
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.closeMenu());
    }

    toggleMenu(): void {
        this.menuOpen ? this.closeMenu() : this.openMenu();
    }

    toggleSection(label: string): void {
        this.openSection = this.openSection === label ? null : label;
    }

    private openMenu(): void {
        this.menuOpen = true;
        this.document.body.style.overflow = 'hidden'; // stop the page scrolling behind the menu
    }

    private closeMenu(): void {
        this.menuOpen = false;
        this.openSection = null;
        this.document.body.style.overflow = '';
    }
}
