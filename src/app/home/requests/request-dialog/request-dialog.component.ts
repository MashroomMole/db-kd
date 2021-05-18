import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})

/**
 * RequestDialogComponent
 * handles new request entry dialog
 */
export class RequestDialogComponent implements OnInit{
  form: FormGroup;

    constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequestDialogComponent>
) {}

  public onSubmit(): void  {
    if (this.form.valid) {
      this.dialogRef.close(this.form.getRawValue());
    }
}

  public ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      type: '',
      status: '',
      submission_date: '',
      date_from: '',
      date_to: '',
      user_fk: '2',
      approvedBy_fk: ''

    });
  }
}
