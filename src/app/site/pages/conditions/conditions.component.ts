import { Component } from '@angular/core';
import { CONDITION_CATEGORIES } from '../../site-content';

/** "All Conditions": every category with its conditions listed underneath. */
@Component({
    selector: 'app-conditions',
    templateUrl: './conditions.component.html',
})
export class ConditionsComponent {
    readonly categories = CONDITION_CATEGORIES;
}
