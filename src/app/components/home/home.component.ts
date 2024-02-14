import {Component, HostListener, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {PolishLanguageService} from "../../shared/polish-language.service";
import {TextTypes} from "../../shared/text-types";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from '@angular/animations';


const fadeInOut = trigger('fadeInOut', [
  state('close', style({
    opacity: 0
  })),
  transition('* => close', animate('1s ease')),
  transition(':enter', [style({opacity: 0}), animate('2s ease-out')])
])
const buttonAnimation = trigger('buttonAnimation', [
  state('run_away', style({
    transform: 'translate({{ x }}px, {{ y }}px)',
  }), { params: { x: 0, y: 0 }}),

  transition('* => run_away', animate('0.5s')),
]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeInOut, buttonAnimation]
})
export class HomeComponent implements OnInit {

  texts: TextTypes | undefined;
  runawayButtonClass: string = '';
  buttonPositionX: number | undefined;
  buttonPositionY: number | undefined;

  screenWidth: number;
  screenHeight: number;

  rejectCounter: number;

  showView = true;

  ngOnInit() {
    this.texts = this.pl_lang.texts
  }

  constructor(readonly pl_lang: PolishLanguageService, private router: Router) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.rejectCounter = 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  runaway(event: any) {
    if (this.runawayButtonClass === '') {
      this.runawayButtonClass = 'run_away'
    }

    let tmpX: number;
    let tmpY: number;

    while(true){
      tmpX = this.getRandomInt(-400, 400)
      tmpY = this.getRandomInt(-400, 400)
      if(event.x + tmpX < (this.screenWidth-200) && event.y + tmpY < (this.screenHeight - 300)) break;
    }


    this.buttonPositionX = tmpX
    this.buttonPositionY = tmpY

    this.rejectCounter += 1;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  changePage(event: any) {
    if(event.fromState==="" && event.toState==="close"){
      this.router.navigateByUrl('/heart')
    }
  }
}
