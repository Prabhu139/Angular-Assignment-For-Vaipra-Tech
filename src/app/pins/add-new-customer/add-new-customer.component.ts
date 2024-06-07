import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.scss']
})
export class AddNewCustomerComponent implements OnInit {
  form:any = FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewCustomerComponent>,@Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.form = this.fb.group({
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required], 
      country: [''] 
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.formSubmitted = true; 
    console.log(this.form)
    // If form is invalid, stop here
    if (this.form.invalid) {
      return;
    }

    // Form is valid, proceed with submission
    console.log('Form submitted:', this.form.value);

    // Reset formSubmitted to false for next submission
    this.formSubmitted = false;
  }
  
  onCancel() {
    this.dialogRef.close();
  }

}
