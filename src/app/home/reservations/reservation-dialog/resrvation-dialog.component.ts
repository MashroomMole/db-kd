import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})

/**
 * ResrvationDialogComponent
 * handles new request entry dialog
 */
export class ResrvationDialogComponent implements OnInit{
  form: FormGroup;

    constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ResrvationDialogComponent>
) {}

  public onSubmit(): void  {
    if (this.form.valid) {
      this.dialogRef.close(this.form.getRawValue());
    }
}

  public ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      type: 0,
      status: '',
      submission_date: '',
      date_from: '',
      date_to: '',
      workplace_fk: '',
      user_fk: '',
      approvedBy_fk: ''
    });
  }
}
