import {Component} from '@angular/core';
import {PolishLanguageService} from "../../shared/polish-language.service";
import {TextTypes} from "../../shared/text-types";
import {animate, style, transition, trigger} from "@angular/animations";

const fadeIn = trigger('fadeIn', [
  transition(':enter', [style({opacity: 0}), animate('4s ease-out')])
])

@Component({
  selector: 'app-heart',
  standalone: true,
  imports: [],
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.css',
  animations: [fadeIn]
})
export class HeartComponent {

  texts: TextTypes;
  constructor(readonly pl_lang: PolishLanguageService) {
    this.texts = this.pl_lang.texts
  }


}
