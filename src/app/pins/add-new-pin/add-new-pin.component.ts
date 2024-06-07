import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-pin',
  templateUrl: './add-new-pin.component.html',
  styleUrls: ['./add-new-pin.component.scss']
})
export class AddNewPinComponent implements OnInit {
  form:any = FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewPinComponent>,@Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data, 'from new pin')
    this.form = this.fb.group({
      title: ['', Validators.required], 
      image: [null, [Validators.required]],
      collaborator: ['', Validators.required], 
      privacy: ['public'] 
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.form.patchValue({
        select_image: file
      });
    }
  }
  

}
