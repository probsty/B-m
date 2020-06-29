import { Component, OnInit } from '@angular/core';
import { TemoignageService } from 'src/app/services/temoignage/temoignage.service';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageComponent implements OnInit {
  rowsTemoignageData: any;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _temoignageService: TemoignageService
  ) { }

  /*
   * Get the temoignages from the api and save the content
   */
  private refreshDataTable(): void {
    console.log("Je fais refreshDataTable")
    this._temoignageService.getAll().subscribe(
      (posts: any) => {
        console.log(posts);
        this.rowsTemoignageData = posts.filter((post: any) => {
          return post.tags.includes('temoignage');
        });
      },
      (err) => {
        console.log('An error occured while fetching Temoignage', err);
      }
    );
  }

  ngOnInit(): void {
    this.refreshDataTable();
    console.log(this.rowsTemoignageData);
  }
}
