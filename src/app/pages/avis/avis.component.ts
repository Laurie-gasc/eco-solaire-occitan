import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Avis {
  nom: string;
  initiales: string;
  note: number;
  texte: string;
  date: string;
}

@Component({
  selector: 'app-avis',
  imports: [CommonModule],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss',
})
export class AvisComponent {

  avisList: Avis[] = [
     
     {
      nom: 'Tim',
       initiales: 'T',
      note: 5 ,
      texte: "Très satisfait de mon installation photovoltaïque de 3 kWc réalisée par Eco Solaire Occitan. L'équipe a été super réactive, à l’écoute et très professionnelle du début à la fin. Ils ont vraiment pris le temps de m’écouter, de répondre à toutes mes questions et de m’expliquer clairement les différentes étapes du projet. L’étude a été réalisée de manière très sérieuse, notamment grâce à une analyse professionnelle par drone, ce qui m’a permis d’avoir une vision précise et rassurante de l’installation. Le chantier s’est très bien déroulé, avec un travail propre, soigné et de très belles finitions.Je recommande vivement Eco Solaire Occitan pour leur sérieux, leur disponibilité et la qualité de leur travail.",
       date: 'Nouveau'
     },
  ];

  getEtoiles(note: number): number[] {
    return Array(note).fill(0);
  }

  getEtoilesVides(note: number): number[] {
    return Array(5 - note).fill(0);
  }
}