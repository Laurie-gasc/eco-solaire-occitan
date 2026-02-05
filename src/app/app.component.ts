import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderComponent } from "./core/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { AvisComponent } from "./pages/avis/avis.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { RealisationsComponent } from "./pages/realisations/realisations.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AvisComponent,
    ContactComponent,
    RealisationsComponent,
    PresentationComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eco-solaire-occitan';
}