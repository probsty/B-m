import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deburr } from 'lodash';

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

  constructor(private _router: Router) {}

  private refreshDataTable(): void {
    console.log('didClick or has been affected by refresh table');

    this.rowsData = [
      {
        nom: 'MONOT',
      },
      {
        nom: 'PROBST',
      },
      {
        nom: 'DELANE',
      },
    ];
    this.temp = this.rowsData;
  }

  ngOnInit(): void {
    this.refreshDataTable();
  }

  detailUser(event: any): void {
    // this._router.navigate(['/']);
    console.log('did click on', event.selected[0].nom)
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
}
