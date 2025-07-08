import { Routes } from '@angular/router';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { AboutComponent } from './components/about/about.component';
import { SoftwareComponent } from './components/software/software.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' }, // Ruta por defecto
    { path: 'certifications', component: CertificationsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'software', component: SoftwareComponent },
    { path: '**', redirectTo: '/about' } // Redirige cualquier ruta no reconocida
];