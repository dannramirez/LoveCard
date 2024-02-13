import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HeartComponent} from "./components/heart/heart.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'heart', component: HeartComponent}
];
