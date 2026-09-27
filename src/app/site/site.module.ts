import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout.component';
import { PageHeroComponent } from './shared/page-hero/page-hero.component';
import { CtaBandComponent } from './shared/cta-band/cta-band.component';
import { ProviderCardComponent } from './shared/provider-card/provider-card.component';
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
import { NavbarComponent } from '../Utilities/navbar/navbar.component';
import { FooterComponent } from '../Utilities/footer/footer.component';

/** Everything that makes up the public website. Routes live in site.routes.ts. */
@NgModule({
    declarations: [
        // Layout and shared pieces
        SiteLayoutComponent,
        NavbarComponent,
        FooterComponent,
        PageHeroComponent,
        CtaBandComponent,
        ProviderCardComponent,

        // Pages
        HomeComponent,
        AboutComponent,
        MissionComponent,
        TeamComponent,
        CareersComponent,
        ServicesComponent,
        ServiceDetailComponent,
        ConditionsComponent,
        ConditionCategoryComponent,
        FindADoctorComponent,
        ProviderDetailComponent,
        PatientResourcesComponent,
        HealthLibraryComponent,
        PatientFormsComponent,
        InsuranceBillingComponent,
        FaqsComponent,
        PatientPortalComponent,
        ContactComponent,
        LocationsComponent,
        BookAppointmentComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule],
    // Navbar and footer are also used by the patient and hospital portal pages
    exports: [NavbarComponent, FooterComponent],
})
export class SiteModule {}
