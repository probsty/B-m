import {Component, OnInit, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
})
export class DialogComponent implements OnInit {
  m_title: string;
  m_description: string;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.m_title = data.title;
    this.m_description = data.description;
  }

  ngOnInit(): void {
    console.log(this.m_title);
    console.log(this.m_description);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
