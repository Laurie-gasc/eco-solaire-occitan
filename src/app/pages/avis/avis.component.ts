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
     
    // {
    //   nom: '',
    //   initiales: '',
    //   note: ,
    //   texte: '',
    //   date: ''
    // },
  ];

  getEtoiles(note: number): number[] {
    return Array(note).fill(0);
  }

  getEtoilesVides(note: number): number[] {
    return Array(5 - note).fill(0);
  }
}