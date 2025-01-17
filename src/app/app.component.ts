import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categories, categoriesData } from './categories';
import { StartpageComponent } from "./startpage/startpage.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amazont-DAW2';
  categories: Categories = categoriesData;
}
