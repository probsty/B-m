import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deburr } from 'lodash';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/global/comfirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.sass'],
})
export class BackOfficeComponent implements OnInit {
  rowsUserData: any;
  filters = {};
  filteredRows: any;

  tempUser: any;
  editorData = 'dsdsds';

  dialogDeleteRef: MatDialogRef<ConfirmDeleteDialogComponent>;

  constructor(private _dialog: MatDialog, private _router: Router) {}

  private refreshDataTable(): void {
    console.log('didClick or has been affected by refresh table');

    this.rowsUserData = [
      {
        nom: 'MONOT',
        prenom: 'Guillaume',
        email: 'guillaume.monot@epitech.eu',
        admin: true,
      },
      {
        nom: 'PROBST',
        prenom: 'Yann',
        email: 'yann.probst@epitech.eu',
        admin: false,
      },
      {
        nom: 'DELANE',
        prenom: 'Julien',
        email: 'julien.delane@epitech.eu',
        admin: false,
      },
    ];
    this.tempUser = this.rowsUserData;
  }

  ngOnInit(): void {
    this.refreshDataTable();
  }

  updateFilter(event: any, prop: string): void {
    const val = deburr(event.target.value.toLowerCase());
    this.filters[prop] = val;
    this.applyFilters();
  }

  applyFilters(): void {
    this.rowsUserData = this.tempUser.filter((d: any) => {
      return (
        Object.keys(this.filters).filter((p) => {
          return (
            deburr(d[p].toLowerCase()).indexOf(this.filters[p]) !== -1 ||
            !this.filters[p]
          );
        }).length === Object.keys(this.filters).length
      );
    });
  }

  dialogDelete(row: any): void {
    this.dialogDeleteRef = this._dialog.open(ConfirmDeleteDialogComponent, {
      disableClose: true,
    });

    this.dialogDeleteRef.afterClosed().subscribe((data) => {
      if (data) {
        this.deleteUser(row);
      }
    });
  }

  switchAdminRight(row: any, isAdmin: boolean): void {
    console.log(`${row.nom} is admin ${isAdmin}`);
    // call service
    this.refreshDataTable();
  }

  deleteUser(row: any): void {
    console.log('Row deleted');
    // call service
    this.refreshDataTable();
  }
}
