import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Interface/UserInterface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.component.html',
  styleUrls: ['./qui-sommes-nous.component.sass'],
})
export class QuiSommesNousComponent implements OnInit {
//   team: any;
  team: UserInterface[];

  constructor() {}

  ngOnInit(): void {
    this.team = [
      {
        name: 'Zoé',
        url: '../../../../assets/team/zoe.jpg',
        team: 'Design / Communication',
        // contact: '',
      },
      {
        name: 'Meriem',
        url: '../../../../assets/team/meriem.jpg',
        team: 'Design',
        // contact: '',
      },
      {
        name: 'Emma',
        url: '../../../../assets/team/emma.jpg',
        team: 'Design',
        // contact: '',
      },
      {
        name: 'Sarah',
        url: '../../../../assets/team/sarah.jpg',
        team: 'Design',
        // contact: '',
      },
      {
        name: 'Samuel',
        url: '../../../../assets/team/samuel.jpg',
        team: 'Design',
        // contact: '',
      },
      {
        name: 'Guillaume Monot',
        url: '../../../../assets/team/guillaume.jpg',
        team: 'Tech',
        contact: 'https://google.fr',
      },
      {
        name: 'Julien',
        url: '../../../../assets/team/julien.jpg',
        team: 'Tech',
        contact: 'https://google.fr',
      },
      {
        name: 'Yann Probst',
        url: '../../../../assets/team/yann.jpg',
        team: 'Tech',
        contact: 'https://google.fr',
      },
    ];
  }
}
