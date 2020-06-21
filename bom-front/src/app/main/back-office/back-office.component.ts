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
  rowsData: any;
  filters = {};
  filteredRows: any;

  temp: any;

  dialogDeleteRef: MatDialogRef<ConfirmDeleteDialogComponent>;

  constructor(private _dialog: MatDialog, private _router: Router) {}

  private refreshDataTable(): void {
    console.log('didClick or has been affected by refresh table');

    this.rowsData = [
      {
        nom: 'MONOT',
        prenom: 'Guillaume',
        email: 'guillaume.monot@epitech.eu',
      },
      {
        nom: 'PROBST',
        prenom: 'Yann',
        email: 'yann.probst@epitech.eu',
      },
      {
        nom: 'DELANE',
        prenom: 'Julien',
        email: 'julien.delane@epitech.eu',
      },
    ];
    this.temp = this.rowsData;
  }

  ngOnInit(): void {
    this.refreshDataTable();
  }

  detailUser(event: any): void {
    // this._router.navigate(['/']);
    console.log('did click on', event.selected[0].nom);
  }

  updateFilter(event: any, prop: string): void {
    const val = deburr(event.target.value.toLowerCase());
    this.filters[prop] = val;
    this.applyFilters();
  }

  applyFilters(): void {
    this.rowsData = this.temp.filter((d: any) => {
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

  onEditUser(row: any): void {
    console.log(row);
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

  deleteUser(row: any): void {
    this.refreshDataTable();
    console.log('Row deleted');
  }
}
