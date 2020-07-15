import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Interface/UserInterface';

@Component({
  selector: 'app-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.component.html',
  styleUrls: ['./qui-sommes-nous.component.sass'],
})
export class QuiSommesNousComponent implements OnInit {
  team: UserInterface[];

  constructor() {}

  ngOnInit(): void {
    this.team = [
      {
        name: 'Zoé',
        url: '../../../../assets/team/zoe.jpg',
        team: 'Co-fondateur / Design',
        description:
          'J’aime créer des projets qui ont une réelle utilité pour les gens, qui prennent soin d’eux et surtout qui les touchent, pour se reconnecter aux autres et à leur propre corps.',
        // contact: '',
      },
      {
        name: 'Meriem',
        url: '../../../../assets/team/meriem.jpg',
        team: 'Design',
        description:
          'Ma motivation en tant que designer du “care” est de participer à la redécouverte de la capacité d’agir du patient.',
        // contact: '',
      },
      {
        name: 'Emma',
        url: '../../../../assets/team/emma.jpg',
        team: 'Ingénieure',
        description:
          'J’ai la volonté de partager et proposer mon aide, car chacun a le droit de se sentir bien dans son corps.',
        // contact: '',
      },
      {
        name: 'Sarah',
        url: '../../../../assets/team/sarah.jpg',
        team: 'Design',
        description:
          'Je pense que la sensibilité apporte les meilleures solutions.',
        // contact: '',
      },
      {
        name: 'Samuel',
        url: '../../../../assets/team/samuel.jpg',
        team: 'Design',
        description:
          'Créer une admiration pour la matière, utiliser les matériaux dans leurs pleines capacités sensorielles',
        // contact: '',
      },
      {
        name: 'Guillaume Monot',
        url: '../../../../assets/team/guillaume.jpg',
        team: 'Tech',
        contact: 'https://google.fr',
      },
      {
        name: 'Julien Delane',
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
