import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form2.html',
  styleUrl: './reactive-form2.css',
})
export class ReactiveForm2 {
private fb = inject(FormBuilder);

//  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  submitForm() {
    if (this.registerForm.valid) {
      console.log('✅ Form Submitted:', this.registerForm.value);
    } else {
      console.log('❌ Form is invalid.');

      this.registerForm.markAllAsTouched();
    }
  }
}
