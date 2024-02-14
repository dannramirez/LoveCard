import { Injectable } from '@angular/core';
import {TextTypes} from "./text-types";

@Injectable({
  providedIn: 'root'
})
export class EnglishLanguageService {

  texts: TextTypes = {
    question: 'You will be my Valentine??',
    warning: 'Are you kidding me?',
    warning2: 'You really don\'t want to? \u{1F62D}',
    warning3: 'Now I\'m sorry.',
    confirm: 'Yes',
    reject: 'No',
    cardText: 'I love you'
  }
}
