import { Component } from '@angular/core';

@Component({
  selector: 'app-movingbar',
  standalone: false,
  
  templateUrl: './movingbar.component.html',
  styleUrl: './movingbar.component.css'
})
export class MovingbarComponent {
  items = ['portfolio', 'Portafoglio', ' Portefeuille', 'Portafolio', 'Portfólio','Портфолио','投资组合 ','ポートフォリオ','포트폴리오','पोर्टफोलियो','حقيبة أعمال','Portfölj','Χαρτοφυλάκιο','Portföy'
];
}
