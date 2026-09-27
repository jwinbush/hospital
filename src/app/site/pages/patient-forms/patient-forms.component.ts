import { Component } from '@angular/core';
import { PATIENT_FORMS } from '../../site-content';

@Component({
    selector: 'app-patient-forms',
    templateUrl: './patient-forms.component.html',
    styleUrls: ['./patient-forms.component.scss'],
})
export class PatientFormsComponent {
    readonly breadcrumbs = [{ label: 'Patient Resources', path: '/patient-resources' }];
    readonly forms = PATIENT_FORMS;
}
