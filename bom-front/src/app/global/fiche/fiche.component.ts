import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from 'src/app/Interface/UserInterface';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.sass'],
})
export class FicheComponent implements OnInit {
  @Input() person: UserInterface;

  constructor() {}

  ngOnInit(): void {}
}
