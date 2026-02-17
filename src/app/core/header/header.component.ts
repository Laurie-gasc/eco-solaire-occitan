import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

constructor(private el: ElementRef) {}
// ElementRef permet de manipuler le DOM natif du component (ici pour le header).

ngAfterViewInit() {
  // Une fois que le DOM est rendu, on initialise l'observateur et le slider

  const links = this.el.nativeElement.querySelectorAll('.nav-links a');
  // Récupère tous les liens de navigation dans le header

  const sections = document.querySelectorAll('section[id]');
  // Récupère toutes les sections de la page ayant un id (pour le scroll)

  const map = new Map<string, HTMLElement>();
  // Map pour associer chaque id de section à son lien correspondant

  links.forEach((link: HTMLElement) => {
    const target = link.dataset['target'];
    if (target) map.set(target, link);
  });
  // Remplit la map avec dataset-target des liens → section correspondante

  const observer = new IntersectionObserver(entries => {
    // Observer détecte quelle section est visible à l'écran

    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      // Ignore si la section n'est pas visible à 60%

      links.forEach((l: { classList: { remove: (arg0: string) => any; }; }) => l.classList.remove('active'));
      // Supprime la classe active sur tous les liens

      const activeLink = map.get(entry.target.id);
      if (activeLink) {
        activeLink.classList.add('active');
        this.moveSlider(activeLink);
      }
      // Ajoute active sur le lien correspondant et bouge le slider
    });

  }, { threshold: 0.6 });
  // threshold = 0.6 → déclenche quand 60% de la section est visible

  sections.forEach(section => observer.observe(section));
  // On observe toutes les sections
}

moveSlider(active: HTMLElement) {
  const slider = this.el.nativeElement.querySelector('.slider');
  const parent = active.parentElement;
  if (!slider || !parent) return;
  // Vérifie que le slider et le parent existent

  const rect = active.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();

  slider.style.width = rect.width + 'px';
  slider.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  // Positionne et redimensionne le slider sous le lien actif
}
}
