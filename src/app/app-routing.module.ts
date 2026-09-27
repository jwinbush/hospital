import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SITE_ROUTES } from './site/site.routes';
import { SignupComponent } from './Hospitals/signup/signup.component';
import { LoginComponent } from './Hospitals/login/login.component';
import { DashboardComponent } from './Hospitals/dashboard/dashboard.component';
import { SignupPatientComponent } from './Patients/signup-patient/signup-patient.component';
import { LoginPatientComponent } from './Patients/login-patient/login-patient.component';
import { DashboardPatientComponent } from './Patients/dashboard-patient/dashboard-patient.component';
import { ForgetPasComponent } from './Hospitals/forget-pas/forget-pas.component';
import { ForgetPasPatientComponent } from './Patients/forget-pas-patient/forget-pas-patient.component';
import { SelfAnalysisComponent } from './common-services/self-analysis/self-analysis.component';
import { ResourcesComponent } from './common-services/resources/resources.component';
import { OurProductsComponent } from './common-services/our-products/our-products.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ProfilePatientComponent } from './Patients/profile-patient/profile-patient.component';
import { ProfileHospitalComponent } from './Hospitals/profile-hospital/profile-hospital.component';
import { ErrorPageComponent } from './Utilities/error-page/error-page.component';

/** Patient and hospital portal (the logged-in app) */
const PORTAL_ROUTES: Routes = [
    { path: 'hospital-login', component: LoginComponent },
    { path: 'hospital-signup', component: SignupComponent },
    { path: 'hospital-dashboard/:id', component: DashboardComponent },
    { path: 'patient-login', component: LoginPatientComponent },
    { path: 'patient-signup', component: SignupPatientComponent },
    { path: 'patient-dashboard/:id', component: DashboardPatientComponent },
    { path: 'h-forget-pas', component: ForgetPasComponent },
    { path: 'p-forget-pas', component: ForgetPasPatientComponent },
    { path: 'self-analysis', component: SelfAnalysisComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'our-products', component: OurProductsComponent },
    { path: 'p-profile/:id', component: ProfilePatientComponent },
    { path: 'h-profile/:id', component: ProfileHospitalComponent },
    { path: 'chat', component: ChatComponent },
];

const routes: Routes = [
    ...PORTAL_ROUTES,
    ...SITE_ROUTES,
    { path: '404', component: ErrorPageComponent, title: 'Page not found | Serenity Health' },
    { path: 'error-page', redirectTo: '404' },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled', // new pages start at the top
            anchorScrolling: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
