import { Component, OnInit } from '@angular/core';
import { TemoignageService } from 'src/app/services/temoignage/temoignage.service';

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss'],
})
export class TemoignageComponent implements OnInit {
  constructor(private _temoignageService: TemoignageService) {}

  ngOnInit(): void {

  }
}
