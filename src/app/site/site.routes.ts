import { Routes } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MissionComponent } from './pages/mission/mission.component';
import { TeamComponent } from './pages/team/team.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { ConditionCategoryComponent } from './pages/condition-category/condition-category.component';
import { FindADoctorComponent } from './pages/find-a-doctor/find-a-doctor.component';
import { ProviderDetailComponent } from './pages/provider-detail/provider-detail.component';
import { PatientResourcesComponent } from './pages/patient-resources/patient-resources.component';
import { HealthLibraryComponent } from './pages/health-library/health-library.component';
import { PatientFormsComponent } from './pages/patient-forms/patient-forms.component';
import { InsuranceBillingComponent } from './pages/insurance-billing/insurance-billing.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { PatientPortalComponent } from './pages/patient-portal/patient-portal.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';

/** Browser tab title: "Services | Serenity Health" */
const title = (page: string) => `${page} | Serenity Health`;

/**
 * Public website pages. They all share the header and footer from SiteLayoutComponent.
 * Pages with :slug (services, conditions, providers) set their own title from site-content.ts.
 */
export const SITE_ROUTES: Routes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: '', component: HomeComponent, title: 'Serenity Health | Compassionate care, close to home' },

            // About
            { path: 'about', component: AboutComponent, title: title('About') },
            { path: 'about/mission', component: MissionComponent, title: title('Our Mission') },
            { path: 'about/team', component: TeamComponent, title: title('Our Team') },
            { path: 'about/careers', component: CareersComponent, title: title('Careers') },

            // Services
            { path: 'services', component: ServicesComponent, title: title('Services') },
            { path: 'services/:slug', component: ServiceDetailComponent },

            // Conditions & treatments
            { path: 'conditions', component: ConditionsComponent, title: title('All Conditions') },
            { path: 'conditions/:slug', component: ConditionCategoryComponent },

            // Find a doctor
            { path: 'find-a-doctor', component: FindADoctorComponent, title: title('Find a Doctor') },
            { path: 'find-a-doctor/:slug', component: ProviderDetailComponent },

            // Patient resources
            { path: 'patient-resources', component: PatientResourcesComponent, title: title('Patient Resources') },
            { path: 'patient-resources/health-library', component: HealthLibraryComponent, title: title('Health Library') },
            { path: 'patient-resources/patient-forms', component: PatientFormsComponent, title: title('Patient Forms') },
            { path: 'patient-resources/insurance-billing', component: InsuranceBillingComponent, title: title('Insurance & Billing') },
            { path: 'patient-resources/faqs', component: FaqsComponent, title: title('FAQs') },

            // Patient portal, contact, booking
            { path: 'patient-portal', component: PatientPortalComponent, title: title('Patient Portal') },
            { path: 'contact', component: ContactComponent, title: title('Contact Us') },
            { path: 'contact/locations', component: LocationsComponent, title: title('Locations') },
            { path: 'book-appointment', component: BookAppointmentComponent, title: title('Book an Appointment') },
        ],
    },

    // Old URLs from the previous site
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'our-services', redirectTo: 'services', pathMatch: 'full' },
    { path: 'careers', redirectTo: 'about/careers', pathMatch: 'full' },
    { path: 'faq', redirectTo: 'patient-resources/faqs', pathMatch: 'full' },
];
