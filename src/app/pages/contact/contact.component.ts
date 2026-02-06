import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    // Récupération des valeurs saisies dans le formulaire
    const { name, email, message } = this.form.value;

    // Affichage d’une alerte avec les données saisies
    // (à remplacer plus tard par un envoi vers un serveur)
    alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
  }
  // Création du FormGroup avec 3 champs :
  // name, email et message (initialisés à null)
  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }
}
