import { Injectable } from '@angular/core';
import {TextTypes} from "./text-types";

@Injectable({
  providedIn: 'root'
})
export class EnglishLanguageService {

  texts: TextTypes = {
    question: 'You will be my Valentine??',
    warning: 'Estas bromeando?',
    warning2: 'Realmente no quieres? \u{1F62D}',
    warning3: 'Quizas es el boton incorrecto',
    confirm: 'Si',
    reject: 'No',
    cardText: 'Love U! Nat'
  }
}
