import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-form',
  standalone: true,
  // imports: [CommonModule, ReactiveFormsModule],
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {

  emailForm: FormGroup;
  
constructor(private fb: FormBuilder, private dataService: DataService) {
  this.emailForm = this.fb.group({
    to: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    body: ['', Validators.required],
    attachment: [null, Validators.required]
  });
}

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.emailForm.patchValue({ attachment: file });
  }
  
  onSubmit(): void {

    const toValue = this.emailForm.get('to')?.value;
    const recipients: string[] = toValue ? toValue.split('[,; ]').map((email: string) => email.trim()) : [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = recipients.filter(email => !emailRegex.test(email));
    
  const formData = new FormData();   
    formData.append('to', this.emailForm.get('to')?.value);
    formData.append('subject', this.emailForm.get('subject')?.value);
    formData.append('body', this.emailForm.get('body')?.value);
    formData.append('attachment', this.emailForm.get('attachment')?.value);
   
    if (this.emailForm.valid || invalidEmails.length > 0) {
      this.dataService.sendEmail(formData).subscribe({
        next: (response) => {
          console.log('Email send successfully', response);
          this.emailForm.reset();
        },
        error: (error) => {
          console.error('Error while sending email', error);
        }
      });
    }

  }
  
}

