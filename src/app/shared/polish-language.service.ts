import { Injectable } from '@angular/core';
import {TextTypes} from "./text-types";

@Injectable({
  providedIn: 'root'
})
export class PolishLanguageService {
  texts: TextTypes = {
    question: 'Zostaniesz moją walentnyką?',
    warning: 'Żartujesz sobie?',
    warning2: 'Naprawde nie chcesz? \u{1F62D}',
    warning3: 'Teraz to mi przykro',
    confirm: 'Tak',
    reject: 'Nie'
  }
}
