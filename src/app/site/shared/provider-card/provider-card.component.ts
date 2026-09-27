import { Component, Input } from '@angular/core';
import { Provider } from '../../site-content';
import { initials, providerDisplayName } from '../../site-utils';

/** Summary card for one provider, linking to their profile page. */
@Component({
    selector: 'app-provider-card',
    templateUrl: './provider-card.component.html',
    styleUrls: ['./provider-card.component.scss'],
})
export class ProviderCardComponent {
    @Input({ required: true }) provider!: Provider;

    readonly initials = initials;
    readonly displayName = providerDisplayName;
}
