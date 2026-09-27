import { Component } from '@angular/core';
import { SERVICES } from '../../site-content';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
})
export class ServicesComponent {
    readonly services = SERVICES;
}
