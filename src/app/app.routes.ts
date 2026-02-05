import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RealisationsComponent } from './pages/realisations/realisations.component';
import { ServicesComponent } from './pages/services/services.component';
import { AvisComponent } from './pages/avis/avis.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}