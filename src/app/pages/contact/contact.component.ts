import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  sendSuccess = false;
  sendError = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.sendSuccess = false;
    this.sendError = false;

    if (this.contactForm.valid) {
      this.isLoading = true;

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };

      emailjs
        .send(
          'VOTRE_SERVICE_ID',   // 🔑 à remplacer
          'VOTRE_TEMPLATE_ID',  // 🔑 à remplacer
          templateParams,
          'VOTRE_PUBLIC_KEY'    // 🔑 à remplacer
        )
        .then(() => {
          this.sendSuccess = true;
          this.submitted = false;
          this.isLoading = false;
          this.contactForm.reset();
        })
        .catch(() => {
          this.sendError = true;
          this.isLoading = false;
        });
    }
  }
}